import React from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import {useContext} from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivetRoute = ({children}) => {
     const {user, loading} = useContext(authContext);
     const location = useLocation();
     if(loading){
       
       return <Spinner animation="border" />;
      
      
     }
    console.log(user);
    if(!user){
       return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
  
    return children;

};

export default PrivetRoute;