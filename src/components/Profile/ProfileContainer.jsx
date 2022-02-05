import React, {useEffect} from "react";
import Profile from "./Profile";
import {getStatus, showUserProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    let userId = props.userId || props.profileId;

    useEffect(() => {
        props.showUserProfile(userId);
        props.getStatus(userId);
    }, [props.userId])


    return <Profile {...props} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
}

const ProfileUrlMatch = (props) => {
    const { userId } = useParams()
    return <ProfileContainer {...props} userId={userId} />
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