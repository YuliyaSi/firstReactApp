import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.back}>
                <img
                    src="https://images.pexels.com/photos/1054222/pexels-photo-1054222.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt="Wait a minute please.."/>
            </div>
            <div className={s.logo}>
                <div className={s.ava}>
                    <img src={props.profile.photos.large || "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"} alt=""/>
                    <div>{props.profile.fullName}</div>
                </div>
                <div className={s.descriptionBlock}>
                    <div>
                        <p>About me: {props.profile.aboutMe}</p>
                        <p>Looking for a job: {props.profile.lookingForAJob ? ' Yes ' : ' No '}</p>
                        <p>Job description: {props.profile.lookingForAJobDescription}</p>
                    </div>
                    <div>
                        Contacts:<br/>
                        <span>{props.profile.contacts.facebook || ' - '}</span><br/>
                        <span>{props.profile.contacts.website || ' - '}</span><br/>
                        <span>{props.profile.contacts.vk || ' - '}</span><br/>
                        <span>{props.profile.contacts.twitter || ' - '}</span><br/>
                        <span>{props.profile.contacts.instagram || ' - '}</span><br/>
                        <span>{props.profile.contacts.youtube || ' - '}</span><br/>
                        <span>{props.profile.contacts.github || ' - '}</span><br/>
                        <span>{props.profile.contacts.mainLink || ' - '}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;