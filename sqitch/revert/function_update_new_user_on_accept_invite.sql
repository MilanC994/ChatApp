-- Revert chatapp:update_new_user_on_accept_invite from pg

BEGIN;
drop function if exists chatapp.update_new_user_on_invite_accept;
COMMIT;
