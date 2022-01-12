import React from "react";
import s from './Users.module.css'


let Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprjP-BMSaPG1L-_gGNVEVpP9pqXbmkUJk2g&usqp=CAU',
                followed: true,
                fullName: 'Elena',
                status: 'I\'m a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoURL: 'https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg',
                followed: true,
                fullName: 'Boris',
                status: 'I\'m a boss too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 3,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcbePIySXJg48soHAwNeEnSZBonIBs2Z10RJkOmGqqVWLzpPPY8yjwB7XM6r0xYpa1RgQ&usqp=CAU',
                followed: false,
                fullName: 'Yuliya',
                status: 'I\'m a boss too',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 4,
                photoURL: 'https://png.pngtree.com/png-vector/20190525/ourlarge/pngtree-man-avatar-icon-professional-man-character-png-image_1055448.jpg',
                followed: false,
                fullName: 'Alex',
                status: 'I\'m a boss too',
                location: {city: 'Minsk', country: 'Belarus'}
            }
        ])
    }

    return (
        <div className={s.users}>
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <div className={s.user_photo}>
                        <div>
                            <img src={u.photoURL} alt={'pic'} className={s.img}/>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div className={s.user_info}>
                        <div>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
export default Users;