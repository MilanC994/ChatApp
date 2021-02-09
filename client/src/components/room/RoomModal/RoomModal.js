import React from 'react'
import Modal from '@material-ui/core/Modal'
import Box from '../../../Style/Box'

const modalStyle = {
  margin: 'auto',
  marginTop: '10%',
  borderRadius: '10px',
  padding: '10px',
}

const RoomModal = ({roomName, open, handleToggleModal, render}) => {
  const text = roomName || 'Create New Room'
  return (
    <Modal
      open={open}
      onClose={() => handleToggleModal()}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <Box
        style={modalStyle}
        bgcolor='#e0e0e0'
        width='600px'
        height='fit-content'
      >
        <Box>{text}</Box>
        {render()}
      </Box>
    </Modal>
  )
}

export default RoomModal
