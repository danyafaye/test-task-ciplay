import React from "react";
import {Field, ErrorMessage} from "formik";
import TextError from "./TextError";
import "./Input.css"

const Input = props => {
    const {label,name,...rest} = props
    return(
        <div className='form__control'>
            <label htmlFor="name">{label}</label>
            <Field id={name} name={name} {...rest} className="control__input"/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Input;