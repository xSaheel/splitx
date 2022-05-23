import Head from "next/head";
import App from "../../src/components/app";
import Login from "../../src/components/login";

const Auth = () => {
    return (
        <App hideFooter>
            <Head>
                <title>Split-X | Login/ Sign-up</title>
                <meta name="description" content="Split your bills Hassle-Free! Go Split-X" />
            </Head>
            <Login />
        </App>
    )
}

export default Auth;