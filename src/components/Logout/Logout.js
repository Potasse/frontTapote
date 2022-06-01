import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect, useContext } from 'react';


function Logout() {

    let navigate = useNavigate();
    const [echo, setEcho] = useState();
    

    useEffect(()  => {
    
        localStorage.removeItem('myData');
        
    });

    function handlckick(){

        setEcho(localStorage.removeItem('myData'));
        if(localStorage.getItem('myData') == null){
            navigate("/login");
        }
    }
    

  return (
    <div className=''>

        Merci pour la visite  <button onClick={handlckick} className=''>cliquez ici pour se reconnecter</button> 
        

    </div>
  )
}

export default Logout