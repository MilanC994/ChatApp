/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateInviteByEmailInput = {|
  clientMutationId?: ?string,
  emailinp: string,
  roomid: any,
|};
export type CreateInviteByEmailMutationVariables = {|
  input: CreateInviteByEmailInput
|};
export type CreateInviteByEmailMutationResponse = {|
  +createInviteByEmail: ?{|
    +inviteEdge: ?{|
      +node: ?{|
        +id: any,
        +email: ?string,
        +createdAt: ?any,
        +expirationTime: ?any,
      |}
    |}
  |}
|};
export type CreateInviteByEmailMutation = {|
  variables: CreateInviteByEmailMutationVariables,
  response: CreateInviteByEmailMutationResponse,
|};
*/


/*
mutation CreateInviteByEmailMutation(
  $input: CreateInviteByEmailInput!
) {
  createInviteByEmail(input: $input) {
    inviteEdge {
      node {
        id
        email
        createdAt
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
    "type": "CreateInviteByEmailInput!"
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
    "concreteType": "CreateInviteByEmailPayload",
    "kind": "LinkedField",
    "name": "createInviteByEmail",
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
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "createdAt",
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
    "name": "CreateInviteByEmailMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateInviteByEmailMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateInviteByEmailMutation",
    "operationKind": "mutation",
    "text": "mutation CreateInviteByEmailMutation(\n  $input: CreateInviteByEmailInput!\n) {\n  createInviteByEmail(input: $input) {\n    inviteEdge {\n      node {\n        id\n        email\n        createdAt\n        expirationTime\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '62d4465ff71f87674881737307f54d11';

module.exports = node;
