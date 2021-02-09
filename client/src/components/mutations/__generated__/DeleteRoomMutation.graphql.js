/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteRoomInput = {|
  clientMutationId?: ?string,
  id: any,
|};
export type DeleteRoomMutationVariables = {|
  input: DeleteRoomInput
|};
export type DeleteRoomMutationResponse = {|
  +deleteRoom: ?{|
    +roomEdge: ?{|
      +node: ?{|
        +id: any,
        +name: string,
      |}
    |}
  |}
|};
export type DeleteRoomMutation = {|
  variables: DeleteRoomMutationVariables,
  response: DeleteRoomMutationResponse,
|};
*/


/*
mutation DeleteRoomMutation(
  $input: DeleteRoomInput!
) {
  deleteRoom(input: $input) {
    roomEdge {
      node {
        id
        name
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
    "type": "DeleteRoomInput!"
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
    "concreteType": "DeleteRoomPayload",
    "kind": "LinkedField",
    "name": "deleteRoom",
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
    "name": "DeleteRoomMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteRoomMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteRoomMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteRoomMutation(\n  $input: DeleteRoomInput!\n) {\n  deleteRoom(input: $input) {\n    roomEdge {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '77b556e21b826cc5884c7513bae3605f';

module.exports = node;
