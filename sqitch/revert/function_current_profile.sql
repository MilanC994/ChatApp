-- Revert chatapp:get_current_user_profile_from_jwt from pg

BEGIN;
DROP FUNCTION IF EXISTS chatapp.current_profile;

COMMIT;
