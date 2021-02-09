-- Revert chatapp:create_user_if_not_exists_on_invite_sent from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION IF EXISTS chatapp.create_invite_by_email;
COMMIT;
