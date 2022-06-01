import React from 'react'

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ThemeContext from '../../Context/ThemeContext';

import axios from 'axios';
import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import visibilityeye  from '../images/visibility.png'


function Login() {

  let navigate = useNavigate();
  
  //VARIABLE EN STATE POUR LES INPUTS
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  ///state login Verify is connect
  const {connect, setConnect} = useContext(ThemeContext);
  
  // METHODE POUR LE LOGIN
  const handleSubmit = () => {

      

      console.log(password);
      console.log(username);

      //AXIOS POUR LA COMMUNICATION AVEC LAPI
      axios.post(`http://34.163.156.6/login`, { 'username': username, 'password': password})
      .then(res=>{

      setConnect(true); 
      localStorage.setItem('myData', connect);
      localStorage.setItem('usernameC', username);
      ///console.log(res.data);

      //Navigation vers la page Home ("/")
      navigate("/home", { replace: true });

      console.log("bonjour");
      console.log(connect);
      console.log(res.status);
      ///console.log(res.data);
  })

    .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      setConnect(false);
      console.log(connect);

      console.log(error.response.data);
      console.log(error.response.status);
      alert("Please verify password or username");

    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  });
      
  }

  const handleSubmitGoogle = () => {

    console.log("bonjour");
    //localStorage.setItem('myData', connect);
    window.location.href = "http://34.163.156.6/auth/google";
   
  }

        

       
  // const passwordToggle = document.querySelector('.js-password-toggle')

  // passwordToggle.addEventListener('change', function() {
  //   const password = document.querySelector('.js-password'),
  //     passwordLabel = document.querySelector('.js-password-label')
  
  //   if (password.type === 'password') {
  //     password.type = 'text'
  //     passwordLabel.innerHTML = 'hide'
  //   } else {
  //     password.type = 'password'
  //     passwordLabel.innerHTML = 'show'
  //   }
  
  //   password.focus()
  // })
    


  return (


    <div> 
        <form>
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            {/* <img className="h-14 mb-4 mx-auto" alt="logo"/> */}

            <div className="space-y-4">
                <h1 className="text-center text-2xl font-semibold text-gray-600">TAPOTE APP</h1>
                
                <div>
                <label className="block mb-1 text-gray-600 font-semibold">Username</label>


                <input onChange={ (event) =>  setUsername(event.target.value)}  type="text"  className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />

                       

            </div>
            <div  >
                <label className="block mb-1 text-gray-600 font-semibold">Password</label>

                {/* <div className='flex inline-flex'> */}
                <input onChange={ (event) =>  setPassword(event.target.value)}  type="password"   className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                {/* <span>  <img width="30" height="30" src= { visibilityeye } /></span> */}
                {/* </div> */}

            </div>
            </div>

            <button  type="button" className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide" onClick={handleSubmit } >Se connecter</button>

            {/* PART LOGIN GOOGLE AND OTHER */}

        <div className='mt-6 flex justify-center'>
        <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
        Login with
        </button>
       
       
        <button type="button" onClick={ handleSubmitGoogle } className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
        <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
        Login with
        </button>
        </div>

             <Link to="/signupp">
            <button className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Inscription</button>
            </Link>


            </div>
            
     </form>
    
     
     {/* Link for a second formulaire login:  https://wickedblocks.dev/forms.html */}

     
    </div>

  )
}

export default Login

