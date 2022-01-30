import React from "react";
import styles from "./FormsControls.module.css"

export const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
            <div className={styles.formControl + ' ' + ( hasError ? styles.error : '' )}>
                <children.type {...input} {...props}/>
                <p> {hasError && <span className={styles.span}>{meta.error}</span>} </p>
            </div>
    )
};

export const TextArea = (props) => {
   return <FormControl {...props}><textarea/></FormControl>
}

export const Input = (props) => {
    return <FormControl {...props}><input/></FormControl>
}
