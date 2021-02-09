-- Deploy chatapp:jwt_token_type to pg
-- requires: chatappschema
-- requires: users

BEGIN;
DO $$ BEGIN
    create type  chatapp.jwt_token as (
  role text,
  exp integer,
  id uuid,
  is_admin boolean,
  name varchar
);

EXCEPTION
    WHEN duplicate_object THEN null;
END $$;


COMMIT;
