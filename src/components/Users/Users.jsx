import React from "react";
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
    return (
        <div className={s.users}>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged} currentPage={props.currentPage} portionSize={25}/>
            {
                props.users.map(u => <User user={u}
                                           followingInProgress={props.followingInProgress}
                                           follow={props.follow}
                                           unfollow={props.unfollow}
                                           key={u.id}
                />)
            }
        </div>
    )
}

export default Users;