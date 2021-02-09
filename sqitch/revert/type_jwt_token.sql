-- Revert chatapp:jwt_token_type from pg

BEGIN;

-- XXX Add DDLs here.
drop type chatapp.jwt_token;

COMMIT;
