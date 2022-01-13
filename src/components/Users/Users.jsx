import React from "react";
import s from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/168732.png'

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; pagesCount === 40 ? i <= pagesCount : i <= 40 ; i++) {
            pages.push(i)
        }

        return <div className={s.users}>
            <div className={s.pagination}>
                {pages.map(p => <div onClick={() => {this.onPageChanged(p)}} className={this.props.currentPage === p ? s.selectedPage : s.page}>{p}</div>)}
            </div>
            {
                this.props.users.map(u => <div key={u.id} className={s.user}>
                    <div className={s.user_photo}>
                        <div>
                            <img src={u.photos.small || userPhoto} alt={'pic'} className={s.img}/>
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
                            <div>City</div>
                            <div>Country</div>
                        </div>
                    </div>
                </div>)
            }
        </div>

    }
}

export default Users;