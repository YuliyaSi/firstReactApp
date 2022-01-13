import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/168732.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items)
            });

    }

    render() {
        return <div className={s.users}>
            {
                this.props.users.map(u => <div key={u.id} className={s.user}>
                    <div className={s.user_photo}>
                        <div>
                            <img src={u.photos?.small || userPhoto} alt={'pic'} className={s.img}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.user_info}>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>City: {u.location?.city || 'none'}</div>
                            <div>Country: {u.location?.country || 'none'}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    }
}

export default Users;