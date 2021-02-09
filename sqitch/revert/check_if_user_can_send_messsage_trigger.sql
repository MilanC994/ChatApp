-- Revert chatapp:check_if_user_can_send_messsage_trigger from pg

BEGIN;

-- XXX Add DDLs here.
drop trigger if exists trigger_check_if_user_can_send_message on chatapp.message;
drop function if exists function_check_if_user_can_send_message() CASCADE;

COMMIT;
