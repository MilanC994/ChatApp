/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Invite_invitedUsers$ref = any;
type UsersInRoom_users$ref = any;
export type CreateRoomInput = {|
  clientMutationId?: ?string,
  room: RoomInput,
|};
export type RoomInput = {|
  id?: ?any,
  name: string,
  userId?: ?any,
  createdAt?: ?any,
  public?: ?boolean,
|};
export type CreateRoomMutationVariables = {|
  input: CreateRoomInput
|};
export type CreateRoomMutationResponse = {|
  +createRoom: ?{|
    +room: ?{|
      +id: any,
      +name: string,
      +public: boolean,
      +user: ?{|
        +id: any,
        +name: string,
        +email: string,
      |},
    |},
    +roomEdge: ?{|
      +node: ?{|
        +id: any,
        +name: string,
        +public: boolean,
        +createdAt: ?any,
        +user: ?{|
          +id: any,
          +name: string,
        |},
        +$fragmentRefs: Invite_invitedUsers$ref & UsersInRoom_users$ref,
      |}
    |},
  |}
|};
export type CreateRoomMutation = {|
  variables: CreateRoomMutationVariables,
  response: CreateRoomMutationResponse,
|};
*/


/*
mutation CreateRoomMutation(
  $input: CreateRoomInput!
) {
  createRoom(input: $input) {
    room {
      id
      name
      public
      user {
        id
        name
        email
      }
    }
    roomEdge {
      node {
        id
        name
        public
        createdAt
        user {
          id
          name
        }
        ...Invite_invitedUsers
        ...UsersInRoom_users
      }
    }
  }
}

fragment Invite_invitedUsers on Room {
  invites(condition: {accepted: false}, first: 100) {
    edges {
      node {
        id
        email
        createdAt
        expirationTime
        roomId
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

fragment User_UserInfo on User {
  id
  name
  email
}

fragment UsersInRoom_users on Room {
  usersInRooms(orderBy: DATE_JOINED_DESC, first: 100) {
    edges {
      node {
        id
        user {
          ...User_UserInfo
        }
        dateJoined
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateRoomInput!"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "public",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "user",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v5/*: any*/)
  ],
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "concreteType": "Room",
  "kind": "LinkedField",
  "name": "room",
  "plural": false,
  "selections": [
    (v2/*: any*/),
    (v3/*: any*/),
    (v4/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v9 = {
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
v10 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v11 = [
  {
    "kind": "Literal",
    "name": "condition",
    "value": {
      "accepted": false
    }
  },
  (v10/*: any*/)
],
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v14 = {
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
},
v15 = [
  (v10/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "DATE_JOINED_DESC"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateRoomMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateRoomPayload",
        "kind": "LinkedField",
        "name": "createRoom",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RoomsEdge",
            "kind": "LinkedField",
            "name": "roomEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Room",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
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
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateRoomMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateRoomPayload",
        "kind": "LinkedField",
        "name": "createRoom",
        "plural": false,
        "selections": [
          (v7/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "RoomsEdge",
            "kind": "LinkedField",
            "name": "roomEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Room",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v8/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": null,
                    "args": (v11/*: any*/),
                    "concreteType": "InvitesConnection",
                    "kind": "LinkedField",
                    "name": "invites",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "InvitesEdge",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Invite",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v5/*: any*/),
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "expirationTime",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "roomId",
                                "storageKey": null
                              },
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v13/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": "invites(condition:{\"accepted\":false},first:100)"
                  },
                  {
                    "alias": null,
                    "args": (v11/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "unaccepted_invites_invites",
                    "kind": "LinkedHandle",
                    "name": "invites"
                  },
                  {
                    "alias": null,
                    "args": (v15/*: any*/),
                    "concreteType": "UsersInRoomsConnection",
                    "kind": "LinkedField",
                    "name": "usersInRooms",
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
                              (v2/*: any*/),
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "dateJoined",
                                "storageKey": null
                              },
                              (v12/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v13/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v14/*: any*/)
                    ],
                    "storageKey": "usersInRooms(first:100,orderBy:\"DATE_JOINED_DESC\")"
                  },
                  {
                    "alias": null,
                    "args": (v15/*: any*/),
                    "filters": [],
                    "handle": "connection",
                    "key": "roomUsers_usersInRooms",
                    "kind": "LinkedHandle",
                    "name": "usersInRooms"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateRoomMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRoomMutation(\n  $input: CreateRoomInput!\n) {\n  createRoom(input: $input) {\n    room {\n      id\n      name\n      public\n      user {\n        id\n        name\n        email\n      }\n    }\n    roomEdge {\n      node {\n        id\n        name\n        public\n        createdAt\n        user {\n          id\n          name\n        }\n        ...Invite_invitedUsers\n        ...UsersInRoom_users\n      }\n    }\n  }\n}\n\nfragment Invite_invitedUsers on Room {\n  invites(condition: {accepted: false}, first: 100) {\n    edges {\n      node {\n        id\n        email\n        createdAt\n        expirationTime\n        roomId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment User_UserInfo on User {\n  id\n  name\n  email\n}\n\nfragment UsersInRoom_users on Room {\n  usersInRooms(orderBy: DATE_JOINED_DESC, first: 100) {\n    edges {\n      node {\n        id\n        user {\n          ...User_UserInfo\n        }\n        dateJoined\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4834af88f6f4019255f20af355cee2ea';

module.exports = node;
