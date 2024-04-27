import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import {Container} from 'react-bootstrap';
import { useState } from 'react';

const SignUp = () => {
  
    const { Formik } = formik;
    const schema = yup.object().shape({
      fullName: yup.string().required("please enter fullname").min(5," FullName should have minimum 5 characters"),
      email: yup.string().required().email(),
      password: yup.string().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Password should contain minimum 8 chaeacters abd small letter and a capital letter"),
      confirmPassword: yup.string().required().oneOf([yup.ref('password'),null],"must match with password"),  
    });
    
    const [message, setMessage] = useState('');

  const handleSubmit = (values) => {
    // Submit the form data

    // Set the success message
    setMessage('Your form has been submitted successfully!');
  };
  
  return (
    <Container>
        <Row>
            <Col className='text-center my-3'>
            <h2>
                Sign Up
            </h2>
            </Col>
        </Row>
         
<Row className='justify-content-center'>
            <Col md={4} className='mb-4 shadow p-4' >
            <Formik
      validationSchema={schema}
      onSubmit={handleSubmit}
      initialValues={{ 
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
       
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
             controlId="validationFormik01"
             className='position-relative'>
              <Form.Label>Fullname</Form.Label>
              <Form.Control
                type="text"
                name="fullName"
                value={values.fullName}
                onChange={handleChange}
                isInValid={!!errors.fullName}
              />

              <Form.Control.Feedback type='invalid' tooltip>
                {errors.fullName}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group 
            controlId="validationFormik02"
            className='position-relative'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type='invalid' tooltip>
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group 
             controlId="validationFormikUsername"
             className='position-relative'>
              <Form.Label>Password</Form.Label>
             
                <Form.Control
                  type="text"
                  placeholder="Password"
                  
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
              
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group controlId="validationFormik03"
            className='position-relative'>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Confirm password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                isInvalid={!!errors.confirmPassword}
              />

              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
         </Row>
         <Button type="submit">Sign Up</Button>
                { message && <p className='text-success'>{message}</p>}
        </Form>
      )}
    </Formik>
         </Col>
        </Row> 
    </Container>
  )
}

export default SignUp;