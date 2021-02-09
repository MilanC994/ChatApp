/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteInviteInput = {|
  clientMutationId?: ?string,
  id: any,
|};
export type DeleteInviteMutationVariables = {|
  input: DeleteInviteInput
|};
export type DeleteInviteMutationResponse = {|
  +deleteInvite: ?{|
    +inviteEdge: ?{|
      +node: ?{|
        +id: any,
        +user: ?{|
          +id: any,
          +name: string,
          +email: string,
        |},
        +expirationTime: ?any,
      |}
    |}
  |}
|};
export type DeleteInviteMutation = {|
  variables: DeleteInviteMutationVariables,
  response: DeleteInviteMutationResponse,
|};
*/


/*
mutation DeleteInviteMutation(
  $input: DeleteInviteInput!
) {
  deleteInvite(input: $input) {
    inviteEdge {
      node {
        id
        user {
          id
          name
          email
        }
        expirationTime
      }
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
    "type": "DeleteInviteInput!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteInvitePayload",
    "kind": "LinkedField",
    "name": "deleteInvite",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "InvitesEdge",
        "kind": "LinkedField",
        "name": "inviteEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Invite",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "email",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "expirationTime",
                "storageKey": null
              }
            ],
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
    "name": "DeleteInviteMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteInviteMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteInviteMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteInviteMutation(\n  $input: DeleteInviteInput!\n) {\n  deleteInvite(input: $input) {\n    inviteEdge {\n      node {\n        id\n        user {\n          id\n          name\n          email\n        }\n        expirationTime\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f844ce60f066b8c10ab9488d3c5ec04d';

module.exports = node;
