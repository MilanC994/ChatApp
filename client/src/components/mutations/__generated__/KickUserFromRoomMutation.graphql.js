/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteUsersInRoomInput = {|
  clientMutationId?: ?string,
  id: any,
|};
export type KickUserFromRoomMutationVariables = {|
  input: DeleteUsersInRoomInput
|};
export type KickUserFromRoomMutationResponse = {|
  +deleteUsersInRoom: ?{|
    +usersInRoomEdge: ?{|
      +node: ?{|
        +id: any,
        +user: ?{|
          +id: any,
          +name: string,
        |},
        +room: ?{|
          +id: any,
          +name: string,
        |},
      |}
    |}
  |}
|};
export type KickUserFromRoomMutation = {|
  variables: KickUserFromRoomMutationVariables,
  response: KickUserFromRoomMutationResponse,
|};
*/


/*
mutation KickUserFromRoomMutation(
  $input: DeleteUsersInRoomInput!
) {
  deleteUsersInRoom(input: $input) {
    usersInRoomEdge {
      node {
        id
        user {
          id
          name
        }
        room {
          id
          name
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
    "type": "DeleteUsersInRoomInput!"
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
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "name",
    "storageKey": null
  }
],
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteUsersInRoomPayload",
    "kind": "LinkedField",
    "name": "deleteUsersInRoom",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UsersInRoomsEdge",
        "kind": "LinkedField",
        "name": "usersInRoomEdge",
        "plural": false,
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
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": (v2/*: any*/),
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Room",
                "kind": "LinkedField",
                "name": "room",
                "plural": false,
                "selections": (v2/*: any*/),
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
    "name": "KickUserFromRoomMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "KickUserFromRoomMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "KickUserFromRoomMutation",
    "operationKind": "mutation",
    "text": "mutation KickUserFromRoomMutation(\n  $input: DeleteUsersInRoomInput!\n) {\n  deleteUsersInRoom(input: $input) {\n    usersInRoomEdge {\n      node {\n        id\n        user {\n          id\n          name\n        }\n        room {\n          id\n          name\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e5b09c1a8706e032833067f8ab88bb68';

module.exports = node;
