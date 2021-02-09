//1
import {
    commitMutation,
  } from 'react-relay'
  import graphql from 'babel-plugin-relay/macro'
  import environment from '../../Environment'
  import {ConnectionHandler} from 'relay-runtime'
  
  // 2
  const mutation = graphql`
    mutation DeleteInviteMutation($input: DeleteInviteInput!) {
        deleteInvite(input:$input) {
    inviteEdge{
        node{
        id
        user{
            id
            name
            email
        }
        expirationTime
        }
    }
    }
    
    }
  `
  
  function sharedUpdater(store, inviteId,roomId) {
    // Get the current user record from the store
    const roomProxy = store.get(roomId)
   
    // Get the user's Todo List using ConnectionHandler helper
    const conn = ConnectionHandler.getConnection(
      roomProxy,
      'unaccepted_invites_invites', // This is the connection identifier, defined here
      // https://github.com/relayjs/relay-examples/blob/master/todo/js/components/TodoList.js#L76
    )

    // Insert the new todo into the Todo List connection
    ConnectionHandler.deleteNode(conn, inviteId)
  }
  
  
  
  // 3
  export default (id,roomId) => {
    // 4
    const variables = {
      input: {
        id
      }
    }
  
    // 5
    commitMutation(
      environment,
      {
        mutation,
        variables,
        // 6
      optimisticUpdater:proxyStore=>{
        sharedUpdater(proxyStore,id,roomId)
      },
      updater: proxyStore=>{
              sharedUpdater(proxyStore, id,roomId)
      },
        onError: err => console.error(err),
      },
    )
  }
