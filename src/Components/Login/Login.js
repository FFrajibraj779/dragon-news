import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';




const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { emailLogin } = useContext(authContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    emailLogin(email, password)
      .then(result => {
        const user = result.user;

        form.reset()
        navigate(from, {replace:true})
      })
      .catch(e => {

        setError(e.message)
      })

  }


  return (
    <div className='shadow mx-auto ' style={{ width: '80%', marginTop: '20px', padding: '20px' }}>
      <h1>Please Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control style={{ width: '80%' }} type="email" name='email' placeholder="Enter email" required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control style={{ width: '80%' }} type="password" placeholder="Password" name='password' required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        {error}
      </Form>
    </div>
  )
};

export default Login;