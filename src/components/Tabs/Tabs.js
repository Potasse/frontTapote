import React from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../../Context/ThemeContext';
import { useState, useEffect, useContext } from 'react';


function Tabs() {

    const {connect, setConnect} = useContext(ThemeContext);

    const [echo, setEcho] = useState(Boolean);
   
    
    useEffect(() => {

        console.log("TABS");
       
        //setEcho(localStorage.getItem('myData'));
        var push = localStorage.getItem('myData');
        setEcho(push);
        console.log("it is push " + push);
       
      });

  return (
      
    <div className= { `fixed bottom-0 w-full ${ echo ? "visible" : "hidden"}`} >

    <div className='flex justify-center bg-gradient-to-r from-sky-500 to-indigo-500 h-20 w-full rounded-lg'>
        {/* bg-gradient-to-r from-purple-500 to-pink-500 */}
        <div className='space-x-10 shadow-orange-300 mr-5 ml-5 mt-5'> 

                <Link to="/home"> 
                <button className=' h-10 w-10' > 
                    <div className='flex justify-center'>
                   

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>

                    </div>
                    
                    
                </button>
                </Link>  

                <Link to="/addevent">  
                <button className=' h-10 w-10'> 
                    <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                    
                </button>
                </Link>

                <Link to="/carte"> 
                <button className=' h-10 w-10 ' > 
                    <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    
                </button>
                </Link>

                <Link to="/chat"> 
                <button className=' h-10 w-10' > 
                    <div className='flex justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    </div>
                    
                    
                </button>
                </Link>  

                                
        </div>
        </div>
    </div>
  )
}

export default Tabs