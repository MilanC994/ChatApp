import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../../../Environment'
import Navbar from '../../nav/Navbar/Navbar'
import UserProfile from '../UserProfile/UserProfile'

//OVO
//https://stackoverflow.com/questions/55797620/fragment-cannot-be-spread-here-as-objects-of-type-query

//https://stackoverflow.com/questions/45171855/relay-modern-node-does-not-contain-fragment-properties

//relay-compiler --src ./src/ --schema schema.json

const currentProfileQuery = graphql`
  query CurrentProfileQuery($withEmail: Boolean!) {
    currentProfile {
      id
      name
      email @include(if: $withEmail)
    }
  }
`

const CurrentProfile = props => {
  return (
    <QueryRenderer
      environment={environment}
      query={currentProfileQuery}
      variables={{ withEmail: true }}
      render={({ error, props }) => {
        if (error || !(props && props.currentProfile)) {
          return <div>{'Error'}</div>
        } else if (props.currentProfile) {
          return (
            <React.Fragment>
              <Navbar currentProfile={props.currentProfile} />
              <UserProfile
                key={props.currentProfile.id}
                currentProfile={props.currentProfile}
              />
            </React.Fragment>
          )
        }
        return <div>Loading</div>
      }}
    />
  )
  
}

export default CurrentProfile
