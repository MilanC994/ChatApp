import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import AcceptInviteMutation from '../../mutations/AcceptInviteMutation'
import UpdateNewUserOnInviteAccept from '../../mutations/UpdateNewUserOnInviteAccept'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import AcceptInviteStyle from './AcceptInviteStyle'

const AcceptInvite = ({ invite, classes, currentProfile, error }) => {

  const [state, setState] = useState({
                                    name: '',
                                    newPassword: '',
                                    error: null,
                                    redirect: null,
                                    inviteError: null,
                                  })

  useEffect(() => {
    if (invite.accepted) {
      setState({ ...state, inviteError: 'Invite Already Accepted' })
    } else if (
      moment(invite.expirationTime).format('YYYY-MM-DD HH:mm:ss') <
      moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    ) {
      setState({ ...state, inviteError: 'Invite expired' })
    }
      // } else {
    //   if (currentProfile) {
    //     if (currentProfile.id === invite.user.id) {
    //       AcceptInviteMutation(
    //         invite.id,
    //         invite.room.id,
    //         invite.user.id,
    //         async (error) => {
    //           if (error) {
    //             setState({ ...state, error })
    //           } else {
    //             setState({ ...state, redirect: 'dashboard' })
    //           }
    //         }
    //       )
    //     } else {
    //       setState({ ...state, inviteError: 'No enough priviledges' })
    //     }
    //   } else if (!invite.user && !currentProfile) {
    //     setState({ ...state, inviteError: 'Log in and revisit link' })
    //   }
    // }
  }
  )
  
  const handleSubmit = async invite => {
    const { name, newPassword } = state
    const { id } = invite.user
    if (name && newPassword) {
      const roomId = invite.room.id
      const inviteId = invite.id
      UpdateNewUserOnInviteAccept(id, name, newPassword, async error => {
        if (error) {
          setState({ ...state, error })
        }
      })

      AcceptInviteMutation(inviteId, roomId, id, async (error) => {
        if (error) {
          setState({ ...state, error })
        } else {
          setState({ ...state, redirect: 'login' })
        }
      })
    } else {
      setState({ ...state, error: 'Invalid Input' })
    }
  }
  const handleChange = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    })
  }

  if (state.redirect) {
    return <Redirect to={`/${state.redirect}`} />
  } else if (state.inviteError) {
    return <Typography>{state.inviteError}</Typography>
  }
  return (
    <Container component='main' maxWidth='xs'>
      <Typography>
        {' '}
        You have been invited to join Chat Room: {invite.room.name}, to accept
        this invite, Please enter your user profile Data, and proceed..
      </Typography>
      <CssBaseline />
      <div className={classes.paper}>
        {error ? <div>{error}</div> : null}
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='Name'
            name='name'
            autoComplete='name'
            autoFocus
            value={state.name}
            onChange={(e) => handleChange(e)}
          />

          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='newPassword'
            label='Password'
            type='Password'
            id='newPassword'
            autoComplete='current-password'
            value={state.newPassword}
            onChange={(e) => handleChange(e)}
          />
          <div style={{ width: '100%', textAlign: 'center' }}>
            <Button
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submitBtn}
              onClick={() => handleSubmit(invite)}
            >
              Accept Invite
            </Button>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.submitBtn}
              //  onClick={() => handleSubmit()}
            >
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/dashboard'
              >
                <b>Reject Invite</b>
              </Link>
            </Button>
          </div>
        </form>
      </div>
      <div
        style={{
          backgroundColor: 'red',
          width: '100%',
          fontSize: '20px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        {state.error}
      </div>
    </Container>
  )
  
}
export default withStyles(AcceptInviteStyle)(AcceptInvite)
