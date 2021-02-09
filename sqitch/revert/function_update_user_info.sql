-- Revert chatapp:update_user_info_function from pg

BEGIN;

Drop function if exists chatapp.update_user_info;
COMMIT;
