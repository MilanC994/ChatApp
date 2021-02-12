//1
import {
    commitMutation,
  } from 'react-relay'
  import graphql from 'babel-plugin-relay/macro'
  import environment from '../../Environment'
  import {ConnectionHandler} from 'relay-runtime'
  
  let ID=0
  // 2
  const mutation = graphql`
    mutation CreateInviteByEmailMutation($input: CreateInviteByEmailInput!) {
      createInviteByEmail(input:$input) {
        inviteEdge{
            node{
              id
              email
              createdAt
              expirationTime
            }
          }
      }
    }
  `
  
  function sharedUpdater(store, roomId, newEdge) {
    // Get the current room record from the store
    const roomProxy = store.get(roomId)
   
    // Get the room invites List using ConnectionHandler helper
    const conn = ConnectionHandler.getConnection(
      roomProxy,
      'unaccepted_invites_invites', 
    )
    ConnectionHandler.insertEdgeBefore(conn, newEdge)
  }
  const errors = {
    'duplicate key value violates unique constraint "invite_user_id_room_id_key"': "Already Exists",
    'Can not add yourself': "Can not add yourself",
    'duplicate key value violates unique constraint "invite_room_id_email_key"': 'Invite already sent'
  }
  
  // 3
  export default (email, roomId, callback) => {
    // 4
    const variables = {
      input: {
        emailinp:email,
        roomid:roomId
      }
    }
  
    // 5
    commitMutation(
      environment,
      {
        mutation,
        variables,
        // 6
      optimisticUpdater: proxyStore => {
        const id=`newId${email}${roomId}${ID++}`
        const node = proxyStore.create(id,'Invite')
         
         node.setValue(roomId,'roomId')
         node.setValue(false,'accepted')
         node.setValue(id,'id')
         node.setValue(Date.now()+1,'expirationTime')
         
         const room = proxyStore.get(roomId)

         let user = proxyStore.get(email)
         if(!user){
            user = proxyStore.create('newUserid','User')
            user.setValue('newUserId','id')
            user.setValue(email,'name')
            user.setValue(email,'email')
            user.setValue('fakePass','password')

         }
         node.setValue(user.userId,'userId')
         node.setLinkedRecord(room,'room')
         node.setLinkedRecord(user,'user')
  

         const newEdge = proxyStore.create(
          'client:newEdge:' + roomId+ email + ID++,
          'InviteEdge',
        )
        const cursor = `${roomId}${email}${ID}`
        
        newEdge.setValue(cursor,'cursor')
  
        newEdge.setLinkedRecord(node, 'node')
        sharedUpdater(proxyStore,roomId,newEdge)
  
          
      },
      updater: proxyStore=>{
          /// Get the payload returned from the server
          const payload = proxyStore.getRootField('createInviteByEmail') 
          if(payload){
              // Get the edge of the newly created Todo record
              const newEdge = payload.getLinkedRecord('inviteEdge')
              // Add it to the user's todo list
              sharedUpdater(proxyStore, roomId, newEdge)
          }
          else{
            console.error('Already Exists')
          }
        
      },
      onCompleted: (response, error) => {
        if(error){
          callback(errors[error[0].message])
        }
      },
      onError: err => {callback(err.message)},
      },
    )
  }
