-- Deploy chatapp:check_if_user_is_in_room_before_invite to pg
-- requires: chatappschema
-- requires: room
-- requires: users_in_rooms
-- requires: users

BEGIN;


-- XXX Add DDLs here.
CREATE OR REPLACE FUNCTION function_check_if_user_is_in_room_before_invite() RETURNS TRIGGER AS
$$
BEGIN

IF EXISTS (SELECT * FROM chatapp.users_in_rooms
           WHERE (user_id,  room_id)
           = (NEW.user_id, NEW.room_id)) THEN
   RAISE EXCEPTION 'User is already in the room';
END IF;

RETURN NEW;

END
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER trigger_check_if_user_is_in_room_befor_insert_invite
     Before INSERT ON chatapp.invite
     FOR EACH ROW
     EXECUTE PROCEDURE function_check_if_user_is_in_room_before_invite();
COMMIT;

