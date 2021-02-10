import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { Alert } from '@material-ui/lab'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import environment from '../Environment'
import AllRoomsContainer from './room/AllRoomsContainer/AllRoomsContainer'
import Box from '../Style/Box'
import { Redirect, Link } from 'react-router-dom'
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
  const releaseToken = () => {
    localStorage.removeItem('token')
  } 

  return (
    <QueryRenderer
      environment={environment}
      query={rootQuery}
      render={({ error, props }) => {
        if (error || !(props && props.currentProfile)) {
          return( <Container>
            <Alert severity="error">{(error&&error.message)  || 'Unknown Error Happened'}</Alert>
            <Link to='/login'><Button variant="contained" color="primary" onClick={releaseToken}>Go Back</Button></Link>
          </Container>)
        } else if (props) {
          console.log("LOGUJEM PROSLO DALJE", props)
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
