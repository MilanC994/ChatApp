/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type GetInviteDataQueryVariables = {|
  id: any
|};
export type GetInviteDataQueryResponse = {|
  +currentProfile: ?{|
    +id: any,
    +name: string,
    +email: string,
  |},
  +invite: ?{|
    +id: any,
    +room: ?{|
      +id: any,
      +name: string,
    |},
    +user: ?{|
      +id: any,
      +name: string,
      +password: string,
      +email: string,
    |},
    +email: ?string,
    +createdAt: ?any,
    +expirationTime: ?any,
    +accepted: boolean,
  |},
|};
export type GetInviteDataQuery = {|
  variables: GetInviteDataQueryVariables,
  response: GetInviteDataQueryResponse,
|};
*/


/*
query GetInviteDataQuery(
  $id: UUID!
) {
  currentProfile {
    id
    name
    email
  }
  invite(id: $id) {
    id
    room {
      id
      name
    }
    user {
      id
      name
      password
      email
    }
    email
    createdAt
    expirationTime
    accepted
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = [
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
      (v3/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Invite",
    "kind": "LinkedField",
    "name": "invite",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Room",
        "kind": "LinkedField",
        "name": "room",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
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
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "password",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
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
        "name": "accepted",
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
    "name": "GetInviteDataQuery",
    "selections": (v4/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetInviteDataQuery",
    "selections": (v4/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "GetInviteDataQuery",
    "operationKind": "query",
    "text": "query GetInviteDataQuery(\n  $id: UUID!\n) {\n  currentProfile {\n    id\n    name\n    email\n  }\n  invite(id: $id) {\n    id\n    room {\n      id\n      name\n    }\n    user {\n      id\n      name\n      password\n      email\n    }\n    email\n    createdAt\n    expirationTime\n    accepted\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3a004106b57c944dfc2eab4fc90c3948';

module.exports = node;
