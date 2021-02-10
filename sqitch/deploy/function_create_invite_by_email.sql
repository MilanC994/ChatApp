
BEGIN;

create function chatapp.create_invite_by_email(
  emailInp varchar(255),
  roomId uuid
) returns chatapp.invite as $$
declare
user_exists boolean;
_user_id uuid;
newInvite chatapp.invite;
user_joined boolean;
user_admin boolean;
begin
select exists into user_exists(select 1 from chatapp.users where email = emailInp);
if(user_exists = true) then
    select id into _user_id from chatapp.users where email=emailInp;
    select exists into user_admin(select 1 from chatapp.room where id = roomid and user_id = _user_id);
    if found then
      raise exception 'Can not add yourself';
    end if;
    select exists into user_joined(select 1 from chatapp.users_in_rooms where room_id = roomId and user_id = _user_id);
    if found then
      raise exception 'User is already in the room';
    end if;
    insert into chatapp.invite (room_id,user_id,accepted, email) values(roomId,_user_id,'false', emailInp) returning * into newInvite;
else
    insert into chatapp.invite (room_id,accepted, email) values(roomId,'false', emailInp) returning * into newInvite;
end if;
   return newInvite;
end;
$$ language plpgsql strict security definer;

COMMIT;

