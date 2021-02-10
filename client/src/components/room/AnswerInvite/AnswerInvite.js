import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import AcceptInviteMutation from '../../mutations/AcceptInviteMutation'
import moment from 'moment'
import AnswerInviteStyle from './AnswerInviteStyle'
import Register from '../../auth/Register/Register'
import SignIn from '../../auth/SignIn/SignIn'
import { Alert } from '@material-ui/lab'
import { Redirect } from 'react-router-dom'
import useAnswerInvite from './useAnswerInvite'

const AnswerInvite = ({ invite, currentProfile }) => {

  const { state, handleSubmit } = useAnswerInvite({ invite, currentProfile })

  // const [state, setState] = useState({
  //                                   accepted:false,
  //                                   userExists:false,
  //                                   logedIn:true,
  //                                   error: null,
  //                                   inviteError: null
  //                                 })

  // useEffect(() => {
  //   if (invite.accepted) {
  //     setState({ ...state, inviteError: 'Invite Already Accepted' })
  //   } else if (
  //     moment(invite.expirationTime).format('YYYY-MM-DD HH:mm:ss') <
  //     moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  //   ) {
  //     setState({ ...state, inviteError: 'Invite expired' })
  //   }
      
  //   if (currentProfile) {
  //     console.log("currentProfile ima")
  //     if( !invite.user || (currentProfile.id !== invite.user.id)){
  //         setState({ ...state, inviteError: 'This invite does not belong to you' })
  //     }
  //     else{
  //       console.log("u elsu")
  //       setState({...state, userExists: true, logedIn: true })
  //     }
        
  //   } else {
  //     if(!invite.user){
  //       setState({ ...state, userExists: false, logedIn: false })
  //     }
  //     else{
  //       setState({ ...state, userExists: true, logedIn: false })
  //     }

  //   }
  // },[]
  // )
  
  // const handleSubmit = async () => {
  //     AcceptInviteMutation(invite.id, invite.room.id, currentProfile.id, async error => {
  //       if (error) {
  //         setState({ ...state, error })
  //       } else {
  //         setState({ ...state, accepted:true })
  //       }
  //     })
  // }

  const { accepted, userExists, logedIn, error, inviteError } = state
  if (accepted) {
    return <Redirect to={'/dashboard'} />
  }
   if (state.inviteError) {
    return <Typography>{inviteError}</Typography>
  }
  return (
    <Container component='main' maxWidth='xs'>
      <Typography>
        You have been invited to join Chat Room: {invite.room.name}, to accept
        this invite, Please enter your user profile Data, and proceed..
      </Typography>
      <CssBaseline />
      {userExists && logedIn &&
        <Container>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Accept</Button>
          <Button variant="contained" color="secondary">Reject</Button>
        </Container>
      }
      {userExists && !logedIn &&
        <SignIn inviteId={invite.id} inviteEmail={invite.email} />
      }
      {!userExists && !logedIn &&
        <Register inviteId={invite.id} inviteEmail={invite.email}/>
      }
        {error && <Alert severity="error">{error}</Alert>}
    </Container>
  )
  
}
export default withStyles(AnswerInviteStyle)(AnswerInvite)
