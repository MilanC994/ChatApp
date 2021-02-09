import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import User from '../../user/User/User'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import UsersInChatStyle from './UsersInChatStyle'

const UsersInChat = ({ Users }) => {
    const classes = UsersInChatStyle()
    return (
        <div>
            <Grid item xs={12} className={classes.borderRight500}>

                <Divider />
                <Grid item xs={12} style={{ padding: '10px' }}>
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                <List>
                    {Users.nodes.map(node => {
                        return <User inMessage={false} key={node.id} dateJoined={node.dateJoined}  UserInfo={node.user} />
                    })}
                </List>
            </Grid>

        </div>
    )
}
export default createFragmentContainer(UsersInChat, {
    Users: graphql`
fragment UsersInChat_Users on UsersInRoomsConnection{
    
        nodes{
            id
            user{
          ...User_UserInfo
            }
          dateJoined
        }
      
    }

    `})