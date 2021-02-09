-- Deploy chatapp:trigger_message_created to pg

BEGIN;

    CREATE TRIGGER _message_gql_create
    AFTER INSERT ON chatapp.message
    FOR EACH ROW
    EXECUTE PROCEDURE chatapp.graphql_subscription(
        'messageCreated', -- the "event" string, useful for the client to know what happened
        'graphql:message:$1', -- the "topic" the event will be published to, as a template
        'room_id' -- If specified, `$1` above will be replaced with NEW.id or OLD.id from the trigger.
    );

    -- CREATE TRIGGER _message_gql_create_message
    -- AFTER INSERT OR UPDATE OR DELETE ON chatapp.message
    -- FOR EACH ROW
    -- EXECUTE PROCEDURE app_public.graphql_subscription('organizationsChanged', 'graphql:user:$1', 'member_id');


COMMIT;
