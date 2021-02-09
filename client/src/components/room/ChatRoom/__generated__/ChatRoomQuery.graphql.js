/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Chat_messages$ref = any;
type UsersInChat_Users$ref = any;
export type ChatRoomQueryVariables = {|
  id: any
|};
export type ChatRoomQueryResponse = {|
  +currentProfile: ?{|
    +id: any,
    +name: string,
  |},
  +room: ?{|
    +id: any,
    +name: string,
    +usersInRooms: {|
      +$fragmentRefs: UsersInChat_Users$ref
    |},
    +$fragmentRefs: Chat_messages$ref,
  |},
|};
export type ChatRoomQuery = {|
  variables: ChatRoomQueryVariables,
  response: ChatRoomQueryResponse,
|};
*/


/*
query ChatRoomQuery(
  $id: UUID!
) {
  currentProfile {
    id
    name
  }
  room(id: $id) {
    id
    name
    usersInRooms {
      ...UsersInChat_Users
    }
    ...Chat_messages
  }
}

fragment Chat_messages on Room {
  messages(orderBy: SENT_AT_ASC, first: 20) {
    edges {
      node {
        id
        ...Message_UserMessage
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Message_UserMessage on Message {
  user {
    id
    name
  }
  userId
  content
  sentAt
}

fragment User_UserInfo on User {
  id
  name
  email
}

fragment UsersInChat_Users on UsersInRoomsConnection {
  nodes {
    id
    user {
      ...User_UserInfo
    }
    dateJoined
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "UUID!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "currentProfile",
  "plural": false,
  "selections": (v3/*: any*/),
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "SENT_AT_ASC"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChatRoomQuery",
    "selections": [
      (v4/*: any*/),
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Room",
        "kind": "LinkedField",
        "name": "room",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UsersInRoomsConnection",
            "kind": "LinkedField",
            "name": "usersInRooms",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "UsersInChat_Users"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Chat_messages"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChatRoomQuery",
    "selections": [
      (v4/*: any*/),
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Room",
        "kind": "LinkedField",
        "name": "room",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UsersInRoomsConnection",
            "kind": "LinkedField",
            "name": "usersInRooms",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UsersInRoom",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "email",
                        "storageKey": null
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
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "MessagesConnection",
            "kind": "LinkedField",
            "name": "messages",
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
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": (v3/*: any*/),
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
            "storageKey": "messages(first:20,orderBy:\"SENT_AT_ASC\")"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "all_messages_in_room_messages",
            "kind": "LinkedHandle",
            "name": "messages"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ChatRoomQuery",
    "operationKind": "query",
    "text": "query ChatRoomQuery(\n  $id: UUID!\n) {\n  currentProfile {\n    id\n    name\n  }\n  room(id: $id) {\n    id\n    name\n    usersInRooms {\n      ...UsersInChat_Users\n    }\n    ...Chat_messages\n  }\n}\n\nfragment Chat_messages on Room {\n  messages(orderBy: SENT_AT_ASC, first: 20) {\n    edges {\n      node {\n        id\n        ...Message_UserMessage\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Message_UserMessage on Message {\n  user {\n    id\n    name\n  }\n  userId\n  content\n  sentAt\n}\n\nfragment User_UserInfo on User {\n  id\n  name\n  email\n}\n\nfragment UsersInChat_Users on UsersInRoomsConnection {\n  nodes {\n    id\n    user {\n      ...User_UserInfo\n    }\n    dateJoined\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ef05ee182277fe8bbdf65c0a7d96c6b5';

module.exports = node;
