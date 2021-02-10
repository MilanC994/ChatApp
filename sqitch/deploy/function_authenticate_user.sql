BEGIN;

create function chatapp.authenticate(
  email text,
  password text,
  _invite_id uuid default null
) returns chatapp.jwt_token as $$
declare
  account chatapp.users;
  user_invite chatapp.invite;
begin
  select a.* into account
    from chatapp.users as a
    where a.email = authenticate.email;

  if account.password = crypt(password, account.password) then
  --perform set_config('jwt.claims.id', account.id::varchar(255), false);
    if _invite_id is not null then
      update chatapp.invite set accepted = true where id = _invite_id returning * into user_invite;
      insert into chatapp.users_in_rooms(user_id, room_id) values(account.id, user_invite.room_id);
    end if;
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
$$ language plpgsql  security definer;
COMMIT;
