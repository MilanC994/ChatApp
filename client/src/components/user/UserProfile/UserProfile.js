import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Alert } from '@material-ui/lab'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import ProfileImg from '../../../imgs/profile_img.png'
import DeleteUserDialog from '../DeleteUserDialog/DeleteUserDialog'
import { Redirect, Link } from 'react-router-dom'
import UserProfileStyle from './UserProfileStyle'
import useUserProfile from './useUserProfile'


const UserProfile = ({ currentProfile, classes }) => {
  const {
    nameField,
    newPasswordField,
    retypePasswordField,
    currentPasswordField,
    emailField,
    state,
    toggleDeleteUserDialog,
    handleSubmit
  } = useUserProfile({currentProfile})
  const callbackMessage = (type, message) => {
    return(
      <Alert severity={type}>
        {message}
      </Alert>
    )
  }

    if (!localStorage.token) {
      return <Redirect to='/login' />
    }

    return (
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <img className={classes.media} src={ProfileImg} />
          <Typography component='h1' variant='h5'>
            Edit Profile
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              label='Name'
              autoComplete='name'
              autoFocus
              {...nameField}
              error={!!nameField.error}
            />
            {!!nameField.error &&<Alert severity="error">{nameField.error}</Alert>}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              autoComplete='email'
              autoFocus
              {...emailField}
              error={!!emailField.error}
            />
            {!!emailField.error &&<Alert severity="error">{emailField.error}</Alert>}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Current Password'
              type='Password'
              id='currentPassword'
              autoComplete='current-password'
              {...currentPasswordField}
              error={!!currentPasswordField.error}
            />
            {!!currentPasswordField.error &&<Alert severity="error">{currentPasswordField.error}</Alert>}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='New Password'
              type='Password'
              id='newPassword'
              autoComplete='current-password'
              {...newPasswordField}
              error={!!newPasswordField.error}
            />
            {!!newPasswordField.error &&<Alert severity="error">{newPasswordField.error}</Alert>}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Retype New Password'
              type='Password'
              id='retypeNewPassword'
              autoComplete='current-password'
              {...retypePasswordField}
              error={!!retypePasswordField.error}
            />
            {!!retypePasswordField.error &&<Alert severity="error">{retypePasswordField.error}</Alert>}
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submitBtn}
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
              <Button
                fullWidth
                variant='contained'
                color='secondary'
                className={classes.submitBtn}
                onClick={handleSubmit}
              >
                <Link
                  style={{ textDecoration: 'none', color: 'white' }}
                  to='/dashboard'
                >
                  <b>Discard Changes</b>
                </Link>
              </Button>
            </div>
            <Button
              fullWidth
              variant='contained'
              color='secondary'
              className={classes.deactivateBtn}
              onClick={() => toggleDeleteUserDialog()}
            >
              Deactivate Account
            </Button>
          </form>
        </div>
        {state.error && callbackMessage('error', state.error)}
        {state.success && callbackMessage('success', state.success)}
        <DeleteUserDialog
          id={currentProfile.id}
          email={currentProfile.email}
          openDeleteUserDialog={state.openDeleteUserDialog}
          toggleDeleteUserDialog={toggleDeleteUserDialog}
        />
      </Container>
    )
  
}
export default withStyles(UserProfileStyle)(UserProfile)
