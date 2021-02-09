-- Deploy chatapp:enumTypeOrderBy to pg
-- requires: chatappschema

BEGIN;

CREATE TYPE room_order_by AS ENUM ('created_at asc', 'created_at desc');

COMMIT;
