-- Revert chatapp:users_in_rooms from pg

BEGIN;

DROP TABLE  IF EXISTS chatapp.users_in_rooms;

COMMIT;
