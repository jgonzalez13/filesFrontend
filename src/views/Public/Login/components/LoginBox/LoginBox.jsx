import * as yup from 'yup'
import React from 'react'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import './LoginBox.css';
import LoginGoogle from '../LoginGoogle/LoginGoogle';
import FormField from '../../../../../shared/Forms/FormField'
import avatar from './IMG/IMG2.png'

const validations = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
})

const LoginBox= ({  }) => {
  const initialValues = { email: '', password: ''}

  const onLoggin = (values) => {
    console.log(values)
  } 

  return (
  <Formik initialValues={initialValues} onSubmit={onLoggin} validationSchema={validations}>
    {({ handleSubmit }) => (
      <form className="login-box" onSubmit={handleSubmit}>
        <img className="avatarP" src={avatar} alt="avatarP"></img>
        <h1>Login Here</h1>
        {/* <LoginGoogle/> */}
        <h2 className="separator"><span>ó</span></h2>
          <FormField name="email" type="text" placeholder="Enter Email" />
          
          <FormField name="password" type="password" placeholder="Enter Password" />

        <button className="buttonP" type="submit">Log In</button>   
      </form>
    )}
  </Formik>
  )
};

export default LoginBox;
