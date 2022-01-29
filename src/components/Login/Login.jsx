import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} type={"text"} placeholder={'Login'} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} type={"password"} placeholder={'Password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={"checkbox"} component={'input'}/> remember me
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
      <div>
          <h1>LOGIN</h1>
          <LoginReduxForm onSubmit={onSubmit}/>
      </div>
  )
};



export default Login;