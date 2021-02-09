-- Deploy chatapp:update_user_info_function to pg
-- requires: chatappschema
-- requires: users
-- Deploy chatapp:update_user_info_function to pg
-- requires: chatappschema
-- requires: users
BEGIN;


create function chatapp.update_user_info(
  _user_id uuid,
  current_password text,
  new_name text default null,
  new_email text default null,
  new_password text default null
) returns chatapp.users as $$
declare
  account chatapp.users;
  updated_user chatapp.users;
begin
	 select a.* into account
    from chatapp.users as a
    where a.id = _user_id;

  if account.password = crypt(current_password, account.password) then
       update chatapp.users set name = 
                            CASE
                              WHEN new_name is not null THEN new_name ELSE name
                            END,
                            password = 
                            CASE
                              WHEN new_password is not null then crypt(new_password, gen_salt('bf',4)) ELSE password
                            END,
                            email = 
                            CASE 
                              WHEN new_email is not null then new_email ELSE email
                            END
                      WHERE id = _user_id returning * INTO updated_user;
       return updated_user;
  else
    RAISE EXCEPTION 'Incorrect password!';
  end if;
end;
$$ language plpgsql;
COMMIT;
