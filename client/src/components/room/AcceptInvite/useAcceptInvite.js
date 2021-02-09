

const useAcceptInvite = ({ currentProfile, invite }) => {
    useEffect(() => {
        if (invite.accepted) {
          setState({ ...state, inviteError: 'Invite Already Accepted' })
        } else if (
          moment(invite.expirationTime).format('YYYY-MM-DD HH:mm:ss') <
          moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        ) {
          setState({ ...state, inviteError: 'Invite expired' })
        } else {
          if (currentProfile) {
            if (currentProfile.id === invite.user.id) {
              AcceptInviteMutation(
                invite.id,
                invite.room.id,
                invite.user.id,
                async (error) => {
                  if (error) {
                    setState({ ...state, error })
                  } else {
                    setState({ ...state, redirect: 'dashboard' })
                  }
                }
              )
            } else {
              setState({ ...state, inviteError: 'No enough priviledges' })
            }
          } else if (!invite.newUser && !currentProfile) {
            setState({ ...state, inviteError: 'Log in and revisit link' })
          }
        }
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
    
   
}