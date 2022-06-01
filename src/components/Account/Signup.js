import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import ThemeContext from '../../Context/ThemeContext';
import axios from 'axios';
import {useContext} from "react";
import { useNavigate } from "react-router-dom";

function Signup() {


  //Declation de la navigation 
  let navigate = useNavigate();

  //VARIABLE EN STATE POUR LES INPUTS
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [nomcomplet, setNomcomplet]=  useState("");
  const [object, setobject] = useState("");
  
  ///state login Verify is connect
  const {connect, setConnect} = useContext(ThemeContext);
  
  const handleSubmit = () => {

    console.log("bonjour");

    axios.post(`http://34.163.156.6/signup`, { 'username': username, 'password': password, 'email': email, 'nomcomplet':nomcomplet})
      .then(res =>{
        
        //Navigation vers la page Home ("/")
        setConnect(true) ;
        localStorage.setItem('myData', connect);
        localStorage.setItem('usernameC', username);

        //console.log(res.data);

       
      navigate("/home", { replace: true });
        
       
        
        console.log(connect);
        console.log(res);
        console.log(res.data);

        setobject(res.data);
       

       

        

      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setConnect(false);
          console.log(connect);
    
          console.log(error.response.data);
          console.log(error.response.status);
          
          alert("Please enter a other email and password.");

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
    
    window.location.href = "http://34.163.156.6/auth/google";
   
  }
      

  return (
    <div>

 
 

<form>
            <div className="bg-white px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            {/* <img className="h-14 mb-4 mx-auto" alt="logo"/> */}

            
            <div className="space-y-4">
                <h1 className="text-center text-2xl font-semibold text-gray-600">TAPOTE APP</h1>

                {/* <div>bonjour</div> */}
                
                <div>
                <label  className="block mb-1 text-gray-600 font-semibold">Nom et Prenom</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"  onChange={ (event) =>  setNomcomplet(event.target.value)} />
                </div>

                <div>
                <label  className="block mb-1 text-gray-600 font-semibold">Username</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"  onChange={ (event) =>  setUsername(event.target.value)} />
                </div>

                <div>
                <label  className="block mb-1 text-gray-600 font-semibold" >Email</label>
                <input type="email" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full"  onChange={ (event) =>  setEmail(event.target.value)}  />
                </div>

                <div>
                <label className="block mb-1 text-gray-600 font-semibold" >Password</label>
                <input type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" onChange={ (event) =>  setPassword(event.target.value)} />
                </div>
                
                {/* <div>
                <label htmlFor="number" className="block mb-1 text-gray-600 font-semibold" onChange={ (event) =>  setNumber(event.target.value)} >Number</label>
                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                </div> */}
            </div>

            <button type='button' onClick={ handleSubmit } className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Register</button>
            
            <div className='mt-6 flex justify-center'>
            <button type="button" className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
            Signup with
            </button>
          
          
            <button type="button" onClick={ handleSubmitGoogle } className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
            Signup with
            </button>
          </div>

            <Link to="/login">
            <button className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">Login</button>
            </Link>

            </div>
     </form>


    </div>
  )
}


export default Signup