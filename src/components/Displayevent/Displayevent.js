import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import  Link  from 'react-dom'
import axios from 'axios';



function Displayevent() {

    //Use Location pour recuperer les données 
    const location = useLocation();
    const ref = location.state.id;

    const [list, setList] = useState([]);

    const [dataevent, setDataevent] = useState({});

    //Option de la date
    var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    
    const [date, setDate] = useState("");
    
    


  useEffect(() => {

    const username = localStorage.getItem('usernameC');

    //Axios pour controler un evenement par son ID
    axios.get(`http://34.163.156.6/getEvenbyId?id=${ ref }`)
    .then(res=>{

      console.log(res.data);
      setDataevent(res.data);
    });


    //Conversion de la date selon l'option
    var recupdate = dataevent.dateevent;
    var d = new Date(recupdate);
    let text = d.toLocaleDateString('fr-fr', options);
    setDate(text);
    //console.log(d)

  }, []);

  

   //Navigation pour le retour en arrière
   const navigate = useNavigate();
   

  const handleReturn = () => {

    //console.log("bonjour");
       navigate(-1)
   }

   const handlegoChat = () => {

    navigate("/chat", { replace: true } );

   }

   const handlegoMap = () => {

    navigate("/carte", { replace: true } );

   }

   const handleOneEvent = () => {

    console.log("Test")
    console.log(ref);
    //console.log(d);

   }
  return (

    <div>

    <div className='relative top-[70px] md:top-[90px]'>

        {/* lien pour le component description : https://tailblocks.cc/ */}
        <div className='mt-1 mb-2 flex '>

            <button onClick={ handleReturn } className=''>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" className="w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                </svg>
            </button>

           <div className='font-bold text-lg text-gray-900 ml-5 inline-flex mt-2' onClick={ handleOneEvent }>Evenement</div>  

        </div>


              <div className="text-gray-600 body-font">
                <div className="container px-5 py-3 mx-auto flex flex-col">
                  <div className="lg:w-4/6 mx-auto">
                    <div className="rounded-lg h-64 overflow-hidden">
                      <img alt="content" className="object-cover object-center h-full w-full" src="https://picsum.photos/id/1005/500/250"/>
                      {/* src="https://dummyimage.com/1200x500"  */}
                    </div>
                    <div className="flex flex-col sm:flex-row mt-3">

                      <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                        {/* <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                        </div> */}

                        <div className="flex justify-between">

                          <div className='w-10 h-10 rounded-full bg-gray-200'>
                          <button onClick={ handlegoMap }>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                               <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          </button>
                          </div>

                          <div className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400'>

                            
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                              <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                           
                          </div>

                          <div className='w-10 h-10 rounded-full bg-gray-200'>

                          {/* <Link to="/displayevent">  */}
                              <button onClick={ handlegoChat }> 
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                              </svg>
                              </button> 
                          {/* </Link>  */}

                          </div>

                        </div>

                        <div className="flex flex-col items-center text-center justify-center">
                          <h2 className="title-font text-gray-900 text-lg"> Publier par <span className='font-bold'> { dataevent.usernameevent}</span></h2>
                          
                          <div className="w-12 h-1 bg-indigo-500 rounded mb-2"></div>
                          <h3 className='font-bold text-indigo-500 mb-2'>Description</h3>

                          <p className="text-base">Raclette <span> { }</span> hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
                          
                        </div>

                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>

              

              <div className="flex justify-between mr-2 ml-2">

                <p >Date:  <strong> { date }</strong></p>
                <p >Heure:  <strong> {dataevent.heureevent}</strong></p>

              </div>

              <div className=''> 

                  <h2 className='flex justify-center'>Adresse </h2> 
                  

              </div>

              <div className='flex justify-center font-bold text-indigo-500 '> 
              
              <strong>{ dataevent.adress1} </strong> <br></br> 
              <strong>{ dataevent.adress2} </strong>
              
              </div>

          {/* Personne presentent */}
          <h1 className='font-bold text-lg text-gray-900 flex justify-center mt-5'>Commentaires</h1>
          <div className="bg-white rounded flex justify-center mb-50"> 
          <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="flex items-center w-full lg:w-1/3 justify-start lg:justify-end">

              <div className="border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                  <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card8.jpg" alt="avatar" />
              </div>

              <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                  <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card9.jpg" alt="avatar" />
              </div>

              <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                  <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card10.jpg" alt="avatar" />
              </div>

              <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                  <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card11.jpg" alt="avatar" />
              </div>

            <div className="-ml-4 border-2 border-white dark:border-gray-700 shadow rounded-full w-10 h-10">
                <img className="w-full h-full overflow-hidden object-cover rounded-full" src="https://dh-ui.s3.amazonaws.com/assets/webapp/layout/grid_cards/grid_card12.jpg" alt="avatar" />
            </div>

          </div>                   
              </div>
          </div>

              
    </div>
    </div>
  )
}

export default Displayevent