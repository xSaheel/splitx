import { Button, CircularProgress } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useRouter } from 'next/router';
import React, { useState, useRef } from 'react'
import { IUserData } from '../../types';
import { handleLogin, handleRegistration } from './api';
import classes from "./styles.module.scss";

const Login = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUserData | null>(null);
    const [message, setMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const emailValidation = useRef(/^(.+)@(.+)$/);

    const router = useRouter();

    const validateCredentials = () => {
        if(userData.email === "" || userData.password === "" || userData?.firstName === "" || userData?.lastName === "") {
            setErrorMessage("All fields are Mandatory");
            return false;
        }
        if(!emailValidation.current.test(userData.email)) {
            setErrorMessage("Incorrect Email Address");
            return false;
        }
        if(userData.password.length < 6) {
            setErrorMessage("Password should be atleast 6 characters long");
            return false;
        }
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateCredentials()) {
            return;
        }
        if (isLoginPage) {
            const loginHandler =  async () => {
                setIsLoading(true);
                const res = await handleLogin(userData?.email, userData.password);
                setIsLoading(false);
                // AccessToken
                if (res?.user && typeof window !== "undefined") {
                    localStorage.setItem("accessToken", res?.user);
                    // TO BE REMOVED
                    router.push("/profile");
                }
                setMessage(res?.message);
                setErrorMessage(res?.error);
            }
            loginHandler();
        } else {
            const registrationHandler = async () => {
                setIsLoading(true);
                const res = await handleRegistration(userData);
                setIsLoginPage(true);
                setIsLoading(false);
                setMessage(res?.message);
                setErrorMessage(res?.error);
            }
            registrationHandler();
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, [e.target.name]: e.target.value });
    };

    const handlePageChange = () => {
        setUserData(null);
        setIsLoginPage(!isLoginPage);
    };

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>Login / SignUp</h2>
                <form>
                    {isLoginPage && message && <p className={classes.message}>{message}</p>}
                    {errorMessage && <p className={classes.message} style={{color: "#7e0303"}}>{errorMessage}</p>}
                    {!isLoginPage && <input placeholder="FirstName" type="text" name="firstName" onChange={handleChange} value={userData?.firstName || ""} />}
                    {!isLoginPage && <input placeholder="LastName" type="text" name="lastName" onChange={handleChange} value={userData?.lastName || ""}  />}
                    <input placeholder="Email" type="email" name="email" onChange={handleChange} value={userData?.email || ""} /> 
                    <input placeholder="Password" type="password" name="password" onChange={handleChange} value={userData?.password || ""} />
                    <Button onClick={handleSubmit} className={classes.btn} endIcon={isLoading && <CircularProgress color="warning" size={18} />}>Lets Go!</Button>
                </form>
                <div className={classes.ctaContainer}>
                    {isLoginPage && (
                        <>
                            <p>Or</p>
                            <Button className={classes.btn} endIcon={<DoubleArrowIcon />}>Continue as Guest</Button>
                        </>
                    )}
                    <Button className={classes.dontHaveAccount} onClick={handlePageChange}>{isLoginPage ? "Dont Have an account? Sign Up" : "Already have an account? Login"}</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
