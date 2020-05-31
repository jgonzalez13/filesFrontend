      
import * as yup from 'yup'
import React from 'react'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import FormField from '../../../../src/shared/Forms/FormField'
import './FormFiles/formexpedientes.css';

const validations = yup.object().shape({
  nexp: yup.number().required(),
  año: yup.number().required(),
  juzgado: yup.string().required(),
  contraparte: yup.string().required(),
  estatus: yup.string().required(),
  materia: yup.string().required(),
  agenda: yup.string().required(),
})

const FormExpedientes= ({  }) => {
  const initialValues = { año: 0, juzgado: '', contraparte: '', estatus: '', materia: '', agenda:'', nexp:0}
  const onFExpedient = (values) => {
    console.log(values)
  } 

  return (
  <Formik initialValues={initialValues} onSubmit={onFExpedient} validationSchema={validations}>
    {({ handleSubmit }) => (
      <div className="ContainerInit">
        <form className="f" onSubmit={handleSubmit}> 
          <FormField name="nexp"        type="number" min="0"    max="1000"  />
          <FormField name="año"         type="number" min="1850" max="2099"  />
          <FormField name="juzgado"     type="text"   placeholder="Agregar Juzgado" />
          <FormField name="contraparte" type="text"   placeholder="Agregar Contraparte " />
          <FormField name="estatus"     type="text"   placeholder="Agregar Estatus " />
          <FormField name="materia"     type="text"   placeholder="Agregar Materia " />
          <FormField name="agenda"      type="text"   placeholder="Agregar Agenda" />
          <div className="container">
            <button className="btn btn1" type="submit">ADD PROCEEDINGS</button>
          </div>   
      </form>
    </div>
    )}
  </Formik>
  )
};

export default FormExpedientes;
