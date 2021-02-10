import { useState, useEffect, useCallback } from 'react'
import AcceptInviteMutation from '../../mutations/AcceptInviteMutation'
import moment from 'moment'

const useAnswerInvite = ({ invite, currentProfile }) => {
  const [state, setState] = useState({
                                    accepted:false,
                                    userExists:false,
                                    logedIn:true,
                                    error: null,
                                    inviteError: null
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
      
    if (currentProfile) {
      console.log("currentProfile ima")
      if( !invite.user || (currentProfile.id !== invite.user.id)){
          setState({ ...state, inviteError: 'This invite does not belong to you' })
      }
      else{
        console.log("u elsu")
        setState({...state, userExists: true, logedIn: true })
      }
        
    } else {
      if(!invite.user){
        setState({ ...state, userExists: false, logedIn: false })
      }
      else{
        setState({ ...state, userExists: true, logedIn: false })
      }

    }
  },[]
  )
  
  const handleSubmit = useCallback(async () => {
      AcceptInviteMutation(invite.id, async error => {
        if (error) {
          setState({ ...state, error })
        } else {
          setState({ ...state, accepted:true })
        }
      })
  },[invite])

  return { state, handleSubmit }
}

export default useAnswerInvite
