import Divider from '@mui/material/Divider';
import Image from 'next/image';
import React, { useContext } from 'react'
import { AppContext } from '../app';
import classes from "./styles.module.scss";

const DashBoard = () => {
    const { user } = useContext(AppContext);
    return (
        <>
            {user && (
                <div className={classes.root}>
                    <div className={classes.profileContainer}>
                        <Image src={user?.avatarUrl} alt="avatar" height={200} width={200} className={classes.avatar} priority />
                        <h2 className={classes.userName}>{user?.firstName} {user?.lastName}</h2>
                        <p>{user?.email}</p>
                    </div>
                    <div className={classes.detailsContainer}>
                        <h1>Balance: $100</h1>
                        <Divider />
                        <div>
                            <h2>My Rooms</h2>
                            <div className={classes.roomsContainer} />
                        </div>
                        <div>
                            <h2>My Invites</h2>
                            <div className={classes.roomsContainer} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DashBoard
