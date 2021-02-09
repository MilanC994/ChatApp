import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'

// 2
const mutation = graphql`
  mutation AcceptInviteMutation($input: UpdateInviteInput!, $roomId: UUID!) {
    updateInvite(input: $input) {
      query {
        room(id: $roomId) {
          id
          name
          createdAt
          public
          user {
            id
            name
            email
          }
          usersInRooms {
            edges {
              node {
                id
                user {
                  id
                  name
                  email
                }
                room {
                  id
                  name
                  createdAt
                }
              }
            }
          }
        }
      }
    }
  }
`

// 3
export default (id, roomId, userId, callback) => {
  // 4
  const variables = {
    input: {
      id,
      patch: {
        accepted: true,
      },
    },
    roomId,
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
    },

    onError: (err) => console.error(err),
  })
}
