-- Deploy chatapp:on_room_delete__trigger to pg
-- requires: chatappschema
-- requires: room
-- requires: invite
-- requires: message
-- requires: users_in_rooms

BEGIN;

-- XXX Add DDLs here.
CREATE OR REPLACE FUNCTION delete_room() RETURNS TRIGGER AS
$$
BEGIN
        delete from chatapp.users_in_rooms where room_id = OLD.id;
        delete from chatapp.invite where room_id = OLD.id;
        delete from chatapp.message where room_id = OLD.id;

           RETURN OLD;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER on_room_delete
     BEFORE DELETE ON chatapp.room
     FOR EACH ROW
     EXECUTE PROCEDURE delete_room();
COMMIT;
