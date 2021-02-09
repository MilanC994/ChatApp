-- Revert chatapp:check_if_user_is_in_room_before_invite from pg

BEGIN;


drop function if exists function_check_if_user_is_in_room_before_invite() CASCADE;

COMMIT;
