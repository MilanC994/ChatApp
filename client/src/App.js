import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import ChatRoom from './components/room/ChatRoom/ChatRoom'
import SignIn from './components/auth/SignIn/SignIn'
import Register from './components/auth/Register/Register'
import Box from './Style/Box'
import CurrentProfile from './components/user/CurrentProfile/CurrentProfile'
import GetInviteData from './components/room/GetInviteData/GetInviteData'
const App = () => {
  return (
    <Box
      className="app"
      bgcolor="#fafafa"
      overflow="hidden"
      minHeight="100vh"
      height="100%"
      style={{ paddingBottom: '5px' }}
    >
      <Switch>
        <Route
          exact
          path="/register"
          render={props => <Register {...props} />}
        />
        <Route exact path="/login" render={props => <SignIn {...props} />} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/room/:id" component={ChatRoom} />
        <Route exact path="/profile/:id" component={CurrentProfile} />
        <Route exact path="/invite/:id" component={GetInviteData} />
        <Route path="/" render={() => <Redirect to="/login" />} />
      </Switch>
    </Box>
  )
}
export default App
