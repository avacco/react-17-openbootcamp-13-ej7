import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Redirect } from 'react-router-dom';


const loginSchema = Yup.object().shape(
  {
    email: Yup.string().email('Formato inválido').required('Es necesario una dirección de correo'),
    password: Yup.string().required('Requiere una contraseña')
  }
);

const LoginForm = ({logged, onLogin, fetching}) => {
  
  const initialCredentials = {
    email: '',
    password: ''
  }
  
  return (
    <Formik
        initialValues={ initialCredentials }
        validationSchema={ loginSchema }
        onSubmit={ async (values) => {
         onLogin(values.email, values.password)
        }}
      >
  
        {({           
          values, 
          touched,
          errors, 
          isSubmitting, 
          handleChange,
          handleBlur 
         }) => (

          <Form>
            <label htmlFor='email'>Correo</label>
            <Field id='email' name='email' placeholder='jane@acme.com' type='email' />
    
            {/* Error de correo */}
            {
              errors.email && touched.email && 
              (
                <ErrorMessage name='email' component='div'/>
              )
            }

            <label htmlFor='password'>Contraseña</label>
            <Field id='password' type='password' name='password' placeholder='Contraseña' />
    
            {/* Error de password */}
            {
              errors.password && touched.password && 
              (
                <div>
                  <ErrorMessage name='password'/>
                </div>
              )
            }

            <button type='submit'>Enviar</button>
            { fetching ? (<p>Cargando...</p>) : null }
            {isSubmitting ? (<p>Ingresando tus credenciales...</p>) : null}
              
          </Form>
          
        )}

        

      </Formik>
  );
};


LoginForm.propTypes = {
  logged: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
};


export default LoginForm;
