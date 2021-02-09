-- Deploy chatapp:users to pg
-- requires: chatappschema

BEGIN;

-- XXX Add DDLs here.

CREATE TABLE chatapp.users (
    id   uuid PRIMARY KEY DEFAULT uuid_generate_v4 () ,
    name  VARCHAR(255)        NOT NULL,
    email  VARCHAR(255)        NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT now()::TIMESTAMP
);

COMMIT;
