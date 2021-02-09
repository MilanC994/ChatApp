-- Deploy chatapp:update_new_user_on_accept_invite to pg
-- requires: chatappschema
-- requires: users
-- requires: invite


create function  chatapp.update_new_user_on_invite_accept(
  user_id uuid,
  new_name text,
  new_password text
  
) returns chatapp.users as $$
declare
  updated_user chatapp.users;
begin
       update chatapp.users set name =new_name, password = crypt(new_password, gen_salt('bf',4)) where id = user_id returning * into updated_user;
       return updated_user;
end;
$$ language plpgsql  strict security definer;
COMMIT;
