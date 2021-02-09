import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import KickUserFromRoom from '../../mutations/KickUserFromRoom'
import moment from 'moment'

const User = ({ roomId, userInRoomId, dateJoined, UserInfo, name }) => {

  const kickUserfromRoom = () => {
    KickUserFromRoom(userInRoomId, roomId)
  }
    return (
      <ListItem button key={UserInfo.id}>
        <ListItemIcon>
          <Avatar
            alt={name}
            src='https://material-ui.com/static/images/avatar/1.jpg'
          />
        </ListItemIcon>
        <ListItemText primary={UserInfo.name} />
        <ListItemText
          secondary={`Joined : ${moment(dateJoined).format('DD/MM/YY HH:MM')}`}
          align='right'
        >
          <Button
          variant='contained'
          color='secondary'
          onClick={kickUserfromRoom}
        >
          Remove
        </Button>
        </ListItemText>
        
      </ListItem>
    )
  
}
export default createFragmentContainer(User, {
  UserInfo: graphql`
    fragment User_UserInfo on User {
      id
      name
      email
    }
  `,
})
