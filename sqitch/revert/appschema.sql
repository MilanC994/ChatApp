-- Revert chatapp:chatappschema from pg

BEGIN;

-- XXX Add DDLs here.

DROP SCHEMA chatapp;

COMMIT;
