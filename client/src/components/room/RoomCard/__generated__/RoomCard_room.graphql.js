/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Invite_invitedUsers$ref = any;
type UsersInRoom_users$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type RoomCard_room$ref: FragmentReference;
declare export opaque type RoomCard_room$fragmentType: RoomCard_room$ref;
export type RoomCard_room = {|
  +id: any,
  +name: string,
  +public: boolean,
  +user: ?{|
    +id: any,
    +name: string,
  |},
  +createdAt: ?any,
  +$fragmentRefs: Invite_invitedUsers$ref & UsersInRoom_users$ref,
  +$refType: RoomCard_room$ref,
|};
export type RoomCard_room$data = RoomCard_room;
export type RoomCard_room$key = {
  +$data?: RoomCard_room$data,
  +$fragmentRefs: RoomCard_room$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoomCard_room",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "public",
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
        (v0/*: any*/),
        (v1/*: any*/)
      ],
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "Invite_invitedUsers"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UsersInRoom_users"
    }
  ],
  "type": "Room"
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e12662a30bfb0ea2b3fe6227b2f21219';

module.exports = node;
