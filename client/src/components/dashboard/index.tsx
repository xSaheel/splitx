import { AddBox } from '@mui/icons-material';
import React from 'react'
import classes from "./styles.module.scss";

const DashBoard = () => {
    return (
        <div className={classes.root}>
            <div className={classes.left}>
                <h2>Balance: <span className={classes.balance}>$100.00</span></h2>
                <div className={classes.expenses}>
                    <h2>To Pay: <span style={{color: "#e23737"}}>$100.00</span></h2>
                    <h2>To Receive: <span style={{color: "#1db91d"}}>$100.00</span></h2>
                </div>
                <div className={classes.myGroups}>
                    <h2>My Groups <AddBox /></h2>
                    <h2>To Receive: <span style={{color: "#e23737"}}>$100.00</span></h2>
                </div>
            </div>
            <div className={classes.right}>
                <h1>Charts</h1>
            </div>
        </div>
    )
}

export default DashBoard
