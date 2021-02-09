import React from 'react'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../Environment'
import AllRoomsContainer from './room/AllRoomsContainer/AllRoomsContainer'
import Box from '../Style/Box'
import { Redirect } from 'react-router-dom'
import Navbar from './nav/Navbar/Navbar'

const rootQuery = graphql`
  query DashboardQuery {
    currentProfile{
      id
      name 
      ...AllRoomsContainer_allRooms
      }
  }
`

function Dashboard() {

  if (!localStorage.getItem('token')) {
    return <Redirect to='/login' />
  }  

  return (
    <QueryRenderer
      environment={environment}
      query={rootQuery}
      render={({ error, props }) => {
        if (error || !(props && props.currentProfile)) {
          return <div>Error</div>
        } else if (props) {
          return (
            <React.Fragment>
              <Navbar  currentProfile={props.currentProfile} />

              <Box bgcolor='#fafafa' overflow='hidden'>
                <AllRoomsContainer
                  userId={props.currentProfile.id}
                  userName={props.currentProfile.name}
                  allRooms={props.currentProfile}
                />
              </Box>
            </React.Fragment>
          )
        }
        return <div>Loading</div>
      }}
    />
  )
}

export default Dashboard
