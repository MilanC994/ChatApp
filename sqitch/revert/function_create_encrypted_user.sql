-- Revert chatapp:create_encrypted_user from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS chatapp.create_encrypted_user;
COMMIT;
