import React from "react";
import Profile from "./Profile";
import {showUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useMatch} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.profileId;
        this.props.showUserProfile(userId);
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

export default compose(
    connect(mapStateToProps, {showUserProfile}),
    withAuthRedirect,
)(ProfileUrlMatch);