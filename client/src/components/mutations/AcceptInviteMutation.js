import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'

// 2
const mutation = graphql`
mutation AcceptInviteMutation($input: AcceptInviteInput!) {
  acceptInvite(input: $input) {
  clientMutationId
  }
  
}
`

// 3
export default (inviteId, callback) => {
  // 4
  const variables = {
    input: {
      _inviteId: inviteId
    }
  }

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6

    onCompleted: (response, errors) => {
      if (errors) {
        callback(errors[0].message)
      }
      else{
        callback(null)
      }
    },

    onError: (err) => console.error(err),
  })
}
