// import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { IUserData } from '../../types';
// import { getUserData } from '../login/api';
import jwt from "jsonwebtoken";
import classes from "./styles.module.scss";

const MyProfile = () => {
    const [userData, setUserData] = useState<Omit<IUserData, "password"> | null>(null);
    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         const data = await getUserData();
    //         console.log('data: ', data);
    //         setUser(data);
    //     }
    //     fetchUserData();
    // }, [])
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if(accessToken) {
            const user = jwt.decode(accessToken);
            if(user) {
                setUserData(user);
            } else {
                localStorage.removeItem("accessToken");
                router.push("/");
            }
        } else {
            router.push("/login");
        }
    }, [])
    return (
        <div>
            <div className={classes.user}>
                <div style={{height: "200px", width: "200px", maxWidth: "200px", borderRadius: "50%", backgroundColor: "teal", flex: 0.3}} />
                <div style={{flex: 0.7}}>
                    <h3>Name: {userData?.firstName} {userData?.lastName}</h3>
                    <h3>Email: {userData?.email}</h3>
                    <h3>Balance: +100</h3>
                    <h3>Balance: -200</h3>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;
