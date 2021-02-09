-- Deploy chatapp:uuid_extension to pg

BEGIN;

-- XXX Add DDLs here.
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
COMMIT;
