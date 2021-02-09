-- Deploy chatapp:users_in_rooms to pg
-- requires: users
-- requires: room

BEGIN;

-- XXX Add DDLs here.

CREATE TABLE chatapp.users_in_rooms (
    id   uuid PRIMARY KEY DEFAULT uuid_generate_v4 () ,
    room_id uuid references chatapp.room(id),
    user_id uuid references chatapp.users(id),
    date_joined TIMESTAMP DEFAULT now()::TIMESTAMP
);

CREATE INDEX users_in_rooms_user_id_index 
ON chatapp.users_in_rooms(user_id);

CREATE INDEX users_in_rooms_room_id_index 
ON chatapp.users_in_rooms(room_id);

COMMIT;
