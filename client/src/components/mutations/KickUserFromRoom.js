//1
import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'
import { ConnectionHandler } from 'relay-runtime'

// 2
const mutation = graphql`
  mutation KickUserFromRoomMutation($input: DeleteUsersInRoomInput!) {
    deleteUsersInRoom(input: $input) {
      usersInRoomEdge {
        node {
          id
          user {
            id
            name
          }
          room {
            id
            name
          }
        }
      }
    }
  }
`

function sharedUpdater(store, userId, roomId) {
  const roomProxy = store.get(roomId)
  const conn = ConnectionHandler.getConnection(
    roomProxy,
    'roomUsers_usersInRooms' 
   )
  ConnectionHandler.deleteNode(conn, userId)
}

// 3
export default (id, roomId) => {
  // 4
  const variables = {
    input: {
      id,
    },
  }

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    optimisticUpdater: (proxyStore) => {
      sharedUpdater(proxyStore, id, roomId)
    },
    updater: (proxyStore) => {
      sharedUpdater(proxyStore, id, roomId)
    },
    onError: (err) => console.error(err),
  })
}
