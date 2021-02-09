-- Deploy chatapp:get_user_public_rooms to pg
-- requires: chatappschema
-- requires: users
-- requires: room
BEGIN;
create or replace function chatapp.users_all_rooms(
  u chatapp.users,
  _admin boolean default true,
  _joined boolean default true,
  _public boolean default null,
  _invite boolean default true,
  _public_only boolean default true,
  _search_term text default ''
) returns   SETOF chatapp.room  as $$
begin

return query
    select jr.* --joined
        from chatapp.users_in_rooms juir 
        join chatapp.room jr on juir.room_id = jr.id 
        where _joined = true and juir.user_id = current_setting('jwt.claims.id')::uuid 
        and jr.user_id != current_setting('jwt.claims.id')::uuid 
        and jr.name like concat(_search_term,'%')
        and ((jr.public is not null and _public is  null) OR (_public is not null and jr.public = _public))   
    union
    select * from chatapp.room where _admin = true and user_id = current_setting('jwt.claims.id')::uuid --user is admin 
    and  name like concat(_search_term,'%')
    and ((public is not null and _public is  null) OR (_public is not null and public = _public))
    union
	select ir.* 
        from chatapp.invite ii --user invited, invite not accepted
        join chatapp.room ir on ii.room_id = ir.id 
        where _invite = true and ii.user_id=current_setting('jwt.claims.id')::uuid and ii.accepted = false
        and ir.name like concat(_search_term,'%')
        and ((ir.public is not null and _public is  null) OR (_public is not null and ir.public = _public)) 
    union
    select pr.* --public rooms
        from chatapp.room pr
        where _public is not false and _public_only is true and pr.public = true and pr.user_id != current_setting('jwt.claims.id')::uuid
        and pr.id not in (select room_id from chatapp.users_in_rooms where user_id = current_setting('jwt.claims.id')::uuid)
		and pr.id not in (select room_id from chatapp.invite where accepted = false)
        and pr.name like concat(_search_term,'%')
    ORDER BY created_at desc;
    end;
$$ language plpgsql stable;

COMMIT;
