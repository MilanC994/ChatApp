/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Message_UserMessage$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Chat_messages$ref: FragmentReference;
declare export opaque type Chat_messages$fragmentType: Chat_messages$ref;
export type Chat_messages = {|
  +messages: {|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: any,
        +$fragmentRefs: Message_UserMessage$ref,
      |}
    |}>
  |},
  +$refType: Chat_messages$ref,
|};
export type Chat_messages$data = Chat_messages;
export type Chat_messages$key = {
  +$data?: Chat_messages$data,
  +$fragmentRefs: Chat_messages$ref,
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
          "messages"
        ]
      }
    ]
  },
  "name": "Chat_messages",
  "selections": [
    {
      "alias": "messages",
      "args": null,
      "concreteType": "MessagesConnection",
      "kind": "LinkedField",
      "name": "__all_messages_in_room_messages_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MessagesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Message",
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
                  "name": "__typename",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "Message_UserMessage"
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
(node/*: any*/).hash = 'ea06e99713b689fd64464b293861b388';

module.exports = node;
