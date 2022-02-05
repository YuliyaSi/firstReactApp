import React from "react";
import styles from "./FormsControls.module.css"
import {Field} from "react-final-form";

export const FormControl = ({input, meta: {touched, error}, children, ...props}) => {
    const hasError = touched && error;
    return (
            <div className={styles.formControl + ' ' + ( hasError ? styles.error : '' )}>
                <children.type {...input} {...props}/>
                <p> {hasError && <span className={styles.span}>{error}</span>} </p>
            </div>
    )
};

export const TextArea = (props) => {
   return <FormControl {...props}><textarea/></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props}><input/></FormControl>
}

export const fieldCreator = (name, type, placeholder, component, validate) => (
    <Field name={name}
           type={type}
           placeholder={placeholder}
           component={component}
           validate={validate}
    />
)
