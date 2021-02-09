/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateNewUserOnInviteAcceptInput = {|
  clientMutationId?: ?string,
  userId: any,
  newName: string,
  newPassword: string,
|};
export type UpdateNewUserOnInviteAcceptMutationVariables = {|
  input: UpdateNewUserOnInviteAcceptInput
|};
export type UpdateNewUserOnInviteAcceptMutationResponse = {|
  +updateNewUserOnInviteAccept: ?{|
    +user: ?{|
      +id: any,
      +name: string,
    |}
  |}
|};
export type UpdateNewUserOnInviteAcceptMutation = {|
  variables: UpdateNewUserOnInviteAcceptMutationVariables,
  response: UpdateNewUserOnInviteAcceptMutationResponse,
|};
*/


/*
mutation UpdateNewUserOnInviteAcceptMutation(
  $input: UpdateNewUserOnInviteAcceptInput!
) {
  updateNewUserOnInviteAccept(input: $input) {
    user {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateNewUserOnInviteAcceptInput!"
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
    "concreteType": "UpdateNewUserOnInviteAcceptPayload",
    "kind": "LinkedField",
    "name": "updateNewUserOnInviteAccept",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
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
    "name": "UpdateNewUserOnInviteAcceptMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateNewUserOnInviteAcceptMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateNewUserOnInviteAcceptMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateNewUserOnInviteAcceptMutation(\n  $input: UpdateNewUserOnInviteAcceptInput!\n) {\n  updateNewUserOnInviteAccept(input: $input) {\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd6f44a7a8fe333865578e386aef85a07';

module.exports = node;
