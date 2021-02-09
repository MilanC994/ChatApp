import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const handleEditClick = (roomId, handleRoomMenuClose, openModal) => {
  openModal(true)
  handleRoomMenuClose()
}
const handleDeleteClick = (toggleDeleteDialog, handleRoomMenuClose) => {
  toggleDeleteDialog()
  handleRoomMenuClose()
}

const RoomMenu = (
      anchorEl,
      menuId,
      handleRoomMenuClose,
      openModal,
      toggleDeleteDialog
    ) => (
          <Menu
            id={menuId}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleRoomMenuClose}
          >
            <MenuItem
              onClick={() => handleEditClick(menuId, handleRoomMenuClose, openModal)}
            >
              Edit
            </MenuItem>
            <MenuItem
              onClick={() => handleDeleteClick(toggleDeleteDialog, handleRoomMenuClose)}
            >
              Delete
            </MenuItem>
          </Menu>
      )

export default RoomMenu
