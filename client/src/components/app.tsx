import React, { useEffect, useState, createContext } from "react";
import Header from "./header";
import Footer from "./footer";
import { getUserData } from "./login/api";
import { IUserData } from "../types";

interface IAppProps {
    hideFooter?: boolean;
    children: React.ReactNode;
}

export const AppContext = createContext(null);

const App = ({ children, hideFooter = false }: IAppProps) => {
    const [user, setUser] = useState<Omit<IUserData, "password"> | null>(null);
    const [accessToken, setAccessToken] = useState<String | null>(null);
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            setAccessToken(token);
            const fetchUserData = async () => {
                const res = await getUserData();
                setUser({
                    email: res.email,
                    firstName: res.firstName,
                    lastName: res.lastName,
                    avatarUrl: res.avatarUrl
                })
            }
            fetchUserData();
        }
    }, [])

    return (
        <>
            <Header accessToken={accessToken} />
                <AppContext.Provider value={{ user }}>
                    {children}
                </AppContext.Provider>
            {!hideFooter && <Footer />}
        </>
    )
}

export default App;