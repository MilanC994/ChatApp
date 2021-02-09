/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthenticateInput = {|
  clientMutationId?: ?string,
  email: string,
  password: string,
|};
export type SignUserInMutationVariables = {|
  input: AuthenticateInput
|};
export type SignUserInMutationResponse = {|
  +authenticate: ?{|
    +jwtToken: ?any
  |}
|};
export type SignUserInMutation = {|
  variables: SignUserInMutationVariables,
  response: SignUserInMutationResponse,
|};
*/


/*
mutation SignUserInMutation(
  $input: AuthenticateInput!
) {
  authenticate(input: $input) {
    jwtToken
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "AuthenticateInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthenticatePayload",
    "kind": "LinkedField",
    "name": "authenticate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "jwtToken",
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
    "name": "SignUserInMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SignUserInMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SignUserInMutation",
    "operationKind": "mutation",
    "text": "mutation SignUserInMutation(\n  $input: AuthenticateInput!\n) {\n  authenticate(input: $input) {\n    jwtToken\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '774ff39ff945977c7c58a75285522842';

module.exports = node;
