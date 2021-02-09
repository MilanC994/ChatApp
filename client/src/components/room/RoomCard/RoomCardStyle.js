import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'


const RoomCardStyle = makeStyles(() => ({
    root: {
      maxWidth: 345,
      margin: 10,
      maxHeight: 300,
    },
    media: {
      height: 200,
      width: '100%',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    menuIcon: {
      '&:hover': {
        cursor: 'pointer',
      },
    },
  }))

  export default RoomCardStyle