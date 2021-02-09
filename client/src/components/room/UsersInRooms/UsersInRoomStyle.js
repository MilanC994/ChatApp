
const UsersInRoomsStyle = (theme) => ({
    headerBox: {
      width: '80%',
      margin: 'auto',
      marginBottom: '10px',
    },
    searchBtn: {
      float: 'right',
      marginTop: '10px',
    },
    search: {
      width: '70%',
    },
    root: {
      flexGrow: 1,
      marginTop: '10px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      // height:"85vh"
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '70%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    listRoot: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      borderRadius: 10,
      marginTop: '10px',
      marginBottom: '10px',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      padding: 10,
      height: 400,
    },
  })
  
export default UsersInRoomsStyle