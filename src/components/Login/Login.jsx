import React, {useEffect} from "react";
import s from "./Login.module.css"
import { Form } from 'react-final-form'
import {fieldCreator, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser, logoutUser} from "../../redux/auth-reducer";
import {useNavigate} from "react-router";


const LoginForm = ({onSubmit, error}) => {
    return (
        <Form
            onSubmit ={onSubmit}
            name={'form'}
        >
            {({handleSubmit, form, pristine, submitting}) => (
        <form onSubmit={handleSubmit} >
            <div>
                {fieldCreator("email", "email", "Email", Input, required)}
            </div>
            <div>
                {fieldCreator("password", "password", "Password", Input, required)}
            </div>
            <div className={s.checkBox}>
                {fieldCreator("rememberMe", "checkbox", null, Input, null)}
                <label>Remember me</label>
            </div>
            {error && <div className={s.error}>{error}</div>}
            <div>
                <button disabled={submitting}>Login</button>
                <button onClick={form.reset} disabled={pristine || submitting}>Clear Values</button>
            </div>
        </form>
            )}
        </Form>
    )
};

const Login = (props) => {
    let navigate = useNavigate();
    const onSubmit = ({email, password, rememberMe}) => {
        props.loginUser(email, password, rememberMe);
    };

    useEffect(() => {
        if (props.isAuth) navigate('/profile');
    },[props.isAuth, navigate]);

        return (
            <div className={s.form_block}>
                <div className={s.description}>
                    <h2>Log into your account</h2>
                    <h3>Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.</h3>
                </div>
                <div className={s.form}>
                    <LoginForm onSubmit={onSubmit} error={props.error}/>
                </div>

            </div>
        )
};

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error
})

export default connect(mapDispatchToProps, {loginUser, logoutUser})(Login);