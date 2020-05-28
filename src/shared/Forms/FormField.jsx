import React from 'react'
import { ErrorMessage, Field } from 'formik'

const FormField = ({ name, placeholder, type }) => (
  <>
    <label htmlFor={name}>Email</label>
    <div>
      <Field className="inputsLine" name={name} type={type} placeholder={placeholder} />
      <ErrorMessage className="Form-Error" component="span" name={name}/> 
    </div>
  </>
)

export default FormField
