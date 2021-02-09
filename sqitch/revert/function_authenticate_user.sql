-- Revert chatapp:authenticate_user_function from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS chatapp.authenticate;

COMMIT;
