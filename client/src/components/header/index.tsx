import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import classes from "./styles.module.scss";
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    return (
        <div className={classes.header}>
            <h2 onClick={() => router.push("/")} style={{cursor: "pointer"}}>Split-X</h2>
            <div className={classes.links}>
                <a>How it Works?</a>
                <a>Support Me</a>
                <a>Learn More</a>
            </div>
            <p className={classes.login} onClick={() => router.push("/auth")}>Login</p>
            <MenuIcon className={classes.hamMenuIcon} />
        </div>
    )
}

export default Header;
