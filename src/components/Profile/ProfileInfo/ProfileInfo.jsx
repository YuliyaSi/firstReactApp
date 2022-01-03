import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.profileInfo}>
            <div className={s.back}>
                <img
                    src="https://images.pexels.com/photos/1054222/pexels-photo-1054222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""/>
            </div>
            <div className={s.logo}>
                <div className={s.ava}>
                    <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" alt=""/>
                </div>
                <div className={s.descriptionBlock}>
                    ava + description
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;