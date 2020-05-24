import * as yup from 'yup'
import PropTypes from 'prop-types'
import React from 'react'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import './LoginBox.css';
import LoginGoogle from '../LoginGoogle/LoginGoogle';
import avatar from './IMG/IMG2.png'

const validations = yup.object().shape({
  user: yup.string().email().required(),
  password: yup.string().min(8).required()
})

const LoginBox= ({ handleSubmit, initialValues }) => (
  <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
    <FormikForm className="login-box">
      <img className="avatarP" src={avatar} alt="avatarP"></img>
      <h1>Login Here</h1>
      <LoginGoogle/>
      <h2 className="separator"><span>ó</span></h2>
      <label for="email">Email</label>
      <div>
        <Field className="inputsLine" name="user" placeholder="Enter Email" type="text" />
        <ErrorMessage className="Form-Error" component="span" name="user"/>
      </div>
      <label for="email">Password</label>
      <div>
        <Field className="inputsLine" name="password" placeholder="Enter Password" type="password" />
        <ErrorMessage className="Form-Error" component="span" name="password"/>
      </div>
      <input className="buttonP" type="submit" value="Log In"></input>   
    </FormikForm>
  </Formik>
);

LoginBox.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
}

export default LoginBox;