/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllRoomsContainer_allRooms$ref = any;
export type DashboardQueryVariables = {||};
export type DashboardQueryResponse = {|
  +currentProfile: ?{|
    +id: any,
    +name: string,
    +$fragmentRefs: AllRoomsContainer_allRooms$ref,
  |}
|};
export type DashboardQuery = {|
  variables: DashboardQueryVariables,
  response: DashboardQueryResponse,
|};
*/


/*
query DashboardQuery {
  currentProfile {
    id
    name
    ...AllRoomsContainer_allRooms
  }
}

fragment AllRoomsContainer_allRooms on User {
  allRooms(first: 5, _admin: true, _joined: true, _invite: true, _publicOnly: true, _searchTerm: "sanja") {
    edges {
      cursor
      node {
        ...RoomCard_room
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
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

fragment RoomCard_room on Room {
  id
  name
  public
  user {
    id
    name
  }
  createdAt
  ...Invite_invitedUsers
  ...UsersInRoom_users
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
},
v2 = [
  {
    "kind": "Literal",
    "name": "_admin",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "_invite",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "_joined",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "_publicOnly",
    "value": true
  },
  {
    "kind": "Literal",
    "name": "_searchTerm",
    "value": "sanja"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v5 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v6 = [
  {
    "kind": "Literal",
    "name": "condition",
    "value": {
      "accepted": false
    }
  },
  (v5/*: any*/)
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v10/*: any*/)
  ],
  "storageKey": null
},
v12 = [
  (v5/*: any*/),
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "DATE_JOINED_DESC"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "DashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentProfile",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AllRoomsContainer_allRooms"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "DashboardQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentProfile",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "RoomsConnection",
            "kind": "LinkedField",
            "name": "allRooms",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "RoomsEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Room",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
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
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
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
                                  (v0/*: any*/),
                                  (v7/*: any*/),
                                  (v4/*: any*/),
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
                                  (v8/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/)
                        ],
                        "storageKey": "invites(condition:{\"accepted\":false},first:100)"
                      },
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
                        "filters": [],
                        "handle": "connection",
                        "key": "unaccepted_invites_invites",
                        "kind": "LinkedHandle",
                        "name": "invites"
                      },
                      {
                        "alias": null,
                        "args": (v12/*: any*/),
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
                                  (v0/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "User",
                                    "kind": "LinkedField",
                                    "name": "user",
                                    "plural": false,
                                    "selections": [
                                      (v0/*: any*/),
                                      (v1/*: any*/),
                                      (v7/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "dateJoined",
                                    "storageKey": null
                                  },
                                  (v8/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/)
                        ],
                        "storageKey": "usersInRooms(first:100,orderBy:\"DATE_JOINED_DESC\")"
                      },
                      {
                        "alias": null,
                        "args": (v12/*: any*/),
                        "filters": [],
                        "handle": "connection",
                        "key": "roomUsers_usersInRooms",
                        "kind": "LinkedHandle",
                        "name": "usersInRooms"
                      },
                      (v8/*: any*/)
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
                  (v10/*: any*/),
                  (v9/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "allRooms(_admin:true,_invite:true,_joined:true,_publicOnly:true,_searchTerm:\"sanja\",first:5)"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "connection_allRooms",
            "kind": "LinkedHandle",
            "name": "allRooms"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DashboardQuery",
    "operationKind": "query",
    "text": "query DashboardQuery {\n  currentProfile {\n    id\n    name\n    ...AllRoomsContainer_allRooms\n  }\n}\n\nfragment AllRoomsContainer_allRooms on User {\n  allRooms(first: 5, _admin: true, _joined: true, _invite: true, _publicOnly: true, _searchTerm: \"sanja\") {\n    edges {\n      cursor\n      node {\n        ...RoomCard_room\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Invite_invitedUsers on Room {\n  invites(condition: {accepted: false}, first: 100) {\n    edges {\n      node {\n        id\n        email\n        createdAt\n        expirationTime\n        roomId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RoomCard_room on Room {\n  id\n  name\n  public\n  user {\n    id\n    name\n  }\n  createdAt\n  ...Invite_invitedUsers\n  ...UsersInRoom_users\n}\n\nfragment User_UserInfo on User {\n  id\n  name\n  email\n}\n\nfragment UsersInRoom_users on Room {\n  usersInRooms(orderBy: DATE_JOINED_DESC, first: 100) {\n    edges {\n      node {\n        id\n        user {\n          ...User_UserInfo\n        }\n        dateJoined\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd16506df6f3ba14dd46bc1928c91eda2';

module.exports = node;
