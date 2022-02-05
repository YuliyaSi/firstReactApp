import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import pic from "../../../assets/images/168732.png"
import ProfileStatus from "../ProfileStatus";


const ProfileInfo = ({profile, status,updateStatus}) => {

    if(!profile) {
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
                    <img src={profile.photos.large || pic} alt=""/>
                    <div>{profile.fullName}
                        <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                </div>
                <div className={s.descriptionBlock}>
                    <div>
                        <p>About me: {profile.aboutMe}</p>
                        <p>Looking for a job: {profile.lookingForAJob ? ' Yes ' : ' No '}</p>
                        <p>Job description: {profile.lookingForAJobDescription}</p>
                    </div>
                    <div>
                        Contacts:<br/>
                        <span>{profile.contacts.facebook || ' - '}</span><br/>
                        <span>{profile.contacts.website || ' - '}</span><br/>
                        <span>{profile.contacts.vk || ' - '}</span><br/>
                        <span>{profile.contacts.twitter || ' - '}</span><br/>
                        <span>{profile.contacts.instagram || ' - '}</span><br/>
                        <span>{profile.contacts.youtube || ' - '}</span><br/>
                        <span>{profile.contacts.github || ' - '}</span><br/>
                        <span>{profile.contacts.mainLink || ' - '}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;