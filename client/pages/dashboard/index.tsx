import React from 'react'
import App from '../../src/components/app';
import DashBoardComponent from "../../src/components/dashboard";
import SectionHeader from '../../src/components/section-header';

const DashBoard = () => {
    return (
        <App>
            <SectionHeader heading="DashBoard">
                <DashBoardComponent />
            </SectionHeader>
        </App> 
    )
}

export default DashBoard;