import React from "react";
import Header from "./header";
import Footer from "./footer";

interface IAppProps {
    hideFooter?: boolean;
    children: React.ReactNode;
}

const App = ({ children, hideFooter = false }: IAppProps) => {
    return (
        <>
            <Header />
            {children}
            {!hideFooter && <Footer />}
        </>
    )
}

export default App;