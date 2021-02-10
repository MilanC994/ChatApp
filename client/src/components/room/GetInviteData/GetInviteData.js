import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../../Environment'
import AnswerInvite from '../AnswerInvite/AnswerInvite'
import Navbar from '../../nav/Navbar/Navbar'

const getInviteDataQuery = graphql`
  query GetInviteDataQuery($id: UUID!) {
    currentProfile {
      id
      name
      email
    }
    invite(id: $id) {
      id
      room {
        id
        name
      }
      user {
        id
        name
        password
        email
      }
      email
      createdAt
      expirationTime
      accepted
    }
  }
`

const GetInviteData = (props) => {
  return (
    <QueryRenderer
      environment={environment}
      query={getInviteDataQuery}
      variables={{ id: props.match.params.id }}
      render={({ error, props }) => {
        if (error || !(props && props.invite)) {
          return <div>{'Error'}</div>
        } else if (props.invite) {
          return (
            <React.Fragment>
              <Navbar currentProfile={props.currentProfile} />
              <AnswerInvite
                invite={props.invite}
                currentProfile={props.currentProfile}
              />
            </React.Fragment>
          )
        }
      }}
    />
    )
  
}
export default GetInviteData
