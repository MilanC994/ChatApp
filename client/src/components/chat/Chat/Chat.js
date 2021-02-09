import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Message from '../Message/Message'
import ChatStyle from './ChatStyle'
import useChat from './useChat'

const Chat = ({ userId, roomId, messages, classes }) => {
  const { state, handleContentChange,createMessage } = useChat({ userId, roomId })
  const { content, messageError } = state

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
            {messages.messages.edges.map((edge) => (
              <Message
                mainUserId={userId}
                key={edge.cursor}
                UserMessage={edge.node}
              />
            ))}
            {messageError}
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField
                value={content}
                onChange={handleContentChange}
                id='outlined-basic-email'
                label='Type Something'
                fullWidth
              />
            </Grid>
            <Grid xs={1} align='right'>
              <Fab
                color='primary'
                aria-label='add'
                onClick={() => createMessage()}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )

}

export default createFragmentContainer(withStyles(ChatStyle)(Chat), {
  messages: graphql`
    fragment Chat_messages on Room {
      messages(orderBy: SENT_AT_ASC, first: 20)
        @connection(key: "all_messages_in_room_messages", filters: []) {
        edges {
          node {
            id
            ...Message_UserMessage
          }
        }
      }
    }
  `,
})
