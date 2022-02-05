import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/168732.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, follow, unfollow}) => {
    let {followed, id, name, photos, status} = user;
    return (
        <div key={id} className={s.user}>
            <div className={s.user_photo}>
                <div>
                    <NavLink to={'profile/' + id}>
                        <img src={photos.small || userPhoto} alt={'pic'} className={s.img}/>
                    </NavLink>
                </div>
                <div>
                    {followed ?
                        <button disabled={followingInProgress.some(userId => userId === id)}
                                onClick={() => unfollow(id)}>Unfollow</button>
                        :
                        <button disabled={followingInProgress.some(userId => userId === id)}
                                onClick={() => follow(id)}>Follow</button>
                    }
                </div>
            </div>
            <div className={s.user_info}>
                <div>
                    <div>{name}</div>
                    <div>{status}</div>
                </div>
                <div>
                    <div>City</div>
                    <div>Country</div>
                </div>
            </div>
        </div>)
}

export default User;