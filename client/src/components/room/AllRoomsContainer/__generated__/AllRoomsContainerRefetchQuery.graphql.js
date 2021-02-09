/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AllRoomsContainer_allRooms$ref = any;
export type AllRoomsContainerRefetchQueryVariables = {|
  admin?: ?boolean,
  joined?: ?boolean,
  invite?: ?boolean,
  public?: ?boolean,
  publicOnly?: ?boolean,
  searchTerm?: ?string,
  cursor?: ?any,
|};
export type AllRoomsContainerRefetchQueryResponse = {|
  +currentProfile: ?{|
    +id: any,
    +name: string,
    +$fragmentRefs: AllRoomsContainer_allRooms$ref,
  |}
|};
export type AllRoomsContainerRefetchQuery = {|
  variables: AllRoomsContainerRefetchQueryVariables,
  response: AllRoomsContainerRefetchQueryResponse,
|};
*/


/*
query AllRoomsContainerRefetchQuery(
  $admin: Boolean
  $joined: Boolean
  $invite: Boolean
  $public: Boolean
  $publicOnly: Boolean
  $searchTerm: String
  $cursor: Cursor
) {
  currentProfile {
    id
    name
    ...AllRoomsContainer_allRooms_qOH2C
  }
}

fragment AllRoomsContainer_allRooms_qOH2C on User {
  allRooms(first: 5, after: $cursor, _admin: $admin, _joined: $joined, _invite: $invite, _publicOnly: $publicOnly, _public: $public, _searchTerm: $searchTerm) {
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "admin",
    "type": "Boolean"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "joined",
    "type": "Boolean"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "invite",
    "type": "Boolean"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "public",
    "type": "Boolean"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "publicOnly",
    "type": "Boolean"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchTerm",
    "type": "String"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "Cursor"
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
  {
    "kind": "Variable",
    "name": "_admin",
    "variableName": "admin"
  },
  {
    "kind": "Variable",
    "name": "_invite",
    "variableName": "invite"
  },
  {
    "kind": "Variable",
    "name": "_joined",
    "variableName": "joined"
  },
  {
    "kind": "Variable",
    "name": "_public",
    "variableName": "public"
  },
  {
    "kind": "Variable",
    "name": "_publicOnly",
    "variableName": "publicOnly"
  },
  {
    "kind": "Variable",
    "name": "_searchTerm",
    "variableName": "searchTerm"
  },
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Literal",
    "name": "first",
    "value": 5
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v6 = {
  "kind": "Literal",
  "name": "first",
  "value": 100
},
v7 = [
  {
    "kind": "Literal",
    "name": "condition",
    "value": {
      "accepted": false
    }
  },
  (v6/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    (v11/*: any*/)
  ],
  "storageKey": null
},
v13 = [
  (v6/*: any*/),
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
    "name": "AllRoomsContainerRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentProfile",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "args": [
              {
                "kind": "Variable",
                "name": "admin",
                "variableName": "admin"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              {
                "kind": "Variable",
                "name": "invite",
                "variableName": "invite"
              },
              {
                "kind": "Variable",
                "name": "joined",
                "variableName": "joined"
              },
              {
                "kind": "Variable",
                "name": "public",
                "variableName": "public"
              },
              {
                "kind": "Variable",
                "name": "publicOnly",
                "variableName": "publicOnly"
              },
              {
                "kind": "Variable",
                "name": "searchTerm",
                "variableName": "searchTerm"
              }
            ],
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AllRoomsContainerRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "currentProfile",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v3/*: any*/),
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
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Room",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/),
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
                          (v1/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      {
                        "alias": null,
                        "args": (v7/*: any*/),
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
                                  (v1/*: any*/),
                                  (v8/*: any*/),
                                  (v5/*: any*/),
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
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/)
                        ],
                        "storageKey": "invites(condition:{\"accepted\":false},first:100)"
                      },
                      {
                        "alias": null,
                        "args": (v7/*: any*/),
                        "filters": [],
                        "handle": "connection",
                        "key": "unaccepted_invites_invites",
                        "kind": "LinkedHandle",
                        "name": "invites"
                      },
                      {
                        "alias": null,
                        "args": (v13/*: any*/),
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
                                      (v8/*: any*/)
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
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/)
                        ],
                        "storageKey": "usersInRooms(first:100,orderBy:\"DATE_JOINED_DESC\")"
                      },
                      {
                        "alias": null,
                        "args": (v13/*: any*/),
                        "filters": [],
                        "handle": "connection",
                        "key": "roomUsers_usersInRooms",
                        "kind": "LinkedHandle",
                        "name": "usersInRooms"
                      },
                      (v9/*: any*/)
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
                  (v11/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v3/*: any*/),
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
    "name": "AllRoomsContainerRefetchQuery",
    "operationKind": "query",
    "text": "query AllRoomsContainerRefetchQuery(\n  $admin: Boolean\n  $joined: Boolean\n  $invite: Boolean\n  $public: Boolean\n  $publicOnly: Boolean\n  $searchTerm: String\n  $cursor: Cursor\n) {\n  currentProfile {\n    id\n    name\n    ...AllRoomsContainer_allRooms_qOH2C\n  }\n}\n\nfragment AllRoomsContainer_allRooms_qOH2C on User {\n  allRooms(first: 5, after: $cursor, _admin: $admin, _joined: $joined, _invite: $invite, _publicOnly: $publicOnly, _public: $public, _searchTerm: $searchTerm) {\n    edges {\n      cursor\n      node {\n        ...RoomCard_room\n        __typename\n      }\n    }\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n  }\n}\n\nfragment Invite_invitedUsers on Room {\n  invites(condition: {accepted: false}, first: 100) {\n    edges {\n      node {\n        id\n        email\n        createdAt\n        expirationTime\n        roomId\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment RoomCard_room on Room {\n  id\n  name\n  public\n  user {\n    id\n    name\n  }\n  createdAt\n  ...Invite_invitedUsers\n  ...UsersInRoom_users\n}\n\nfragment User_UserInfo on User {\n  id\n  name\n  email\n}\n\nfragment UsersInRoom_users on Room {\n  usersInRooms(orderBy: DATE_JOINED_DESC, first: 100) {\n    edges {\n      node {\n        id\n        user {\n          ...User_UserInfo\n        }\n        dateJoined\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6eacfe27ca22efe0e4b3fc8a32817e56';

module.exports = node;
