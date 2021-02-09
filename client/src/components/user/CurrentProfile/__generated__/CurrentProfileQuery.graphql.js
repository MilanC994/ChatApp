/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CurrentProfileQueryVariables = {|
  withEmail: boolean
|};
export type CurrentProfileQueryResponse = {|
  +currentProfile: ?{|
    +id: any,
    +name: string,
    +email?: string,
  |}
|};
export type CurrentProfileQuery = {|
  variables: CurrentProfileQueryVariables,
  response: CurrentProfileQueryResponse,
|};
*/


/*
query CurrentProfileQuery(
  $withEmail: Boolean!
) {
  currentProfile {
    id
    name
    email @include(if: $withEmail)
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "withEmail",
    "type": "Boolean!"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "currentProfile",
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
      },
      {
        "condition": "withEmail",
        "kind": "Condition",
        "passingValue": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          }
        ]
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
    "name": "CurrentProfileQuery",
    "selections": (v1/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CurrentProfileQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CurrentProfileQuery",
    "operationKind": "query",
    "text": "query CurrentProfileQuery(\n  $withEmail: Boolean!\n) {\n  currentProfile {\n    id\n    name\n    email @include(if: $withEmail)\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f2bf87c9946c406134d10dda5bbc55f';

module.exports = node;
