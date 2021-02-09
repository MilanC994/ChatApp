// 1
import {
    commitMutation,
} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../Environment'

// 2
const mutation = graphql`
mutation DeleteUserMutation($input:DeleteUserInput!){
	deleteUser(input:$input){
    user{
      id
      name
    }
   
  }
}
  `

// 3
export default (id, callback) => {
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


            onCompleted: (resp, errors) => {
                if (errors) {
                    console.log(errors[0].message)
                    callback(errors[0].message)
                }
            },
            onError: err => {
                console.error(err)
            }
        },


    )
}