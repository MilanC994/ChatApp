import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import CreateRoomMutation from '../../mutations/CreateRoom'
import UpdateRoomMutation from '../../mutations/UpdateRoom'
import EditRoomPropertiesStyle from './EditRoomPropertiesStyle'

const EditRoomProperties = ({room, handleToggleModal, userId, classes, create}) => {

  const [state,setState] = useState({
    name: '',
    public: false,
  })

  const updateRoom = () => {
    UpdateRoomMutation(room.id, state.name, state.public)
    handleToggleModal()
  }
  const createRoom = () => {
     

    CreateRoomMutation(
      userId,
      state.name,
      state.public,
      async (updater, store, id, edge, connection) => {
        await updater(store, id, edge, connection)
      }
    )
    handleToggleModal()
  }

  useEffect(() => {
    if (room) {
      setState({ ...state, name: room.name, public: room.public })
    }
  }, [room])
  
    let btn
    if (create) {
      btn = (
        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={() => createRoom()}
        >
          Create Room
        </Button>
      )
    } else {
      btn = (
        <Button
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
          onClick={() => updateRoom()}
        >
          Save Changes
        </Button>
      )
    }
    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <form className={classes.form}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Name'
              name='name'
              autoComplete='name'
              value={state.name}
              onChange={(e) =>
                setState({ ...state, name: e.target.value })
              }
            />
            <FormControlLabel
              control={
                <Switch
                  checked={state.public}
                  onChange={(e) =>
                    setState({ ...state, public: e.target.checked })
                  }
                  name='checkedB'
                  color='primary'
                />
              }
              label='Public'
            />
            {btn}
          </form>
        </div>
      </Container>
    )
  
}

export default withStyles(EditRoomPropertiesStyle)(EditRoomProperties)
