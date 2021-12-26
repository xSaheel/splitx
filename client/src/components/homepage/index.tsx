import App from "../app";
import classes from "./styles.module.scss";
import { ChevronRight } from "@mui/icons-material";
import { Button } from "@mui/material";

const HomePage = () => {
    return (
        <App>
            <Button variant="contained" className={classes.getStarted} endIcon={<ChevronRight />}>Get Started</Button>
            <div className={classes.root}>
                <div className={classes.hero}>
                    <h1>Splitting your bills has never been easier!</h1>
                    {/* <h2>Welcome to Split-X.</h2> */}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.squarespace-cdn.com/content/v1/5aa01b0b297114c7aca00b5d/1528882282780-XGZYUP5KDQM05IIU2XGS/Splitting-bill-six-ways.jpg?format=1000w" alt="hero" className={classes.heroImage} />
            </div>
        </App>
    )
}   

export default HomePage;