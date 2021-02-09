

const AcceptInviteStyle = (theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      submit: {},
      margin: theme.spacing(3, 0, 2),
    },
    media: {
      height: '300px',
      width: '300px',
    },
    submitBtn: {
      width: '45%',
      marginRight: '10px',
    },
    deactivateBtn: {
      width: '100%',
      marginTop: '20px',
    },
  })
  
  export default AcceptInviteStyle