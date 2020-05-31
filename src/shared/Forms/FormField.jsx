import React from 'react'
import { ErrorMessage, Field } from 'formik'

const FormField = ({ name, placeholder, type, min, max}) => (
  <>
    <label htmlFor={name}>{name}</label>
    <div>
      <Field className="inputsLine" name={name} type={type} placeholder={placeholder} min={min} max={max} />
      <ErrorMessage className="Form-Error" component="span" name={name}/> 
    </div>
  </>
)

export default FormField
