import React from "react";
// import s from './Profile.module.css'
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <Posts postsData={props.postsData}/>
        </div>
    )
}
export default Profile;