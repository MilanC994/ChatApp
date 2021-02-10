-- Revert chatapp:graphql_message_subscriptions from pg

BEGIN;

drop function if exists chatapp.graphql_subscription;

COMMIT;
