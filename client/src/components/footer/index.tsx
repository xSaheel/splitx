import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import classes from "../header/styles.module.scss";
import { useRouter } from 'next/router';

const Footer = () => {
    const router = useRouter();
    return (
        <div className={classes.footer}>
            <div className={classes.brand}>
                <h2>Welcome to Split-X ©</h2>
                <div className={classes.social}>
                    <GitHubIcon onClick={() => router.push("https://github.com/xSaheel")} />
                    <LinkedInIcon onClick={() => router.push("https://www.linkedin.com/in/saheeldas21/")} />
                    <InstagramIcon onClick={() => router.push("https://www.instagram.com/saheel.das/")} />
                </div>
            </div>
            <div className={classes.aboutUs}>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi esse obcaecati blanditiis debitis exercitationem, earum voluptatibus. Minus quidem ducimus nobis dignissimos atque laboriosam sint et quod illum quisquam! Incidunt, praesentium.</p>
                <br />
                <p>@Dev -- Saheel Das</p>
            </div>
        </div>
    )
}

export default Footer;
