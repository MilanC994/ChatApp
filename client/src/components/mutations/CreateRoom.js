// 1
import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'
import { ConnectionHandler } from 'relay-runtime'

// 2
const mutation = graphql`
mutation CreateRoomMutation($input: CreateRoomInput!) {
  createRoom(input: $input) {
    room {
      id
      name
      public
      user {
        id
        name
        email
      }
    
    }
  roomEdge{
    node{
      id
      name
      public
      createdAt
      user{
        id
        name
      }
      ...Invite_invitedUsers
    ...UsersInRoom_users
      
    }
  }
 }
}
`

function sharedUpdater(store, parentId, newEdge, connection) {
  // Get the current user record from the store
  const parentProxy = store.get(parentId)
  // Get the user's Todo List using ConnectionHandler helper
  const conn = ConnectionHandler.getConnection(
    parentProxy,
    connection 
  )

  ConnectionHandler.insertEdgeBefore(conn, newEdge)
}

// 3
export default (userId, name, publicRoom) => {
  // 4
  const variables = {
    input: {
      room: {
        userId,
        name,
        public: publicRoom,
      },
    },
  }

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    optimisticUpdater: () => {
      //Do Nothing
    },
    updater: async (proxyStore) => {
      /// Get the payload returned from the server
      const payload = proxyStore.getRootField('createRoom')

      // Get the edge of the newly created Todo record
      const newEdge = payload.getLinkedRecord('roomEdge')

      // Add it to the user's todo list
      await sharedUpdater(
        proxyStore,
        userId,
        newEdge,
        'connection_allRooms'
      )
    },
    onError: (err) => console.error(err),
  })
}
