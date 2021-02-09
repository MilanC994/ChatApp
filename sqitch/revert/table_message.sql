-- Revert chatapp:message from pg

BEGIN;

-- XXX Add DDLs here.

DROP INDEX IF EXISTS message_room_id_index;
DROP INDEX IF EXISTS message_user_id_index;
DROP TABLE  IF EXISTS chatapp.message;


COMMIT;
