import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import SendIcon from '@material-ui/icons/Send'
import { createPaginationContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import Message from '../Message/Message'
import ChatStyle from './ChatStyle'
import useChat from './useChat'

const Chat = ({ userId, roomId, messages, classes, relay }) => {
  
  const { 
    contentField: content,
    error,
    createMessage, 
    bottomRef,
    topRef
   } = useChat({
              userId,
              roomId,
              messages: messages.messages.edges,
              relay  
            })
  const { hasMore, isLoading } = relay
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <List className={classes.messageArea}>
          <div ref={topRef}>{(!hasMore() && 'No More Messages') || (isLoading() && 'Loading...')}</div>
            {messages.messages.edges.map((edge) => (
              <Message
                mainUserId={userId}
                key={edge.cursor}
                UserMessage={edge.node}
              />
            ))}
            {error}
            <div ref={bottomRef}></div>
          </List>
          <Divider />
          <Grid container style={{ padding: '20px' }}>
            <Grid item xs={11}>
              <TextField
                {...content}
                error={!!content.error}
                id='outlined-basic-email'
                label='Type Something'
                fullWidth
              />
            </Grid>
            <Grid xs={1} align='right'>
              <Fab
                color='primary'
                aria-label='add'
                onClick={createMessage}
              >
                <SendIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )

}

export default createPaginationContainer(withStyles(ChatStyle)(Chat), {
  messages: graphql`
    fragment Chat_messages on Room 
    @argumentDefinitions(
      count: {type: "Int", defaultValue: 10}
      cursor:{type:"Cursor"}
      orderBy: {type: "MessagesOrderBy", defaultValue: SENT_AT_ASC}
      id:{type: "UUID"})
    {
      messages(orderBy: SENT_AT_ASC, last: $count, before:$cursor)
        @connection(key: "all_messages_in_room_messages", filters: []) {
        edges {
          cursor
          node {
            id
            ...Message_UserMessage
          }
        }
        pageInfo {
          startCursor
          hasPreviousPage
         }    
      }
    }
  `},{
    direction: 'backward',
    getConnectionFromProps(props) {
      return props.messages && props.messages.messages;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        count: totalCount,
      };
    },
    getVariables(props, pageInfo, fragmentVariables) {
      return {
        count: pageInfo.count,
        cursor: pageInfo.cursor,
        orderBy: fragmentVariables.orderBy,
        id: fragmentVariables.id,
      };
    },
    query: graphql`
      # Pagination query to be fetched upon calling 'loadMore'.
      # Notice that we re-use our fragment, and the shape of this query matches our fragment spec.
      query ChatQuery(
        $count: Int!
        $cursor: Cursor!
        $orderBy: MessagesOrderBy!
        $id: UUID!
      ) {
        room(id: $id) {
          id
          name
          usersInRooms {
            ...UsersInChat_Users
          }
    
          ...Chat_messages @arguments(count:$count, cursor:$cursor, orderBy:$orderBy)
        }
      }
    
    `
})
