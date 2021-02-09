
BEGIN;

create function chatapp.create_invite_by_email(
  emailInp varchar(255),
  roomId uuid
) returns chatapp.invite as $$
declare
user_exists boolean;
userId uuid;
newInvite chatapp.invite;
begin
select exists into user_exists(select 1 from chatapp.users where email = emailInp);
if(user_exists = true) then
    select id into userId from chatapp.users where email=emailInp;
    insert into chatapp.invite (room_id,user_id,accepted, email) values(roomId,userId,'false', emailInp) returning * into newInvite;
else
    insert into chatapp.invite (room_id,accepted, email) values(roomId,'false', emailInp) returning * into newInvite;
end if;
   return newInvite;
end;
$$ language plpgsql strict security definer;

COMMIT;

