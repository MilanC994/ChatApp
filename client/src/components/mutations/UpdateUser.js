// 1
import { commitMutation } from "react-relay"
import graphql from "babel-plugin-relay/macro"
import environment from "../../Environment"
import { ConnectionHandler } from "relay-runtime"

// 2
const mutation = graphql`
  mutation UpdateUserMutation($input: UpdateUserInfoInput!) {
    updateUserInfo(input: $input) {
      query {
        currentProfile {
          id
          name
          email
        }
      }
    }
  }
`
function sharedUpdater(store) {
  const payload = store.getRootField("updateUserInfo")
  if (payload) {
    const query = payload.getLinkedRecord("query")
    const currentProfile = query.getLinkedRecord("currentProfile")

    ConnectionHandler.update(store, currentProfile)
  }
}

// 3
export default ({
  _userId,
  currentPassword,
  name,
  email,
  password,
  callback,
}) => {
  // 4
  const variables = {
    input: {
      _userId,
      newName: name,
      newEmail: email,
      newPassword: password || null,
      currentPassword,
    },
  }

  // 5
  commitMutation(environment, {
    mutation,
    variables,
    updater: async proxyStore => {
      sharedUpdater(proxyStore)
    },

    onCompleted: (resp, errors) => {
      if (errors) {
        callback(errors[0].message)
      } else {
        callback(null, "User Successfully updated")
      }
    },
    onError: err => {
      console.error(err)
    },
  })
}
