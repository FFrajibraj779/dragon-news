import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../AuthProvider';
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import {toast} from 'react-hot-toast';
import {useState} from 'react';


const Register = () => {
  const { createUser, updateUserProfile,veriryEmail } = useContext(authContext)
  const[accept, setAccept] =useState(false);
  const[error, setError] =useState('')
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    if(password !== confirmPassword){
      setError('password not match')
      return;
    }

    createUser(email, password)
      .then(result => {
        setError('')
        handleUpdate(name, photoURL)
        form.reset();
        VerifyEmailAdd();
       toast.success('verify email')

      })
      .catch(error => {
       setError(error.message)
      })
  }
const handleChecked = (e) =>{
  setAccept(e.target.checked);
  console.log(e.target.checked);

}
const handleUpdate = (name, photoURL) =>{
  const profile = {
    displayName: name,
    photoURL:photoURL

  }

  updateUserProfile(profile)
  .then(()=>{})
  .catch(e =>console.log(e)
    )

}
const VerifyEmailAdd = () =>{
  veriryEmail()
  .then( () =>{})
  .catch(error =>console.log(error))
}


  return (
    <div className='shadow mx-auto ' style={{ width: '80%', marginTop: '20px', padding: '20px' }}>
      <h1>Please Register </h1>
      <Form onSubmit={handleRegisterSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name </Form.Label>
          <Form.Control style={{ width: '80%' }} type="name" name='name' placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control style={{ width: '80%' }} type="email"
            name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicphotoURL">
          <Form.Label>Photo </Form.Label>
          <Form.Control style={{ width: '80%' }} type="photoURL" name='photoURL' placeholder="Photo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password </Form.Label>
          <Form.Control style={{ width: '80%' }} type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control style={{ width: '80%' }} type="password"
            name='confirmPassword' placeholder="confirm password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check onClick={handleChecked} type="checkbox" label={<> Accepted<Link to='/terms'> terms & condition</Link> </>} />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accept}>
          Register
        </Button>
        <Form.Text className="text-muted">
           {error}
        </Form.Text>
      </Form>
    </div>
  );
};

export default Register;