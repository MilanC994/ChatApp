-- Deploy chatapp:delete_user_trigger to pg
-- requires: chatappschema
-- requires: users
-- requires: users_in_rooms

BEGIN;

-- XXX Add DDLs here.
CREATE OR REPLACE FUNCTION delete_user() RETURNS TRIGGER AS
$$
BEGIN
        delete from chatapp.users_in_rooms where user_id = OLD.id;
        delete from chatapp.room where user_id = OLD.id;
        delete from chatapp.invite where user_id = OLD.id;
        delete from chatapp.message where user_id = OLD.id;

           RETURN OLD;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER on_delete_user
     BEFORE DELETE ON chatapp.users
     FOR EACH ROW
     EXECUTE PROCEDURE delete_user();
COMMIT;
