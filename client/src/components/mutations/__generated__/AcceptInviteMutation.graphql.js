/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AcceptInviteInput = {|
  clientMutationId?: ?string,
  _inviteId?: ?any,
|};
export type AcceptInviteMutationVariables = {|
  input: AcceptInviteInput
|};
export type AcceptInviteMutationResponse = {|
  +acceptInvite: ?{|
    +clientMutationId: ?string
  |}
|};
export type AcceptInviteMutation = {|
  variables: AcceptInviteMutationVariables,
  response: AcceptInviteMutationResponse,
|};
*/


/*
mutation AcceptInviteMutation(
  $input: AcceptInviteInput!
) {
  acceptInvite(input: $input) {
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "AcceptInviteInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AcceptInvitePayload",
    "kind": "LinkedField",
    "name": "acceptInvite",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AcceptInviteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AcceptInviteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AcceptInviteMutation",
    "operationKind": "mutation",
    "text": "mutation AcceptInviteMutation(\n  $input: AcceptInviteInput!\n) {\n  acceptInvite(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8c4f91454a8edc09cc352558ab9b09e9';

module.exports = node;
