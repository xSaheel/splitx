import axios from "axios";
import { BASE_URL } from '../../constants';
import { IUserData } from "../../types";

const url = `${BASE_URL}/user/`;

export const handleRegistration = async (userData: IUserData) => {
    const headers = { "Content-Type": "application/json" }
    try {
        const res = await axios.post(url + "register", 
            JSON.stringify(userData),
            { headers }
        );
        return res;
    } catch (err) {
        return err.response;
    }
}   

export const handleLogin = async (email: string, password: string) => {
    try {
        const res = await axios.post(url + "login", 
            { email: email, password: password }
        );
        return res;
    } catch (err) {
        return err.response;
    }
}   

export const getUserData = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const headers = { 
        Authorization: `Bearer ${accessToken}`
    };
    try {
        const res = await axios.get(url, { headers });
        return res.data;
    } catch (err) {
        return err.response;
    }
}