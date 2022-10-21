import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import Register from '../../Context/AuthProvider/Register/Register';
import Category from '../Category/Category';
import Home from '../Home/Home/Home';
import Main from '../Layout/Main';
import Login from '../Login/Login';
import News from '../News/News';
import Terms from '../Terms/Terms';
import PrivetRoute from './PrivetRoute';

export  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
         {
            path:'/',
            element:<Home></Home>,
            loader: () =>{
               return fetch('http://localhost:5000/news')
            }
         },
         {
            path:'/category/:id',
            element:<Category></Category>,
            loader: ({params}) =>{
               return fetch( `http://localhost:5000/category/${params.id}`)
            }
         },
         {
            path:'/news/:id',
            element:<PrivetRoute><News></News></PrivetRoute>,
            loader: ({params}) =>{
               return fetch(`http://localhost:5000/news/${params.id}`)
            },
         
         },   {
            path:'/login',
            element:<Login></Login>
         },
         {
            path:'/register',
            element:<Register></Register>
         },
         {
            path:'/terms',
            element:<Terms></Terms>
         }
        ]
    }

]);

