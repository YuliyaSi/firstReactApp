import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/168732.png'


let Users = (props) => {

    if(props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            props.setUsers(response.data.items)
        });
    }

    return (
        <div className={s.users}>
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <div className={s.user_photo}>
                        <div>
                            <img src={u.photos.small || u.photos.large || userPhoto} alt={'pic'} className={s.img}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.user_info}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users;