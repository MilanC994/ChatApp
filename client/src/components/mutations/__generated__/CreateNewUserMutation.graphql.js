/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateEncryptedUserInput = {|
  clientMutationId?: ?string,
  nameinp: string,
  emailinp: string,
  passwordinp: string,
|};
export type CreateNewUserMutationVariables = {|
  input: CreateEncryptedUserInput
|};
export type CreateNewUserMutationResponse = {|
  +createEncryptedUser: ?{|
    +jwtToken: ?any
  |}
|};
export type CreateNewUserMutation = {|
  variables: CreateNewUserMutationVariables,
  response: CreateNewUserMutationResponse,
|};
*/


/*
mutation CreateNewUserMutation(
  $input: CreateEncryptedUserInput!
) {
  createEncryptedUser(input: $input) {
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
    "type": "CreateEncryptedUserInput!"
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
    "concreteType": "CreateEncryptedUserPayload",
    "kind": "LinkedField",
    "name": "createEncryptedUser",
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
    "name": "CreateNewUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateNewUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "CreateNewUserMutation",
    "operationKind": "mutation",
    "text": "mutation CreateNewUserMutation(\n  $input: CreateEncryptedUserInput!\n) {\n  createEncryptedUser(input: $input) {\n    jwtToken\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '96da6aecd1feb6ba5c052850149505a6';

module.exports = node;
