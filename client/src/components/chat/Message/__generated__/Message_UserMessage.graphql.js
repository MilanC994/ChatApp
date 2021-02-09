/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Message_UserMessage$ref: FragmentReference;
declare export opaque type Message_UserMessage$fragmentType: Message_UserMessage$ref;
export type Message_UserMessage = {|
  +user: ?{|
    +id: any,
    +name: string,
  |},
  +userId: ?any,
  +content: string,
  +sentAt: ?any,
  +$refType: Message_UserMessage$ref,
|};
export type Message_UserMessage$data = Message_UserMessage;
export type Message_UserMessage$key = {
  +$data?: Message_UserMessage$data,
  +$fragmentRefs: Message_UserMessage$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Message_UserMessage",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sentAt",
      "storageKey": null
    }
  ],
  "type": "Message"
};
// prettier-ignore
(node/*: any*/).hash = '4dd5c35680733d28e369a1646203e35c';

module.exports = node;
