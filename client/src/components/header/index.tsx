import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import classes from "./styles.module.scss";
import { useRouter } from 'next/router';

const Header = ({ accessToken } : { accessToken: String }) => {
    const router = useRouter();
    const handleAuth = () => {
        if (accessToken) {
            localStorage.removeItem("accessToken");
            router.push("/");
        } else {
            router.push("/auth");
        }
    };
    return (
        <div className={classes.header}>
            <h2 onClick={() => router.push("/")} style={{cursor: "pointer"}}>Split-X</h2>
            <div className={classes.links}>
                <a>How it Works?</a>
                <a>Support Me</a>
                <a>Learn More</a>
            </div>
            <button className={classes.login} onClick={handleAuth}>{accessToken ? "Logout" : "Login"}</button>
            <MenuIcon className={classes.hamMenuIcon} />
        </div>
    )
}

export default Header;
