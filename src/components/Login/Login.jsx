import React from "react";
// import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       type={"email"}
                       placeholder={'Email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={'password'}
                       type={"password"}
                       placeholder={'Password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={"checkbox"}
                       component={Input}
                       validate={[required]}
                />
                <span>remember me</span>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
  return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex', justifyContent: 'center'}}>
              <h1>LOGIN</h1>
          </div>
          <div>
              <LoginReduxForm onSubmit={onSubmit}/>
          </div>

      </div>
  )
};



export default Login;