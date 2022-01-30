import React from "react";
// import s from "./Login.module.css"
import { Form, Field } from 'react-final-form'
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = () => {
    return (
        <Form
            onSubmit = {formData => {
        console.log(formData)
            }}
        >
            {({handleSubmit, form, pristine, submitting}) => (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'login'}
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
              <LoginForm onSubmit={onSubmit}/>
          </div>

      </div>
  )
};



export default Login;