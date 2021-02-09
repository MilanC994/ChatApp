import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '../../../Style/Box'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import GridList from '@material-ui/core/GridList'
import User from '../../user/User/User'
import Button from '@material-ui/core/Button'
import { createFragmentContainer } from 'react-relay'
import graphql from 'babel-plugin-relay/macro'
import UsersInRoomsStyle from './UsersInRoomStyle'

class UsersInRoom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      roomId: this.props.roomId,
    }
  }

  render() {
    const { classes } = this.props
    const { usersInRooms } = this.props.users

    const handleCreateInviteByEmail = () => {
      //CreateInviteByEmailMutation(email,roomId)
    }
    return (
      <React.Fragment>
        <Box className={classes.headerBox}>
          <TextField
            value={this.state.email}
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
            className={classes.search}
            id='standard-basic'
            label='Input User Email'
          />
          <Button
            onClick={() => handleCreateInviteByEmail()}
            variant='contained'
            color='primary'
            className={classes.searchBtn}
          >
            Search User
          </Button>{' '}
        </Box>
        <Divider />
        <span>Users in Room</span>
        <Box className={classes.listRoot}>
          <GridList cellHeight={20} className={classes.gridList} cols={2}>
            {usersInRooms &&
              usersInRooms.edges.map(({ node }) => (
                <User
                  type={'userInRoom'}
                  key={node.id}
                  userInRoomId={node.id}
                  roomId={this.props.roomId}
                  UserInfo={node.user}
                  dateJoined={node.dateJoined}
                />
              ))}
          </GridList>
        </Box>
      </React.Fragment>
    )
  }
}

export default createFragmentContainer(withStyles(UsersInRoomsStyle)(UsersInRoom), {
  users: graphql`
    fragment UsersInRoom_users on Room {
      usersInRooms(orderBy: DATE_JOINED_DESC, first: 100)
        @connection(key: "roomUsers_usersInRooms", filters: []) {
        edges {
          node {
            id
            user {
              ...User_UserInfo
            }
            dateJoined
          }
        }
      }
    }
  `,
})
