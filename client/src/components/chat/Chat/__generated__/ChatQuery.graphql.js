/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Chat_messages$ref = any;
type UsersInChat_Users$ref = any;
export type MessagesOrderBy = "CONTENT_ASC" | "CONTENT_DESC" | "ID_ASC" | "ID_DESC" | "NATURAL" | "PRIMARY_KEY_ASC" | "PRIMARY_KEY_DESC" | "ROOM_ID_ASC" | "ROOM_ID_DESC" | "SENT_AT_ASC" | "SENT_AT_DESC" | "USER_ID_ASC" | "USER_ID_DESC" | "%future added value";
export type ChatQueryVariables = {|
  count: number,
  cursor: any,
  orderBy: MessagesOrderBy,
  id: any,
|};
export type ChatQueryResponse = {|
  +room: ?{|
    +id: any,
    +name: string,
    +usersInRooms: {|
      +$fragmentRefs: UsersInChat_Users$ref
    |},
    +$fragmentRefs: Chat_messages$ref,
  |}
|};
export type ChatQuery = {|
  variables: ChatQueryVariables,
  response: ChatQueryResponse,
|};
*/


/*
query ChatQuery(
  $count: Int!
  $cursor: Cursor!
  $id: UUID!
) {
  room(id: $id) {
    id
    name
    usersInRooms {
      ...UsersInChat_Users
    }
    ...Chat_messages_32czeo
  }
}

fragment Chat_messages_32czeo on Room {
  messages(orderBy: SENT_AT_ASC, last: $count, before: $cursor) {
    edges {
      cursor
      node {
        id
        ...Message_UserMessage
        __typename
      }
    }
    pageInfo {
      startCursor
      hasPreviousPage
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
    "name": "count",
    "type": "Int!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "Cursor!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "MessagesOrderBy!"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "UUID!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "before",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "last",
    "variableName": "count"
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
    "name": "ChatQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Room",
        "kind": "LinkedField",
        "name": "room",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              {
                "kind": "Variable",
                "name": "orderBy",
                "variableName": "orderBy"
              }
            ],
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
    "name": "ChatQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Room",
        "kind": "LinkedField",
        "name": "room",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "user",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
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
            "args": (v4/*: any*/),
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
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Message",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "user",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/)
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
                    "name": "startCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasPreviousPage",
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
            "args": (v4/*: any*/),
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
    "name": "ChatQuery",
    "operationKind": "query",
    "text": "query ChatQuery(\n  $count: Int!\n  $cursor: Cursor!\n  $id: UUID!\n) {\n  room(id: $id) {\n    id\n    name\n    usersInRooms {\n      ...UsersInChat_Users\n    }\n    ...Chat_messages_32czeo\n  }\n}\n\nfragment Chat_messages_32czeo on Room {\n  messages(orderBy: SENT_AT_ASC, last: $count, before: $cursor) {\n    edges {\n      cursor\n      node {\n        id\n        ...Message_UserMessage\n        __typename\n      }\n    }\n    pageInfo {\n      startCursor\n      hasPreviousPage\n    }\n  }\n}\n\nfragment Message_UserMessage on Message {\n  user {\n    id\n    name\n  }\n  userId\n  content\n  sentAt\n}\n\nfragment User_UserInfo on User {\n  id\n  name\n  email\n}\n\nfragment UsersInChat_Users on UsersInRoomsConnection {\n  nodes {\n    id\n    user {\n      ...User_UserInfo\n    }\n    dateJoined\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2bc5fa26e698ab2fdfc6412e824c75e9';

module.exports = node;
