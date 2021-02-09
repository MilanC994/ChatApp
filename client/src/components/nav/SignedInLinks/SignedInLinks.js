import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const SignedInLinks = (props) =>  {
    const { id, style, name, logout } = props
    return (
        <React.Fragment>
            <Typography className={style} variant="h6" noWrap>
                <Link to={`/profile/${id}`} style={{ textDecoration: 'none', color: 'white' }}>
                    {name}
                </Link>
            </Typography>
            <Typography className={style} variant="h6" noWrap>
                <Link onClick={logout} to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                    Logout
        </Link>
            </Typography>
        </React.Fragment>
    )
    
}

export default SignedInLinks
