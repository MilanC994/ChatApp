/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type User_UserInfo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type UsersInChat_Users$ref: FragmentReference;
declare export opaque type UsersInChat_Users$fragmentType: UsersInChat_Users$ref;
export type UsersInChat_Users = {|
  +nodes: $ReadOnlyArray<?{|
    +id: any,
    +user: ?{|
      +$fragmentRefs: User_UserInfo$ref
    |},
    +dateJoined: ?any,
  |}>,
  +$refType: UsersInChat_Users$ref,
|};
export type UsersInChat_Users$data = UsersInChat_Users;
export type UsersInChat_Users$key = {
  +$data?: UsersInChat_Users$data,
  +$fragmentRefs: UsersInChat_Users$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UsersInChat_Users",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UsersInRoom",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "UsersInRoomsConnection"
};
// prettier-ignore
(node/*: any*/).hash = 'be37fda0f9c0b65f8bd2b8e93cf0af97';

module.exports = node;
