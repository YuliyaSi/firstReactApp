import {Route, Routes} from "react-router-dom";
import React from "react";
import Login from "../components/Login/Login";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return (
                    <Routes>
                        <Route path={'/'} element={<Login />} />
                    </Routes>
                )
            }
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToPropsForRedirect)(RedirectComponent);
};