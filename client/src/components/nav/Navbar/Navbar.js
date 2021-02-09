import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import SignedInLinks from '../SignedInLinks/SignedInLinks'
import SignedOutLinks from '../SignedOutLinks/SignedOutLinks'
import NavbarStyle from './NavbarStyle'


const Navbar = (props) => {
  const { classes, currentProfile } = props
  const [logged,setLogged] = useState(currentProfile ? true : false)

  const logout = () => {
    localStorage.removeItem('token')
    setLogged(false)
  }

    const links = logged ? (
      <SignedInLinks
        id={currentProfile.id}
        name={currentProfile.name}
        style={classes.title}
        logout={logout}
      />
    ) : (
      <SignedOutLinks style={classes.title} />
    )
    return (
      <div className={classes.grow}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='open drawer'
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant='h6' noWrap>
              <Link
                to='/dashboard'
                style={{ textDecoration: 'none', color: 'white' }}
              >
                chatapp
              </Link>
            </Typography>
            <div className={classes.grow} />
            {links}
            <div className={classes.sectionMobile}></div>
          </Toolbar>
        </AppBar>
      </div>
    )
  
}

export default withStyles(NavbarStyle)(Navbar)
