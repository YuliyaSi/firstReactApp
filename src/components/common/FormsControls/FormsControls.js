import React from "react";
import styles from "./FormsControls.module.css"

export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div className={styles.formControl + ' ' + ( hasError ? styles.error : '' )}>
                {props.children}
            </div>
            {hasError && (
                <div>
                    <span className={styles.span}>{meta.error}</span>
                </div>
            )}
        </div>
    )
};

export const TextArea = (props) => {
    const {input, meta, ...restProps} = props;
   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
