import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import {createFragmentContainer} from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import { Box } from '@material-ui/core'
import moment from 'moment'

function Message({ mainUserId, UserMessage, id }) {
    const align = mainUserId === UserMessage.userId ? 'right' :'left'
    const style={ float:align}
    
    return (
        <ListItem key={id}>
        <Grid container>
        <Grid align={align}item xs={12}>
            <span>{UserMessage.user.name}</span> 
            </Grid>
                <Grid  item xs={12}>
                    <Box  style={style} borderRadius='10px' padding="10px" bgcolor="info.main" width="fit-content ">
                        <ListItemText align={align} primary={UserMessage.content}></ListItemText>
                        <ListItemText align={align}  secondary={moment(UserMessage.sentAt).format('HH:MM')}></ListItemText>
                    </Box>
                </Grid>
                <Grid item xs={12}>            
            </Grid>
        </Grid>
    </ListItem>
    )
}

export default createFragmentContainer(Message,{ UserMessage : graphql`
fragment Message_UserMessage on Message{

    user{
       id
       name
        }
        userId
        content
        sentAt
    }
        `})

