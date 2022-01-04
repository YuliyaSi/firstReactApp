import React from "react";
// import s from './Profile.module.css'
import Posts from "./MyPosts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <Posts postsData={props.profilePage.postsData}
                   newPostText={props.profilePage.newPostText}
                   addPost={props.addPost} updatePost={props.updatePost}/>
        </div>
    )
}
export default Profile;