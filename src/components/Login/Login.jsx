import React, {useEffect} from "react";
// import s from "./Login.module.css"
import { Form, Field } from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginUser, logoutUser} from "../../redux/auth-reducer";
import {useNavigate} from "react-router";


const LoginForm = (props) => {
    return (
        <Form
            onSubmit ={props.onSubmit}
        >
            {({handleSubmit, form, pristine, submitting}) => (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'email'}
                       type={"email"}
                       placeholder={'Email'}
                       component={Input}
                       validate={required}
                />
            </div>
            <div>
                <Field name={'password'}
                       type={"password"}
                       placeholder={'Password'}
                       component={Input}
                       validate={required}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={"checkbox"}
                       component={Input}
                       validate={required}
                />
                <span>remember me</span>
            </div>
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
    const onSubmit = ({email, password, rememberMe}) => {
        props.loginUser(email, password, rememberMe);
    };

    let navigate = useNavigate();
    useEffect(() => {
        if (props.isAuth){
            return navigate("/profile");
        }
    },[props.isAuth, navigate]);

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <h1>LOGIN</h1>
                </div>
                <div>
                    <LoginForm onSubmit={onSubmit}/>
                </div>

            </div>
        )
};

const mapDispatchToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapDispatchToProps, {loginUser, logoutUser})(Login);