import React from "react";
import {useActions} from "../../hooks/useActions";
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import FormikControl from "../FormikControl/FormikControl";

const Registration = () => {
    const {addUser} = useActions();
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: ''
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string()
            .min(4, 'Password is too short (4 chars minimum)')
            .max(10, 'Password is too long (10 chars maximum)')
            .matches(/[A-Z]/, 'There must be a capital letter')
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ''], 'Passwords must match')
            .min(4, 'Password is too short (4 chars minimum)')
            .max(10, 'Password is too long (10 chars maximum)')
            .matches(/[A-Z]/, 'There must be a capital letter')
            .required('Required'),
    });
    const handleSubmit = values => {
        addUser(values.email, values.password)
    }
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {
                formik => {
                    return <Form className="app__form">
                        <FormikControl
                            control="input"
                            type="email"
                            label="Email"
                            name="email"/>
                        <FormikControl
                            control="input"
                            type="password"
                            label="Password"
                            name="password"/>
                        <FormikControl
                            control="input"
                            type="password"
                            label="Confirm password"
                            name="confirmPassword"/>
                        <button type='submit' disabled={!formik.isValid}>
                            Submit
                        </button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default Registration;