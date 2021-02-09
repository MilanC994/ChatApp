-- Deploy chatapp:accepted_invite_triger to pg
-- requires: invite
-- requires: users
-- requires: room

BEGIN;

-- XXX Add DDLs here.

CREATE OR REPLACE FUNCTION accept_invite() RETURNS TRIGGER AS
$$
BEGIN
IF new.accepted=true then
        insert into chatapp.users_in_rooms (room_id,user_id,date_joined) values(new.room_id, new.user_id,now()::timestamp);

           RETURN new;
else
RETURN null;
end if;
END;
$$
LANGUAGE 'plpgsql';

CREATE TRIGGER trigger_accept_invite
     AFTER UPDATE ON chatapp.invite
     FOR EACH ROW
     EXECUTE PROCEDURE accept_invite();
COMMIT;


