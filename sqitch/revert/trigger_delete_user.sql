-- Revert chatapp:delete_user_trigger from pg


BEGIN;

-- XXX Add DDLs here.
drop trigger if exists on_delete_user on chatapp.users;
drop function if exists delete_user();
COMMIT;
