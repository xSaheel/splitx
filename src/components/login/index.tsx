import { TextField, Button } from '@mui/material';
import React from 'react'
import classes from "./styles.module.scss";

const Login = () => {
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>Login / SignUp</h2>
                <TextField placeholder="FirstName" type="text" />
                <TextField placeholder="LastName" type="text" />
                <TextField placeholder="Email" type="email" />
                <TextField placeholder="Password" type="password" />
                <div className={classes.ctaContainer}>
                    <Button className={classes.btn}>Lets Go!</Button>
                    <p>Or</p>
                    <Button className={classes.btn}>Google</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
