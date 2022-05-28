import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import classes from "./styles.module.scss";
import { useLogin } from './useLogin';

const Login = () => {
    const { 
        userData, 
        isLoading, 
        isLoginPage, 
        message, 
        errorMessage, 
        handleSubmit, 
        handlePageChange, 
        handleChange
    } = useLogin();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <h2>{isLoginPage ? "Login" : "SignUp"}</h2>
                <form>
                    {isLoginPage && message && <p className={classes.message}>{message}</p>}
                    {errorMessage && <p className={classes.message} style={{color: "#7e0303"}}>{errorMessage}</p>}
                    {!isLoginPage && 
                        <input 
                            placeholder="FirstName" 
                            type="text" name="firstName" 
                            onChange={handleChange} 
                            value={userData?.firstName ?? ""} 
                        />
                    }
                    {!isLoginPage && 
                        <input 
                            placeholder="LastName" 
                            type="text" 
                            name="lastName" 
                            onChange={handleChange} 
                            value={userData?.lastName ?? ""}  
                        />
                    }
                    <input 
                        placeholder="Email" 
                        type="email" 
                        name="email" 
                        onChange={handleChange} 
                        value={userData?.email ?? ""} 
                    /> 
                    <input 
                        placeholder="Password" 
                        type="password" 
                        name="password" 
                        onChange={handleChange} 
                        value={userData?.password ?? ""} 
                    />
                    <Button 
                        onClick={handleSubmit} 
                        className={classes.btn} 
                        endIcon={isLoading && <CircularProgress color="warning" size={18} />}
                    >
                        {isLoginPage ? "Login" : "Sign Up"}
                    </Button>
                </form>
                <div className={classes.ctaContainer}>
                    <Button 
                        className={classes.dontHaveAccount} 
                        onClick={handlePageChange}
                    >
                        {isLoginPage ? "Dont Have an account? Sign Up" : "Already have an account? Login"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;
