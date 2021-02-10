-- Revert chatapp:trigger_message_created from pg

BEGIN;

DROP TRIGGER _message_gql_create ON chatapp.message;

COMMIT;
