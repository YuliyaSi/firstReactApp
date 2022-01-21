import React from "react";
import Profile from "./Profile";
import {showUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router";
import {Route, Routes} from "react-router-dom";
import Login from "../Login/Login";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.profileId;
        this.props.showUserProfile(userId);
    }

    render() {

        if(!this.props.isAuth) {
            return (
                <Routes>
                    <Route path={'/'} element={<Login />} />
                </Routes>
            )
        }
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

const ProfileUrlMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileId: state.auth.id,
    isAuth: state.auth.isAuth,
});


export default connect(mapStateToProps, {showUserProfile})(ProfileUrlMatch);