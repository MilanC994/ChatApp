// 1
import {
    commitMutation,
  } from 'react-relay'
  import graphql from 'babel-plugin-relay/macro'
  import environment from '../../Environment'
  import {ConnectionHandler} from 'relay-runtime'
  import {v1 as uuid} from 'uuid'
  
  // 2
  const mutation = graphql`
  mutation UpdateRoomMutation($input:UpdateRoomInput!){
    updateRoom(input:$input){
      roomEdge{
        cursor
        node{
          id
          name
          public
          
        }
      }
    }
  }
  `


  function sharedUpdater(store) {
    const payload = store.getRootField('updateRoom')
    const roomEdge = payload.getLinkedRecord('roomEdge')
    ConnectionHandler.update(store,roomEdge)
  }

  const createOptimisticResponse = room => {
    const updatedRoom = {
        node:{
           id:room.id,
           name:room.patch.name,
           public:room.patch.public
        },
        cursor:uuid()
    }


    return {
        updateRoom: {
          roomEdge:{
            ...updatedRoom
          }
      }
    }
  }
 
  
  
  // 3
  export default (id,name,isPublic) => {
    // 4
    const variables = {
      
        input: {
          id 
        ,
          patch:{
            name ,
            public:isPublic 
          }
        }
    }
  
    // 5
    commitMutation(
      environment,
      {
        mutation,
        variables,
        // 6
        optimisticResponse:createOptimisticResponse(variables.input),
      optimisticUpdater:proxyStore=>{
        sharedUpdater(proxyStore)  
      },
      updater: async proxyStore=>{
        sharedUpdater(proxyStore)
      },
      onError: err => console.error(err)
      },
      
      
    )
  }