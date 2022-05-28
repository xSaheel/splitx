import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { IUserData } from "../../types";
import { handleLogin, handleRegistration } from "./api";

export const useLogin = () => {
    const [isLoginPage, setIsLoginPage] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<IUserData | null>(null);
    const [message, setMessage] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const emailValidation = useRef(/^(.+)@(.+)$/);
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
            router.push("/");
        } 
    }, []);

    const validateCredentials = () => {
        if(userData.email === "" || userData.password === "" || userData?.firstName === "" || userData?.lastName === "") {
            setErrorMessage("All fields are Mandatory");
            return false;
        }
        if(!emailValidation.current.test(userData.email)) {
            setErrorMessage("Incorrect Email Address");
            return false;
        }
        if(userData.password.length < 6) {
            setErrorMessage("Password should be atleast 6 characters long");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Front-end Validation
        if(!validateCredentials()) return;
        // Handling Login/ SignUp
        setIsLoading(true);

        let res;
        if (isLoginPage) {
            res = await handleLogin(userData?.email, userData?.password);
        } else {
            res = await handleRegistration(userData);
        }
        if (res.status >= 400) {
            setMessage("");
            setErrorMessage(res.data?.message);
            setIsLoading(false);
        } else {
            const { message, user } = res.data;
            setErrorMessage("");
            setMessage(message);

            // AccessToken
            if (user && typeof window !== "undefined") {
                localStorage.setItem("accessToken", user.accessToken);
                // TO BE REMOVED
                router.push("/dashboard");
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserData({...userData, [e.target.name]: e.target.value });
    };

    const handlePageChange = () => {
        setErrorMessage("");
        setUserData(null);
        setIsLoginPage(!isLoginPage);
    };

    return {
        userData,
        isLoginPage,
        isLoading,
        message, 
        errorMessage,
        handleSubmit,
        handlePageChange,
        handleChange
    }
};
