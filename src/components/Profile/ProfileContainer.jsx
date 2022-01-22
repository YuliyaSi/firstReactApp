import React from "react";
import Profile from "./Profile";
import {getStatus, showUserProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.profileId;
        this.props.showUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    }
}

const ProfileUrlMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileContainer {...props} match={match}/>
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    profileId: state.auth.id,
    status: state.profilePage.status,
});

export default compose(
    connect(mapStateToProps, {showUserProfile, getStatus, updateStatus}),
    withAuthRedirect,
)(ProfileUrlMatch);