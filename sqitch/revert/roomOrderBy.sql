-- Revert chatapp:enumTypeOrderBy from pg

BEGIN;

-- XXX Add DDLs here.
drop type if exists room_order_by;
COMMIT;
