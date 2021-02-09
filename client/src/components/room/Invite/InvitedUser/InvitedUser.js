import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import DeleteInvite from '../../../mutations/DeleteInvite'
import moment from 'moment'

const InvitedUser = ({ invite }) => {
  const {id, roomId, expirationTime, email } = invite
  const deleteInvite = (id, roomId) => {
    DeleteInvite(id, roomId)
  }
    return (
      <ListItem button key={id}>
        <ListItemIcon>
          <Avatar
            alt={email}
            src='https://material-ui.com/static/images/avatar/1.jpg'
          />
        </ListItemIcon>
        <ListItemText primary={email} />
        <ListItemText
          secondary={`Expires : ${moment(expirationTime).format('DD/MM/YY HH:MM')}`}
          align='right'
        >
            <Button
            variant='contained'
            color='secondary'
            onClick={() => deleteInvite(id, roomId)}
            >
                Delete Invite
            </Button>
        </ListItemText>
      </ListItem>
    )
  
}
export default InvitedUser
