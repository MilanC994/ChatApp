/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_UserInfo$ref: FragmentReference;
declare export opaque type User_UserInfo$fragmentType: User_UserInfo$ref;
export type User_UserInfo = {|
  +id: any,
  +name: string,
  +email: string,
  +$refType: User_UserInfo$ref,
|};
export type User_UserInfo$data = User_UserInfo;
export type User_UserInfo$key = {
  +$data?: User_UserInfo$data,
  +$fragmentRefs: User_UserInfo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "User_UserInfo",
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
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User"
};
// prettier-ignore
(node/*: any*/).hash = '66d29cc683edb7b4ae72433d9d4f9db0';

module.exports = node;
