import axios from "axios";
import { BASE_URL } from '../../constants';
import { IUserData } from "../../types";

export const handleRegistration = async (userData: IUserData) => {
    console.log('userData: ', userData);
    const url = `${BASE_URL}/register`;
    try {
        const response = await axios.post(url, 
            JSON.stringify(userData),
            { headers: { "Content-Type": "application/json" }}
        );
        console.log('response: ', response);
        return response.data;
    } catch (err) {
        console.log('err: ', err);
    }
}   

export const handleLogin = async (email: string, password: string) => {
    const url = `${BASE_URL}/login`;
    try {
        const response = await axios.post(url, 
            { email: email, password: password }
        );
        console.log('response: ', response.data);
        return response.data;
    } catch (err) {
        console.log('err: ', err);
    }
}   

export const getUserData = async () => {
    const url = `${BASE_URL}/user`;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.log('err: ', err);
    }
}