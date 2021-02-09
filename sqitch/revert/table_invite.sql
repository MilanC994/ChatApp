-- Revert chatapp:invite from pg

BEGIN;

-- XXX Add DDLs here.

DROP INDEX IF EXISTS invite_room_id_index;
DROP INDEX IF EXISTS invite_user_id_index;
DROP TABLE  IF EXISTS chatapp.invite;

COMMIT;
