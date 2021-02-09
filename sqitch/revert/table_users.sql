-- Revert chatapp:users from pg

BEGIN;
DROP TABLE  IF EXISTS chatapp.users;
COMMIT;
