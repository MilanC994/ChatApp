import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteRoomMutation from '../../mutations/DeleteRoom';

const DeleteRoomDialog = ({ toggleDeleteDialog, openDeleteDialog, userId, roomId }) => {
  

  const handleDeleteRoom = () => {
    DeleteRoomMutation(userId, roomId);
    toggleDeleteDialog();
  };

  return (
    <Dialog
      open={openDeleteDialog}
      onClose={toggleDeleteDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Confirm Delete'}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this room ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleDeleteDialog} color="primary">
          No
        </Button>
        <Button onClick={handleDeleteRoom} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteRoomDialog;
