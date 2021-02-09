// 1
import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'

// 2
const mutation = graphql`
  mutation UpdateNewUserOnInviteAcceptMutation(
    $input: UpdateNewUserOnInviteAcceptInput!
  ) {
    updateNewUserOnInviteAccept(input: $input) {
      user {
        id
        name
      }
    }
  }
`

// 3
export default (id, name, password, callback) => {
  // 4
  const variables = {
    input: {
      userId: id,
      newName: name,
      newPassword: password,
    },
  }

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6

    onCompleted: (resp, errors) => {
      if (errors) {
        callback(errors[0].message)
      }
    },
    onError: (err) => {
      callback(err.message)
    },
  })
}
