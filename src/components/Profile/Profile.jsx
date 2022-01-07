import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./MyPosts/PostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <PostsContainer store={props.store}/>
        </div>
    )
}
export default Profile;