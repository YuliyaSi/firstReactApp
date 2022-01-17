import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.profileId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.setUserProfile(response.data);
            });


    }

    render() {
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
});


export default connect(mapStateToProps, {setUserProfile})(ProfileUrlMatch);