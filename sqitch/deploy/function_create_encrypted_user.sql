-- Deploy chatapp:create_encrypted_user to pg
-- requires: chatappschema
-- requires: users


BEGIN;

create function chatapp.create_encrypted_user(
  _name varchar(255),
  _email varchar(255),
  _password varchar(255),
  _invite_id uuid default null
) returns chatapp.jwt_token as $$
declare
user_exists boolean;
user_invite chatapp.invite;
new_user chatapp.users;
begin
select exists into user_exists(select 1 from chatapp.users where email = _email);
if(user_exists='false') then
    insert into chatapp.users (name,email,password,created_at) values(_name,_email,crypt(_password, gen_salt('bf',4)),now()::timestamp);
    if(_invite_id is not null) then
      select * into new_user from chatapp.users where email =_email;
      update chatapp.invite set accepted = true where id = _invite_id returning * into user_invite; 
      insert into chatapp.users_in_rooms (room_id, user_id) values( user_invite.room_id, new_user.id);
    end if;
     return chatapp.authenticate(_email, _password);   
else
  RAISE EXCEPTION 'User Already exist !';
  return null;
end if;
end;
$$ language plpgsql  security definer;

COMMIT;

