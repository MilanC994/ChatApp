import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '../../../Style/Box'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import GridList from '@material-ui/core/GridList'
import InvitedUser from './InvitedUser/InvitedUser'
import Button from '@material-ui/core/Button'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import CreateInviteByEmail from '../../mutations/CreateInviteByEmail'
import { emailValidation } from '../../../utils/credentialsValidation'
import InviteStyle from './InviteStyle'
import { Alert } from '@material-ui/lab'


const Invite = ({room, classes, invitedUsers}) => {

  const [state, setState] = useState({
    email: '',
    error: null
  })

  const { invites } = invitedUsers
  const handleCreateInviteByEmail = () => {
    const { email } = state
    if (emailValidation(email)) {
      CreateInviteByEmail(email, room.id, (er) => {
        console.log("LOGUJEM    ", er)
        setState({ ...state, error: er })
      })
    } else {
      setState({ ...state, error: 'Invalid email' })
    }
  }
  return (
    <React.Fragment>
      <Box className={classes.headerBox}>
        <TextField
          value={state.email}
          onChange={(e) =>
            setState({ ...state, email: e.target.value })
          }
          className={classes.search}
          id='standard-basic'
          label='Input User Email'
        />
        <Button
          onClick={() => handleCreateInviteByEmail()}
          variant='contained'
          color='primary'
          className={classes.searchBtn}
        >
          Send Invite
        </Button>{' '}
      </Box>
      {state.error && 
        <Alert severity="error">{state.error}</Alert>
      }
      <Divider />

      <span>Invited Users</span>
      <Box className={classes.listRoot}>
        <GridList cellHeight={20} className={classes.gridList} cols={2}>
          {invites &&
            invites.edges.map(({ node }) => (
              <InvitedUser
                key={node.id}
                invite={node}
              />
            ))}
        </GridList>
      </Box>
    </React.Fragment>
  )
  
}

export default createFragmentContainer(withStyles(InviteStyle)(Invite), {
  invitedUsers: graphql`
    fragment Invite_invitedUsers on Room {
      invites(condition: { accepted: false }, first: 100)
        @connection(key: "unaccepted_invites_invites", filters: []) {
        edges {
          node {
            id
            email
            createdAt
            expirationTime
            roomId
          }
        }
      }
    }
  `,
})
