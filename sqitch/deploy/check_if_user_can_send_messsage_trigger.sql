-- Deploy chatapp:check_if_user_can_send_messsage_trigger to pg
-- requires: chatappschema
-- requires: users
-- requires: room

BEGIN;


-- XXX Add DDLs here.
CREATE OR REPLACE FUNCTION function_check_if_user_can_send_message() RETURNS TRIGGER AS
$$

declare
user_can_send_message boolean;

begin
select public into user_can_send_message from chatapp.room where id = new.room_id;
if(user_can_send_message='false') then
    select exists into user_can_send_message(SELECT 1 FROM chatapp.users_in_rooms WHERE (user_id,  room_id) = (NEW.user_id, NEW.room_id));
    if(user_can_send_message='false') then
        select exists into user_can_send_message(SELECT 1 FROM chatapp.invite WHERE (user_id,  room_id) = (NEW.user_id, NEW.room_id));
        if(user_can_send_message='false') then
            select exists into user_can_send_message(SELECT 1 FROM chatapp.invite WHERE (user_id,  room_id) = (NEW.user_id, NEW.room_id));
        
        end if;
    end if;
end if;
If(user_can_send_message='false') then
           
   RAISE EXCEPTION 'Can not send Message because room is not public and you are no logner invited ';
END IF;

RETURN NEW;

END
$$
LANGUAGE 'plpgsql';

--CREATE  TRIGGER trigger_insert_creater_into_room AFTER INSERT on chatapp.room
--begin
--insert into chatapp.users_in_rooms (room_id,user_id,date_joined) values(new.id, new.user_id,now()::timestamp);
--end;

CREATE TRIGGER trigger_check_if_user_can_send_message
     Before INSERT ON chatapp.message
     FOR EACH ROW
     EXECUTE PROCEDURE function_check_if_user_can_send_message();
COMMIT;