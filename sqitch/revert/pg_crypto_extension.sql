-- Revert chatapp:pg_crypto_extension from pg

BEGIN;

DROP EXTENSION pgcrypto;
COMMIT;
