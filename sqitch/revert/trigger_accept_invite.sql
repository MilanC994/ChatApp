-- Revert chatapp:accepted_invite_triger from pg

BEGIN;

-- XXX Add DDLs here.
DROP TRIGGER if exists trigger_accept_invite on  chatapp.invite; 
drop function if exists accept_invite();
COMMIT;
