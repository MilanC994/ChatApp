/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateInviteInput = {|
  clientMutationId?: ?string,
  patch: InvitePatch,
  id: any,
|};
export type InvitePatch = {|
  id?: ?any,
  roomId?: ?any,
  userId?: ?any,
  accepted?: ?boolean,
  createdAt?: ?any,
  expirationTime?: ?any,
  email?: ?string,
|};
export type AcceptInviteMutationVariables = {|
  input: UpdateInviteInput,
  roomId: any,
|};
export type AcceptInviteMutationResponse = {|
  +updateInvite: ?{|
    +query: ?{|
      +room: ?{|
        +id: any,
        +name: string,
        +createdAt: ?any,
        +public: boolean,
        +user: ?{|
          +id: any,
          +name: string,
          +email: string,
        |},
        +usersInRooms: {|
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +id: any,
              +user: ?{|
                +id: any,
                +name: string,
                +email: string,
              |},
              +room: ?{|
                +id: any,
                +name: string,
                +createdAt: ?any,
              |},
            |}
          |}>
        |},
      |}
    |}
  |}
|};
export type AcceptInviteMutation = {|
  variables: AcceptInviteMutationVariables,
  response: AcceptInviteMutationResponse,
|};
*/


/*
mutation AcceptInviteMutation(
  $input: UpdateInviteInput!
  $roomId: UUID!
) {
  updateInvite(input: $input) {
    query {
      room(id: $roomId) {
        id
        name
        createdAt
        public
        user {
          id
          name
          email
        }
        usersInRooms {
          edges {
            node {
              id
              user {
                id
                name
                email
              }
              room {
                id
                name
                createdAt
              }
            }
          }
        }
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
    "type": "UpdateInviteInput!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "roomId",
    "type": "UUID!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    (v2/*: any*/),
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
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateInvitePayload",
    "kind": "LinkedField",
    "name": "updateInvite",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": [
              {
                "kind": "Variable",
                "name": "id",
                "variableName": "roomId"
              }
            ],
            "concreteType": "Room",
            "kind": "LinkedField",
            "name": "room",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "public",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "UsersInRoomsConnection",
                "kind": "LinkedField",
                "name": "usersInRooms",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UsersInRoomsEdge",
                    "kind": "LinkedField",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "UsersInRoom",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Room",
                            "kind": "LinkedField",
                            "name": "room",
                            "plural": false,
                            "selections": [
                              (v1/*: any*/),
                              (v2/*: any*/),
                              (v3/*: any*/)
                            ],
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
    "name": "AcceptInviteMutation",
    "selections": (v5/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AcceptInviteMutation",
    "selections": (v5/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AcceptInviteMutation",
    "operationKind": "mutation",
    "text": "mutation AcceptInviteMutation(\n  $input: UpdateInviteInput!\n  $roomId: UUID!\n) {\n  updateInvite(input: $input) {\n    query {\n      room(id: $roomId) {\n        id\n        name\n        createdAt\n        public\n        user {\n          id\n          name\n          email\n        }\n        usersInRooms {\n          edges {\n            node {\n              id\n              user {\n                id\n                name\n                email\n              }\n              room {\n                id\n                name\n                createdAt\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a6bc68da8e8dbcce00de13a041568da0';

module.exports = node;
