-- Deploy chatapp:message to pg
-- requires: users
-- requires: room

BEGIN;

-- XXX Add DDLs here.
CREATE TABLE chatapp.message (
    id   uuid PRIMARY KEY DEFAULT uuid_generate_v4 () ,
    room_id uuid references chatapp.room(id),
    user_id uuid references chatapp.users(id),
    content VARCHAR(2255) NOT NULL,
    sent_at TIMESTAMP DEFAULT now()::TIMESTAMP
);

CREATE INDEX message_user_id_index 
ON chatapp.message(user_id);

CREATE INDEX message_room_id_index 
ON chatapp.message(room_id);


COMMIT;
