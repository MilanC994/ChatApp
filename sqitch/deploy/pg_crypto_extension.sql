-- Deploy chatapp:pg_crypto_extension to pg
-- requires: chatappschema

BEGIN;

CREATE  EXTENSION IF NOT EXISTS pgcrypto;
COMMIT;
