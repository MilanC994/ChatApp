-- Deploy chatapp:function_accept_invite to pg

BEGIN;

create function chatapp.accept_invite(
  _invite_id uuid
) returns void as $$
declare 
    user_invite chatapp.invite;
begin
    update chatapp.invite set accepted = true where id = _invite_id returning * into user_invite;
    insert into chatapp.users_in_rooms(user_id, room_id) values(user_invite.user_id, user_invite.room_id);
end;
$$ language plpgsql  security definer;

COMMIT;

