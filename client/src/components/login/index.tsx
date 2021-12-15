import { Button } from '@mui/material';
import React, { useState } from 'react'
import classes from "./styles.module.scss";

interface IUserData {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
}

const Login = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
    const [userData, setUserData] = useState<IUserData | null>(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('userData: ', userData);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // const property = e.target.name;
        // console.log('property: ', property);
        // const change = {property: e.target.value};
        // console.log('change: ', change);
        setUserData({...userData, [e.target.name]: e.target.value });
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>Login / SignUp</h2>
                <form>
                    {!isLoginPage && <input placeholder="FirstName" type="text" name="FirstName" onChange={handleChange} />}
                    {!isLoginPage && <input placeholder="LastName" type="text" name="LastName" onChange={handleChange}  />}
                    <input placeholder="Email" type="email" name="email" onChange={handleChange}  /> 
                    <input placeholder="Password" type="password" name="password" onChange={handleChange}  />
                    <Button onClick={handleSubmit} className={classes.btn}>Lets Go!</Button>
                </form>
                <div className={classes.ctaContainer}>
                    {/* <p>Or</p>
                    <Button className={classes.btn}>Google</Button> */}
                    <Button className={classes.dontHaveAccount} onClick={() => setIsLoginPage(!isLoginPage)}>{isLoginPage ? "Dont Have an account? Sign Up" : "Already have an account? Login"}</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
