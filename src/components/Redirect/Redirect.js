import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


function Redirect() {

    
    let navigate = useNavigate();


    useEffect(() => {
    
        localStorage.setItem('myData', true);
        navigate("/home");
      });

  return (
    <div className='hidden'>
        bonjour


    </div>
  )
}

export default Redirect