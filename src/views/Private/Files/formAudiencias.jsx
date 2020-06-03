import * as yup from 'yup'
import React from 'react'
import { ErrorMessage, Formik, Form as FormikForm, Field } from 'formik'
import FormField from '../../../../src/shared/Forms/FormField'

const validacion = yup.object().shape({
    nexp: yup.number().required("Este es un campo obligatorio"),
    juzgado: yup.string().required(),
    fecha: yup.date().required(),
    hora: yup.string().required(),
  })

  const FormAud= ({  }) => {
    const initialValues = { año: 0, juzgado: '', contraparte: '', estatus: '', materia: '', agenda:'', nexp:0}
    const onAudExp = (values) => {
      console.log(values)
    }
    return (
        <Formik initialValues={initialValues} onSubmit={onAudExp} validationSchema={validacion}>
          {({ handleSubmit }) => (
            <div className="ContainerInit">
              <form className="f" onSubmit={handleSubmit}> 
                <FormField name="nexp"        type="number" min="0"    max="1000"  />
                <FormField name="juzgado"     type="text"   placeholder="Agregar Juzgado" />
                <FormField name="fecha"       type="date"   min="1950-01-01" max="2050-12-31"  />
                <FormField name="hora"        type="time"  />
                <div className="container">
                  <button className="btn btn1" type="submit">Añadir</button>
                </div>   
            </form>
          </div>
          )}
        </Formik>
        )
      };
      
      export default FormAud;