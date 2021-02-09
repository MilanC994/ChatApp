import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

import environment from '../../Environment'

const mutation = graphql`
  mutation CreateNewUserMutation($input: CreateEncryptedUserInput!) {
    createEncryptedUser(input: $input) {
      jwtToken
    }
  }
`

export default (name, email, password, callback) => {
  
  const variables = {
    input: {
      emailinp: email,
      passwordinp: password,
      nameinp: name,
    },
  }

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      if (response.createEncryptedUser) {
        const token = response.createEncryptedUser.jwtToken
        callback(token, null)
      } else {
        callback(null, errors[0].message)
      }
    },
    onError: (err) => console.error(err),
  })
}
