import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const SignedOutLinks = ({style}) => {
    return (
        <React.Fragment>
            <Typography className={style} variant="h6" noWrap>
                <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>
                    Register
                </Link>
            </Typography>
            <Typography className={style} variant="h6" noWrap>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                    Login
                </Link>
            </Typography>
        </React.Fragment>
    )

}

export default SignedOutLinks
