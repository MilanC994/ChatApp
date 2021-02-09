
const RegisterStyle = (theme) => ({
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
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    errorDiv: {
      width: '50%',
      border: '2px solid red',
      padding: '2px',
      color: 'white',
      height: 'fit-content',
      backgroundColor: '#ed4b82',
      borderRadius: '5px',
      margin: 'auto',
    },
  })

  export default RegisterStyle