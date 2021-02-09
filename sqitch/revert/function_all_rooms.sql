-- Revert chatapp:get_user_public_rooms from pg

BEGIN;

drop function if exists chatapp.users_all_rooms(
  u chatapp.users,
  _admin boolean,
  _joined boolean,
  _public boolean,
  _invite boolean,
  _public_only boolean,
  _search_term text
);
COMMIT;
