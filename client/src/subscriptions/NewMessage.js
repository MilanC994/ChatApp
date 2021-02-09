import {
    requestSubscription
  } from 'react-relay'
  import graphql from 'babel-plugin-relay/macro'
  import environment from '../Environment'
  import { ConnectionHandler } from 'relay-runtime'
  
  const newMessageSubscription = graphql`
  subscription NewMessageSubscription($id:UUID){
	messagesUpdated(input:{room_id:$id}){
    message{
      id
      content
      sentAt
      userId
      user{
        id
        name
      }
    }
    event
  }
} `
  
  // 3
  export default (roomId, userId) => {
    const subscriptionConfig = {
      subscription: newMessageSubscription,
      variables: {
          id:roomId
      },
      updater: proxyStore => {
        const rootField = proxyStore.getRootField('messagesUpdated')
        const newMessage = rootField.getLinkedRecord('message')
        const newMessageId = newMessage.getValue('id')
        const messageUserId = newMessage.getValue('userId')
        if(messageUserId === userId) return
        const newEdge = proxyStore.create(
          `message:${newMessageId}` ,
          'messageEdge',
        )
        const cursor = `messages${newMessageId}`
        newEdge.setValue(cursor,'cursor')
        newEdge.setLinkedRecord(newMessage, 'node')

        const roomProxy = proxyStore.get(roomId)

        // Get the user's Todo List using ConnectionHandler helper
        const conn = ConnectionHandler.getConnection(
          roomProxy,
          'all_messages_in_room_messages' 
        )
        ConnectionHandler.insertEdgeAfter(conn, newEdge)
      },
      onError: error => console.log(`An error occured:`, error)
    }
  
    requestSubscription(
      environment,
      subscriptionConfig
    )
  
  }