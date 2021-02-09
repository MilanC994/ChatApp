import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import EditRoomProperties from '../EditRoomProperties/EditRoomProperties'
import Invite from '../Invite/Invite'
import UsersInRoom from '../UsersInRooms/UsersInRoom'

const RoomMenuTabs = ({userId, room, roomName, userName, invitedUsers, users, handleToggleModal}) => {

  const [tabValue, setTabValue] = useState(0)
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue)
  }
  
  return (
    <div>
      <Tabs
        position='static'
        value={tabValue}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleTabChange}
        aria-label='disabled tabs example'
      >
        <Tab style={{ width: '33%' }} label='General' />
        <Tab style={{ width: '33%' }} label='Invite' />
        <Tab style={{ width: '34%' }} label='Users' />
      </Tabs>

      {tabValue === 0 && (
        <EditRoomProperties
          userId={userId}
          room={room}
          handleToggleModal={handleToggleModal}
        />
      )}
      {tabValue === 1 && (
        <Invite
          roomName={roomName}
          userName={userName}
          invitedUsers={invitedUsers}
          room={room}
        />
      )}
      {tabValue === 2 && (
        <UsersInRoom users={users} roomId={room.id} />
      )}
    </div>
  )
  
}

export default RoomMenuTabs
