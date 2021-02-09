-- Revert chatapp:on_room_delete__trigger from pg

BEGIN;

-- XXX Add DDLs here.
drop trigger if exists trigger_on_delete_room on chatapp.room;
drop function if exists function_delete_from_users_in_rooms_on_room_delete();
COMMIT;

