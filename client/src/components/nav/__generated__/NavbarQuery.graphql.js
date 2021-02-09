/**
 * @flow
 * @relayHash 43a0edbda3124d92ab85ba3eff17e9a9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllRoomsContainer_allUserRooms$ref = any;
export type NavbarQueryVariables = {||};
export type NavbarQueryResponse = {|
  +currentProfile: ?{|
    +id: any,
    +name: string,
    +$fragmentRefs: AllRoomsContainer_allUserRooms$ref,
  |}
|};
export type NavbarQuery = {|
  variables: NavbarQueryVariables,
  response: NavbarQueryResponse,
|};
*/


/*
query NavbarQuery {
  currentProfile {
    id
    name
    ...AllRoomsContainer_allUserRooms
  }
}

fragment AllRoomsContainer_allUserRooms on User {
  usersInRooms(orderBy: DATE_JOINED_DESC, first: 1000) {
    edges {
      node {
        id
        room {
          ...RoomCard_room
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
  invites(condition: {accepted: false}) {
    edges {
      node {
        id
        room {
          ...RoomCard_room
        }
      }
    }
  }
}

fragment RoomCard_room on Room {
  id
  name
  public
  user {
    id
  }
  createdAt
  ...Invite_invitedUsers
  ...UsersInRoom_users
}

fragment Invite_invitedUsers on Room {
  invites(condition: {accepted: false}, first: 100) {
    edges {
      node {
        id
        user {
          ...User_UserInfo
        }
        createdAt
        expirationTime
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

fragment User_UserInfo on User {
  id
  name
  email
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": "DATE_JOINED_DESC"
},
v3 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1000
  },
  (v2/*: any*/)
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "createdAt",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "condition",
  "value": {
    "accepted": false
  }
},
v6 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v7 = [
  (v5/*: any*/),
  (v6/*: any*/)
],
v8 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "user",
  "storageKey": null,
  "args": null,
  "concreteType": "User",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    }
  ]
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v12 = [
  (v6/*: any*/),
  (v2/*: any*/)
],
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dateJoined",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "room",
  "storageKey": null,
  "args": null,
  "concreteType": "Room",
  "plural": false,
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "public",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "user",
      "storageKey": null,
      "args": null,
      "concreteType": "User",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ]
    },
    (v4/*: any*/),
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "invites",
      "storageKey": "invites(condition:{\"accepted\":false},first:100)",
      "args": (v7/*: any*/),
      "concreteType": "InvitesConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "InvitesEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "Invite",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v8/*: any*/),
                (v4/*: any*/),
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "expirationTime",
                  "args": null,
                  "storageKey": null
                },
                (v9/*: any*/)
              ]
            },
            (v10/*: any*/)
          ]
        },
        (v11/*: any*/)
      ]
    },
    {
      "kind": "LinkedHandle",
      "alias": null,
      "name": "invites",
      "args": (v7/*: any*/),
      "handle": "connection",
      "key": "unaccepted_invites_invites",
      "filters": ([]/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "usersInRooms",
      "storageKey": "usersInRooms(first:100,orderBy:\"DATE_JOINED_DESC\")",
      "args": (v12/*: any*/),
      "concreteType": "UsersInRoomsConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "UsersInRoomsEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
              "storageKey": null,
              "args": null,
              "concreteType": "UsersInRoom",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                (v8/*: any*/),
                (v13/*: any*/),
                (v9/*: any*/)
              ]
            },
            (v10/*: any*/)
          ]
        },
        (v11/*: any*/)
      ]
    },
    {
      "kind": "LinkedHandle",
      "alias": null,
      "name": "usersInRooms",
      "args": (v12/*: any*/),
      "handle": "connection",
      "key": "roomUsers_usersInRooms",
      "filters": ([]/*: any*/)
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "NavbarQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentProfile",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "AllRoomsContainer_allUserRooms",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NavbarQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentProfile",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "usersInRooms",
            "storageKey": "usersInRooms(first:1000,orderBy:\"DATE_JOINED_DESC\")",
            "args": (v3/*: any*/),
            "concreteType": "UsersInRoomsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "UsersInRoomsEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "UsersInRoom",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v14/*: any*/),
                      (v13/*: any*/),
                      (v9/*: any*/)
                    ]
                  },
                  (v10/*: any*/)
                ]
              },
              (v11/*: any*/)
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "usersInRooms",
            "args": (v3/*: any*/),
            "handle": "connection",
            "key": "connection_usersInRooms",
            "filters": []
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "invites",
            "storageKey": "invites(condition:{\"accepted\":false})",
            "args": [
              (v5/*: any*/)
            ],
            "concreteType": "InvitesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "InvitesEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Invite",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v14/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "NavbarQuery",
    "id": null,
    "text": "query NavbarQuery {\n  currentProfile {\n    id\n    name\n    ...AllRoomsContainer_allUserRooms\n  }\n}\n\nfragment AllRoomsContainer_allUserRooms on User {\n  usersInRooms(orderBy: DATE_JOINED_DESC, first: 1000) {\n    edges {\n      node {\n        id\n        room {\n          ...RoomCard_room\n        }\n        dateJoined\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  invites(condition: {accepted: false}) {\n    edges {\n      node {\n        id\n        room {\n          ...RoomCard_room\n        }\n      }\n    }\n  }\n}\n\nfragment RoomCard_room on Room {\n  id\n  name\n  public\n  user {\n    id\n  }\n  createdAt\n  ...Invite_invitedUsers\n  ...UsersInRoom_users\n}\n\nfragment Invite_invitedUsers on Room {\n  invites(condition: {accepted: false}, first: 100) {\n    edges {\n      node {\n        id\n        user {\n          ...User_UserInfo\n        }\n        createdAt\n        expirationTime\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment UsersInRoom_users on Room {\n  usersInRooms(orderBy: DATE_JOINED_DESC, first: 100) {\n    edges {\n      node {\n        id\n        user {\n          ...User_UserInfo\n        }\n        dateJoined\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment User_UserInfo on User {\n  id\n  name\n  email\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5a86d7c85c9538b7a354c7881c1faaff';
module.exports = node;
