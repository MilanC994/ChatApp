-- Deploy chatapp:get_current_user_profile_from_jwt to pg
-- requires: chatappschema
-- requires: users
-- requires: jwt_token_type

BEGIN;

CREATE OR REPLACE FUNCTION chatapp.current_profile() RETURNS chatapp.users
AS $$
  SELECT * FROM chatapp.users where id = current_setting('jwt.claims.id')::uuid;
$$ LANGUAGE sql STABLE;
COMMENT ON FUNCTION chatapp.current_profile() IS 'Returns the profile of the currently logged-in account.';

COMMIT;
