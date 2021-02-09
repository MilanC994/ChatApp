import React,{ useState } from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import SignUserIn from '../../mutations/SignUserIn'
import TextField from '@material-ui/core/TextField'
import DeleteUserMutation from '../../mutations/DeleteUser'

const DeleteUserDialog = ({ email, id, toggleDeleteUserDialog, openDeleteUserDialog }) => {

  const [state, setState] = useState({
    password: '',
    error: null,
  })

  const handlePassChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleDeleteUser = () => {
    SignUserIn(email, state.password, async (token, error) => {
      if (error) {
        setState({ ...state, error: error })
      } else if (token) {
          DeleteUserMutation(id, error => {
          setState({ ...state, error: error })
        })
        localStorage.removeItem('token')
        toggleDeleteUserDialog()
      }
    })
  }
    if (!openDeleteUserDialog) {
      openDeleteUserDialog = false
    }
    return (
      <Dialog
        open={openDeleteUserDialog}
        onClose={toggleDeleteUserDialog}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{'Confirm Delete'}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Enter Password to confirm Delete ?
          </DialogContentText>
        </DialogContent>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='password'
          label='Enter Password'
          name='password'
          autoComplete='password'
          value={state.password}
          onChange={(e) => handlePassChange(e)}
        />
        {state.error ? <div>{state.error}</div> : null}
        <DialogActions>
          <Button onClick={toggleDeleteUserDialog} color='secondary'>
            Discard
          </Button>
          <Button color='primary' onClick={() => handleDeleteUser()}>
            Delete User
          </Button>
        </DialogActions>
      </Dialog>
    )
  
}

export default DeleteUserDialog
