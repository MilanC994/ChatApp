-- Revert chatapp:room from pg

BEGIN;

DROP TABLE  IF EXISTS chatapp.room;

COMMIT;
