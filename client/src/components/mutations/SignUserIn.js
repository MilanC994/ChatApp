import {
  commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'

  import environment from '../../Environment'
  
  const mutation = graphql`
  mutation SignUserInMutation($input:AuthenticateInput!){
    authenticate(input:$input) {
      jwtToken
    }
    
    }
  `
  
  export default (email, password, inviteId, callback) => {
    const variables = {
      input:{
      email,
      password,
      _inviteId: inviteId || null
      }
    }
    commitMutation(
      environment,
      {
        mutation,
        variables,
        onCompleted: (response) => {
            if(response.authenticate)
            {
              const token = response.authenticate.jwtToken
              callback(token,null)
            }
           else{
             const error='Incorrect Cridentials'
             callback(null,error)
           }
        },
        onError: err => console.error(err),
      },
    )
  }