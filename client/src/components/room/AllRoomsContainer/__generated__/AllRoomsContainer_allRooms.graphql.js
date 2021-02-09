/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type RoomCard_room$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type AllRoomsContainer_allRooms$ref: FragmentReference;
declare export opaque type AllRoomsContainer_allRooms$fragmentType: AllRoomsContainer_allRooms$ref;
export type AllRoomsContainer_allRooms = {|
  +allRooms: {|
    +edges: $ReadOnlyArray<{|
      +cursor: ?any,
      +node: ?{|
        +$fragmentRefs: RoomCard_room$ref
      |},
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?any,
    |},
  |},
  +$refType: AllRoomsContainer_allRooms$ref,
|};
export type AllRoomsContainer_allRooms$data = AllRoomsContainer_allRooms;
export type AllRoomsContainer_allRooms$key = {
  +$data?: AllRoomsContainer_allRooms$data,
  +$fragmentRefs: AllRoomsContainer_allRooms$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "admin",
      "type": "Boolean"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "joined",
      "type": "Boolean"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "public",
      "type": "Boolean"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "invite",
      "type": "Boolean"
    },
    {
      "defaultValue": true,
      "kind": "LocalArgument",
      "name": "publicOnly",
      "type": "Boolean"
    },
    {
      "defaultValue": "sanja",
      "kind": "LocalArgument",
      "name": "searchTerm",
      "type": "String"
    },
    {
      "defaultValue": 5,
      "kind": "LocalArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor",
      "type": "Cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "allRooms"
        ]
      }
    ]
  },
  "name": "AllRoomsContainer_allRooms",
  "selections": [
    {
      "alias": "allRooms",
      "args": null,
      "concreteType": "RoomsConnection",
      "kind": "LinkedField",
      "name": "__connection_allRooms_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "RoomsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "RoomCard_room"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User"
};
// prettier-ignore
(node/*: any*/).hash = '74adb90fb4f0c0f5ede0a7e8a843d727';

module.exports = node;
