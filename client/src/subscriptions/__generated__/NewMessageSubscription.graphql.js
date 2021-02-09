/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewMessageSubscriptionVariables = {|
  id?: ?any
|};
export type NewMessageSubscriptionResponse = {|
  +messagesUpdated: ?{|
    +message: {|
      +id: any,
      +content: string,
      +sentAt: ?any,
      +userId: ?any,
      +user: ?{|
        +id: any,
        +name: string,
      |},
    |},
    +event: ?string,
  |}
|};
export type NewMessageSubscription = {|
  variables: NewMessageSubscriptionVariables,
  response: NewMessageSubscriptionResponse,
|};
*/


/*
subscription NewMessageSubscription(
  $id: UUID
) {
  messagesUpdated(input: {room_id: $id}) {
    message {
      id
      content
      sentAt
      userId
      user {
        id
        name
      }
    }
    event
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "UUID"
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
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "room_id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "MessageSubscriptionPayload",
    "kind": "LinkedField",
    "name": "messagesUpdated",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Message",
        "kind": "LinkedField",
        "name": "message",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              (v1/*: any*/),
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "event",
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
    "name": "NewMessageSubscription",
    "selections": (v2/*: any*/),
    "type": "Subscription"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewMessageSubscription",
    "selections": (v2/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "NewMessageSubscription",
    "operationKind": "subscription",
    "text": "subscription NewMessageSubscription(\n  $id: UUID\n) {\n  messagesUpdated(input: {room_id: $id}) {\n    message {\n      id\n      content\n      sentAt\n      userId\n      user {\n        id\n        name\n      }\n    }\n    event\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1208b6d1a8686f972e49dc08cd99a6ba';

module.exports = node;
