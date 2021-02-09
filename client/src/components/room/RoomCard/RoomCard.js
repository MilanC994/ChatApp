import React from 'react'
import { useState } from 'react'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SunIcon from '../../../imgs/sun.jpg'
import RoomMenu from '../RoomMenu/RoomMenu'
import RoomModal from '../RoomModal/RoomModal'
import { Link } from 'react-router-dom'
import RoomMenuTabs from '../RoomMenuTabs/RoomMenuTabs'
import DeleteRoomDialog from '../DeleteRoomDialog/DeleteRoomDialog'
import RoomCardStyle from './RoomCardStyle'
import moment from 'moment'

const menuId = 'roomMenu'

function RoomCard(props) {
  const classes = RoomCardStyle()
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false)

  const handleToggleModal = () => {
    setOpen(!open)
  }

  const handleRoomMenuOpen = (event) => {
    if (props.userId == props.room.user.id) {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleRoomMenuClose = () => {
    setAnchorEl(null)
  }
  const toggleDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog)
  }
  return (
    <React.Fragment>
      <Card className={classes.root}>
        <Link
          style={{ textDecoration: 'none' }}
          to={'/dashboard/room/' + props.room.id}
        >
          <img src={SunIcon} className={classes.media} />
        </Link>

        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              {props.room.name[0]}
            </Avatar>
          }
          action={
            <Avatar aria-label='settings' className={classes.menuIcon}>
              <MoreVertIcon
                aria-controls={menuId}
                aria-haspopup='true'
                onClick={handleRoomMenuOpen}
              />
              {RoomMenu(
                anchorEl,
                props.room.id,
                handleRoomMenuClose,
                handleToggleModal,
                toggleDeleteDialog
              )}
            </Avatar>
          }
          title={props.room.name}
          subheader={"Created at: "+moment(props.room.createdAt).format('YYYY-MM-DD')}
        />
      </Card>
      <RoomModal
        open={open}
        roomName={props.room.name}
        render={() => {
          return (
            <RoomMenuTabs
              userId={props.room.user.id}
              userName={props.userName}
              roomName={props.room.name}
              room={props.room}
              users={props.room}
              invitedUsers={props.room}
              handleToggleModal={handleToggleModal}
            />
          )
        }}
        roomId={props.room.id}
        handleToggleModal={handleToggleModal}
      />
      <DeleteRoomDialog
        userId={props.room.user.id}
        roomId={props.room.id}
        openDeleteDialog={openDeleteDialog}
        toggleDeleteDialog={toggleDeleteDialog}
      />
    </React.Fragment>
  )
}
//createFragmentContainer(withStyles(InviteStyle)(Invite), {
export default createFragmentContainer(RoomCard, {
  room: graphql`
    fragment RoomCard_room on Room {
      id
      name
      public
      user {
        id
        name
      }
      createdAt
      ...Invite_invitedUsers
      ...UsersInRoom_users
    }
  `,
})
