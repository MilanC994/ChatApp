-- Deploy chatapp:room to pg
-- requires: users

BEGIN;

-- XXX Add DDLs here.

CREATE TABLE chatapp.room (
    id   uuid PRIMARY KEY DEFAULT uuid_generate_v4 () ,
    name  VARCHAR(255)        NOT NULL,
    user_id uuid references chatapp.users(id),
    created_at TIMESTAMP DEFAULT now()::TIMESTAMP,
    public boolean NOT NULL default false
);

COMMIT;
