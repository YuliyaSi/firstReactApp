import React from "react";
import s from './Profile.module.css'
import Posts from "./MyPosts/Posts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.back}>
                <img src="https://images.pexels.com/photos/843226/pexels-photo-843226.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
            </div>
            <div className={s.logo}>
                <div className={s.ava}>
                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
                </div>
                <div>
                    ava + description
                </div>
            </div>
            <Posts />
        </div>
    )
}
export default Profile;