import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Chat from '../../chat/Chat/Chat'
import UsersInChat from '../../chat/UsersInChat/UsersInChat'
import environment from '../../../Environment'
import { QueryRenderer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Navbar from '../../nav/Navbar/Navbar'
import ChatRoomStyle from './ChatRoomStyle'

const roomQuery = graphql`
  query ChatRoomQuery($id: UUID!) {
    currentProfile {
      id
      name
    }
    room(id: $id) {
      id
      name
      usersInRooms {
        ...UsersInChat_Users
      }

      ...Chat_messages
    }
  }
`

const ChatRoom = (props) => {
    const { classes,  } = props
    return (
      <QueryRenderer
        environment={environment}
        query={roomQuery}
        variables={{ id: props.match.params.id }}
        render={({ error, props }) => {
          if (error || !(props && props.currentProfile)) {
            return <div>errorasdasdasdasd</div>
          } else if (props) {
            return (
              <React.Fragment>
                <Navbar currentProfile={props.currentProfile} />
                <Grid className={classes.root} container spacing={1}>
                  <Grid item xs={9}>
                    <Paper className={classes.paper}>
                      <Chat
                        userId={props.currentProfile.id}
                        roomId={props.room.id}
                        messages={props.room}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper className={classes.paper}>
                      <UsersInChat Users={props.room.usersInRooms} />
                    </Paper>
                  </Grid>
                </Grid>
              </React.Fragment>
            )
          }
          return <div>Loading</div>
        }}
      />
    )
  
}

export default withStyles(ChatRoomStyle)(ChatRoom)
