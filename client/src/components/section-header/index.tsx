import { Divider } from '@mui/material';
import React from 'react'
import classes from "./styles.module.scss";

interface ISectionHeaderProps {
    heading: string;
    children: React.ReactNode;
}

const SectionHeader = ({children, heading}: ISectionHeaderProps) => {
    return (
        <div className={classes.root}>
            <h1 className={classes.heading}>{heading}</h1>
            <br />
            <Divider />
            <br />
            {children}
        </div>
    )
}

export default SectionHeader;
