/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type User_UserInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UsersInRoom_users$ref: FragmentReference;
declare export opaque type UsersInRoom_users$fragmentType: UsersInRoom_users$ref;
export type UsersInRoom_users = {|
  +usersInRooms: {|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: any,
        +user: ?{|
          +$fragmentRefs: User_UserInfo$ref
        |},
        +dateJoined: ?any,
      |}
    |}>
  |},
  +$refType: UsersInRoom_users$ref,
|};
export type UsersInRoom_users$data = UsersInRoom_users;
export type UsersInRoom_users$key = {
  +$data?: UsersInRoom_users$data,
  +$fragmentRefs: UsersInRoom_users$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "forward",
        "path": [
          "usersInRooms"
        ]
      }
    ]
  },
  "name": "UsersInRoom_users",
  "selections": [
    {
      "alias": "usersInRooms",
      "args": null,
      "concreteType": "UsersInRoomsConnection",
      "kind": "LinkedField",
      "name": "__roomUsers_usersInRooms_connection",
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
                  "concreteType": "User",
                  "kind": "LinkedField",
                  "name": "user",
                  "plural": false,
                  "selections": [
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "User_UserInfo"
                    }
                  ],
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "dateJoined",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
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
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Room"
};
// prettier-ignore
(node/*: any*/).hash = '8b04c08e1df7a9d4c9f43d25e2e79318';

module.exports = node;
