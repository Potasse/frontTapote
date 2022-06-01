import React from 'react';
import { Link } from 'react-router-dom';
import taptapp from '../images/taptap.svg'
import tapotelogo from '../images/tapotelogo2.png';
import ThemeContext from '../../Context/ThemeContext';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";



//HEADER https://tailwindui.com/preview#component-10058606cac5398d7fa2c73b64089874

function Header() {

  let navigate = useNavigate();

  const {connect, setConnect} = useContext(ThemeContext);
 
  const [echo, setEcho] = useState();
  const [total, setTotal] = useState();

  //Pour le mapList
  const [lists, setLists] = React.useState();


  useEffect(() => {

    console.log("header");
    handleGetlist();
    //handleList();
    
    console.log(connect)
    setEcho(localStorage.getItem('myData'));

   
  },);


const handleGetlist = () => {

          console.log("bonjour");
          axios.get(`http://34.163.156.6/usersList`)
          .then(res=>{

            
            console.log(Object.keys(res.data).length);
            setTotal(Object.keys(res.data).length); 
            // setLists(res.data)
      })

      .catch(function (error) {
        
          console.log('Error', error.message);
      });

}


const handleList = () => {

  console.log("bonjour");
  axios.get(`http://34.163.156.6/usersList`)
  .then(res=>{

    setLists(res.data);

})

.catch(function (error) {

  console.log('Error', error.message);
});

}

  const handleModale = () => {

    return '<div>bonjour</div>'
  }

  const handleLogout= () => {

    
    axios.post(`http://34.163.156.6/logout`)
      .then(res=>{

      localStorage.removeItem('myData');
      localStorage.removeItem('usernameC');
      setConnect(false); 
      

      //Navigation vers la page Home ("/")
      navigate("/welcome", { replace: false });

      console.log("bonjour");
      console.log(connect);
      console.log(res.status);
      console.log(res.data);
  })

  .catch(function (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      setConnect(false);
      console.log(connect);

      console.log(error.response.data);
      console.log(error.response.status);
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
  

  return (

    // {connect ? ( element ) : ( element )}
    <div>

    <div className= {  ` lg:w-full z-10 top-0 fixed ${ echo ? "visible" : "hidden"}` }>

        <nav className=" bg-gradient-to-r from-sky-500 to-indigo-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded  ">
          
        <div className="flex justify-between">
          

          <div className="container flex flex-wrap justify-start mx-auto">

          <a href="#" className="flex"> 

            <div className="" >
                <img width="96" height="65" src={ taptapp } />
            </div>

              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">TapoteApp</span>
          </a>
          </div>

              <div className="hidden md:flex items-center justify-end space-x-1 w-full">
                    
                      <div className="py-5 px-3 text-black hover:text-white ">
                      
                      <Link to="/"> 
                      Acceuil</Link>
                      </div>

                      <div className="py-5 px-3 text-black hover:text-white ">
                      <Link to="/"> Profil</Link>
                      </div>
                    
                      <div className="py-2 px-3 text-black hover:text-white "> 
                      <Link to="/logout"> Logout</Link>
                      </div>
                    
              </div>


          <div className="flex items-center md:order-2">


          {/* //data-modal-toggle="walletModal est la propriété qui active la modale */}

          <button data-bs-toggle="modal" data-bs-target="#exampleModal" type="button"  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">

            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span className="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded ml-2">{ total }</span>

          </button>
          {/* <Button
                color="lightBlue"
                type="button"
                // onClick={(e) => setShowModalCode(true)}
                ripple="light"
            ></Button> */}


              <Link to="/profile">
              <button type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                <div className='text-black'>
                <span className='font-bold'>Profil</span>
                </div>
              </button>
              </Link>

              {/* <Link to="/logout">  */}
              <button onClick={ handleLogout }  type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" /></svg>               <div className='text-black'>
                <span className='font-bold'> Logout </span>
               </div>
              </button>
              {/* </Link> */}

          </div>
          
        </div>

        </nav>


</div>

<div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog relative w-auto pointer-events-none">
    <div
      className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Notification</h5>
        <button type="button"
          className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
          data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
           
            <div className="modal-body relative p-2">
            Notification 2
            </div>
            <div className="modal-body relative p-2">
            Notification 3
            </div>
      <div
        className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        
      </div>
    </div>
  </div>
</div>
</div>
    
  )
}

export default Header