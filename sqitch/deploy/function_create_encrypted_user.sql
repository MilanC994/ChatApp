-- Deploy chatapp:create_encrypted_user to pg
-- requires: chatappschema
-- requires: users

BEGIN;

create function chatapp.create_encrypted_user(
  nameInp varchar(255),
  emailInp varchar(255),
  passwordInp varchar(255)
) returns chatapp.jwt_token as $$
declare
user_exists boolean;
begin
select exists into user_exists(select 1 from chatapp.users where email = emailInp);
if(user_exists='false') then
    insert into chatapp.users (name,email,password,created_at) values(nameInp,emailInp,crypt(passwordInp, gen_salt('bf',4)),now()::timestamp) ;

    return chatapp.authenticate(emailInp, passwordInp);
    
else
  RAISE EXCEPTION 'User Already exist !';
  return null;
end if;
end;
$$ language plpgsql strict security definer;

COMMIT;

