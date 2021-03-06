import React from "react";
import {connect} from "react-redux";
import {setCurrentPage, toggleFollowingProgress,
    getUsers, follow, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/user-selectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        let {getUsers, currentPage, pageSize} = this.props;
        getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize, getUsers} = this.props
        getUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Preloader /> : <Users totalUsersCount={this.props.totalUsersCount}
                                                             pageSize={this.props.pageSize}
                                                             currentPage={this.props.currentPage}
                                                             users={this.props.users}
                                                             unfollow={this.props.unfollow}
                                                             follow={this.props.follow}
                                                             onPageChanged={this.onPageChanged}
                                                             toggleFollowingProgress={this.props.toggleFollowingProgress}
                                                             followingInProgress={this.props.followingInProgress}
            /> }
        </>
    }
}

// let mapStateToProps = (state) => ({
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     });

let mapStateToProps = (state) => ({
    users: getAllUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
});

export default compose(
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
)(UsersContainer)