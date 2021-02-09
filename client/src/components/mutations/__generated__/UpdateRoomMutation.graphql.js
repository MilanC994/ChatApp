/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateRoomInput = {|
  clientMutationId?: ?string,
  patch: RoomPatch,
  id: any,
|};
export type RoomPatch = {|
  id?: ?any,
  name?: ?string,
  userId?: ?any,
  createdAt?: ?any,
  public?: ?boolean,
|};
export type UpdateRoomMutationVariables = {|
  input: UpdateRoomInput
|};
export type UpdateRoomMutationResponse = {|
  +updateRoom: ?{|
    +roomEdge: ?{|
      +cursor: ?any,
      +node: ?{|
        +id: any,
        +name: string,
        +public: boolean,
      |},
    |}
  |}
|};
export type UpdateRoomMutation = {|
  variables: UpdateRoomMutationVariables,
  response: UpdateRoomMutationResponse,
|};
*/


/*
mutation UpdateRoomMutation(
  $input: UpdateRoomInput!
) {
  updateRoom(input: $input) {
    roomEdge {
      cursor
      node {
        id
        name
        public
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
    "type": "UpdateRoomInput!"
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
    "concreteType": "UpdateRoomPayload",
    "kind": "LinkedField",
    "name": "updateRoom",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "RoomsEdge",
        "kind": "LinkedField",
        "name": "roomEdge",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Room",
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
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "public",
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
    "name": "UpdateRoomMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateRoomMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateRoomMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateRoomMutation(\n  $input: UpdateRoomInput!\n) {\n  updateRoom(input: $input) {\n    roomEdge {\n      cursor\n      node {\n        id\n        name\n        public\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ab451dd0665664499b8c49b0ee47fcd5';

module.exports = node;
