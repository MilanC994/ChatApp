import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { Alert } from '@material-ui/lab'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { Redirect } from 'react-router-dom'
import Navbar from '../../nav/Navbar/Navbar'
import SignInStyle from './SignInStyle'
import useSignIn from './useSignIn'


const SignIn = ({ classes, inviteId, inviteEmail }) => {

  const { emailField: email, passwordField: password, handleSubmit, error, signedIn } = useSignIn({ inviteId, inviteEmail })
 
    if (signedIn) {
      return <Redirect to={'/dashboard'} />
    }
    return (
      <React.Fragment>
        {!inviteId && <Navbar />}
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                autoComplete='email'
                autoFocus
                {...email}
                error={!!email.error}
                disabled={!!inviteEmail}
              />
              {!!email.error &&<Alert severity="error">{email.error}</Alert>}
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                label='Password'
                type='password'
                id='password'
                {...password}
                error={!!password.error}
              />
              {!!password.error && <Alert severity="error">{password.error}</Alert>}
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
                onClick={handleSubmit}
                id='signInBtn'
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href='#' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href='#' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          {error && <Alert severity="error">{error}</Alert>}
        </Container>
      </React.Fragment>
    )
}
export default withStyles(SignInStyle)(SignIn)
