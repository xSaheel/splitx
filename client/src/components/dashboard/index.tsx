import Divider from '@mui/material/Divider';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IUserData } from '../../types';
import { getUserData } from '../login/api';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/adventurer-neutral';
import classes from "./styles.module.scss";

const DashBoard = () => {
    const [userData, setUserData] = useState<Omit<IUserData, "password"> | null>(null);
    const [accessToken, setAccessToken] = useState<String | null>(null);
    const router = useRouter();

    // To be replaced by redux
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setAccessToken(token);
            const fetchUserData = async () => {
                const res = await getUserData();
                setUserData({
                    email: res.email,
                    firstName: res.firstName,
                    lastName: res.lastName
                })
            }
            fetchUserData();
        } else {
            router.push("/login");
        }
    }, [])

    const generateAvatar = () => {
        const avatar = createAvatar(style, {
            seed: accessToken.substring(0, 9),
            dataUri: true
        });
        return avatar;
    };
    

    return (
        <>
            {accessToken && (
                <div className={classes.root}>
                    <div className={classes.profileContainer}>
                        <Image src={generateAvatar()} alt="profile-picture" height={200} width={200} className={classes.avatar} />
                        <h2 className={classes.userName}>{userData?.firstName} {userData?.lastName}</h2>
                        <p>{userData?.email}</p>
                    </div>
                    <div className={classes.detailsContainer}>
                        <h1>Balance: $100</h1>
                        <Divider />
                        <div>
                            <h2>My Rooms</h2>
                            <div style={{ height: "120px", width: "100%", border: "1px dashed #243244", borderRadius: "2rem" }} />
                        </div>
                        <div>
                            <h2>My Invites</h2>
                            <div style={{ height: "120px", width: "100%", border: "1px dashed #243244", borderRadius: "2rem" }} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DashBoard
