import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/168732.png";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for(let i = 1; pagesCount === 40 ? i <= pagesCount : i <= 40 ; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>
            <div className={s.pagination}>

                {pages.map(p => <div onClick={ () => props.onPageChanged(p) }
                                     className={props.currentPage === p ? s.selectedPage : s.page}>
                    {p}

                </div>)}

            </div>
            {
                props.users.map(u => <div key={u.id} className={s.user}>
                    <div className={s.user_photo}>
                        <div>
                            <img src={u.photos.small || userPhoto} alt={'pic'} className={s.img}/>
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
                            <div>City</div>
                            <div>Country</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;