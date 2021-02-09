//1
import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'
import { ConnectionHandler } from 'relay-runtime'

// 2
const mutation = graphql`
  mutation DeleteRoomMutation($input: DeleteRoomInput!) {
    deleteRoom(input: $input) {
      roomEdge {
        node {
          id
          name
        }
      }
    }
  }
`

function sharedUpdater(store, userId, roomId) {
  const userProxy = store.get(userId)
  const conn = ConnectionHandler.getConnection(
    userProxy,
    'connection_allRooms' 
  )
  ConnectionHandler.deleteNode(conn, roomId)
}

// 3
export default (userId, roomId) => {
  // 4
  const variables = {
    input: {
      id: roomId,
    },
  }

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    optimisticUpdater: (proxyStore) => {
      sharedUpdater(proxyStore, userId, roomId)
    },
    updater: (proxyStore) => {
      sharedUpdater(proxyStore, userId, roomId)
    },
    onError: (err) => console.error(err),
  })
}
