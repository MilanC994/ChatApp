-- Deploy chatapp:invite to pg
-- requires: users
-- requires: room

BEGIN;

-- XXX Add DDLs here.

CREATE TABLE chatapp.invite (
    id   uuid PRIMARY KEY DEFAULT uuid_generate_v4 () ,
    room_id uuid references chatapp.room(id),
    user_id uuid references chatapp.users(id),
    accepted BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT now()::TIMESTAMP,
    expiration_time TIMESTAMP default ((now()::timestamp) + interval '24 hour'),
    email  VARCHAR(255),
    unique (room_id, user_id),
    unique (room_id, email)
);

CREATE INDEX invite_user_id_index 
ON chatapp.invite(user_id);

CREATE INDEX invite_room_id_index 
ON chatapp.invite(room_id);

COMMIT;
