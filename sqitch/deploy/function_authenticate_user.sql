-- Deploy chatapp:authenticate_user_function to pg
-- requires: chatappschema
-- requires: users
-- requires: jwt_token_type

BEGIN;

create function chatapp.authenticate(
  email text,
  password text
) returns chatapp.jwt_token as $$
declare
  account chatapp.users;
begin
  select a.* into account
    from chatapp.users as a
    where a.email = authenticate.email;

  if account.password = crypt(password, account.password) then
  --perform set_config('jwt.claims.id', account.id::varchar(255), false);
    return (
      'postgres',
      extract(epoch from now() + interval '7 days'),
      account.id,
      'false',
      account.name
    )::chatapp.jwt_token;
  else
    RAISE EXCEPTION 'Incorrect cridentials !';
  end if;
end;
$$ language plpgsql  strict security definer;
COMMIT;
