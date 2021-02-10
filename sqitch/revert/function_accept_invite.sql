-- Revert chatapp:function_accept_invite from pg

BEGIN;

drop function chatapp.accept_invite(
  _invite_id uuid
);

COMMIT;
