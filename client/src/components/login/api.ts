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
        return response;
    } catch (err) {
        console.log('err: ', err);
    }
}   
