import React from 'react'
import App from '../../src/components/app';
import MyProfile from '../../src/components/my-profile';
import SectionHeader from '../../src/components/section-header';

const Profile = () => {
    return (
        <App>
            <SectionHeader heading="My Profile">
                <MyProfile />
            </SectionHeader>
        </App> 
    )
}

export default Profile;
