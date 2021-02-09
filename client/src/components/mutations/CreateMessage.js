// 1
import { commitMutation } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'
import { ConnectionHandler } from 'relay-runtime'

let ID = 0
// 2
const mutation = graphql`
  mutation CreateMessageMutation($input: CreateMessageInput!) {
    createMessage(input: $input) {
      messageEdge {
        cursor
        node {
          id
          content
          sentAt
          userId
          user {
            id
            name
          }
        }
      }
    }
  }
`

function sharedUpdater(store, roomId, newEdge) {
  // Get the current user record from the store
  const roomProxy = store.get(roomId)

  // Get the user's Todo List using ConnectionHandler helper
  const conn = ConnectionHandler.getConnection(
    roomProxy,
    'all_messages_in_room_messages' // This is the connection identifier, defined here
    // https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L76
  )
  ConnectionHandler.insertEdgeAfter(conn, newEdge)
}

// 3
export default (userId, roomId, content, callback) => {
  // 4
  const variables = {
    input: {
      message: {
        userId,
        roomId,
        content,
      },
    },
  }

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    // 6
    optimisticUpdater: (proxyStore) => {
      const id = `newId${userId}${roomId}`
      const node = proxyStore.create(id, 'Message')
      node.setValue(userId, 'userId')
      node.setValue(roomId, 'roomId')
      node.setValue(content, 'content')

      const room = proxyStore.get(roomId)
      const user = proxyStore.get(userId)
      node.setLinkedRecord(room, 'room')
      node.setLinkedRecord(user, 'user')

      const newEdge = proxyStore.create(
        'client:newEdge:' + roomId + userId + ID++,
        'MessagesEdge'
      )
      const cursor = `${roomId}${userId}${ID}`
      newEdge.setValue(cursor, 'cursor')

      newEdge.setLinkedRecord(node, 'node')
      sharedUpdater(proxyStore, roomId, newEdge)
    },
    updater: (proxyStore) => {
      /// Get the payload returned from the server
      const payload = proxyStore.getRootField('createMessage')
      if (payload) {
        // Get the edge of the newly created Todo record
        const newEdge = payload.getLinkedRecord('messageEdge')
      
        // Add it to the user's todo list
        sharedUpdater(proxyStore, roomId, newEdge)
      }
    },
    onCompleted: (response, error) => {
      if (error) {
        callback(error[0].message)
      }
    },
    onError: (err) => console.error(err),
  })
}
