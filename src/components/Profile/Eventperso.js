import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Delimg from '../images/delete.png';
import Editimg from '../images/edit.png';

 import { useNavigate } from "react-router-dom";


function Eventperso() {


    const [username, setUsername]= useState("");
     //Navigation pour le retour en arrière
    const navigate = useNavigate();
    
    const [lists, setLists] = useState([]);

    const [ref, setRef] = useState("");

    const GeteventbyUser = () => {

        //console.log(username);
        //()=> handleDisplayId(list._id)
        axios.get(`http://34.163.156.6/EventUserFindAll?usernameevent=${ username }`)
        .then(res=>{
            
          
        setLists(res.data);
        setRef()
        console.log(res.data);
        
         
        console.log(lists);
    
        })
        
        .catch(function (error) {
        
            console.log('Error', error.message);
        })
      
      };
      
    useEffect(() => {
        
       
       var dollar = "";
       dollar = localStorage.getItem('usernameC');
       
       GeteventbyUser();
        console.log("hello");
       setUsername(dollar);
        
    
    }, []);
    
      

      const DeleteMyevent = (id) => { 

          console.log("supprimer");
          axios.delete(`http://34.163.156.6/deleteOne?id=${ id }`)

            .then(res=>{
                
            
           alert("Votre evenement a ete supprimé");
           console.log(res.data);
        
        })
            
            .catch(function (error) {
            
                console.log('Error', error.message);
            })
      }

      const HandleBack = () => {

        console.log("handleback");
        navigate(-1)

      }

      

  return (

    <div className='relative top-[70px] md:mt-10'>


        
        <div className='mt-1 mb-2 flex justify-start'>

            <button className='ml-3' onClick={ HandleBack }>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" className="w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                </svg>
            </button>

           <div className='font-bold text-lg text-gray-900 ml-5 inline-flex mt-2 '>
           
                <div onClick={ GeteventbyUser }>Mes evenements Personnels</div>
           
           </div>  
        </div>

        <div id='tablepersoevent' className='flex justify-center'>

        <div className="table p-2">
        

        <table className="w-full border">
            <thead>
                <tr className="bg-gray-50 border-b">

                    {/* <th class="border-r p-2">
                        <input type="checkbox"/>
                    </th> */}

                    <th className="p-1 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            ID
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>

                    <th className="p-3 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Date
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                   
                    <th className="p-3 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Type Evenement
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                   
                    <th className="p-3 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div className="flex items-center justify-center">
                            Action
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                            </svg>
                        </div>
                    </th>
                </tr>
            </thead>

            
            <tbody>
            {(lists).map((list,index) => (

                <tr className="bg-gray-100 text-center border-b text-sm text-gray-600" key={index} >
                    
                    {/* <td class="p-2 border-r">
                        <input type="checkbox" />
                    </td> */}
                    
                    <td className="border-r"> { index + 1 }</td>
                    <td className="p-2 border-r"> { list.dateevent}</td>
                    <td className="p-2 border-r"> { list.typeevent } </td>
                    <td className='p-5'>

                    
                        <button className=''>
                        <span className="text-gray-400 mr-1 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-1 py-1 border-r-2 border-gray-200">
                        <img className='ml-3 inline-flex' src={Editimg} alt="plus" height={ 20 } width={20}/>
                      </span>
                        {/* <a href="#" className="bg-green-500 p-2 text-white hover:shadow-lg text-xs font-thin">modifier</a> */}
                        </button>

                            <br></br>
                            <br></br>

                        <button className='' onClick={ ()=> DeleteMyevent (list._id) }>
                        <span className="text-gray-400 mr-1 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-1 py-1 border-r-2 border-gray-200">
                        <img className='ml-3 inline-flex' src={Delimg} alt="plus" height={ 20 } width={20}/>
                      </span>
                        {/* <a href="#" className="bg-red-500 p-2 text-white hover:shadow-lg text-xs font-thin">Supprimer</a> */}
                        </button> 
                        
                    </td>

                    

                </tr>
           
           )) }
            </tbody>

        </table>
        
    </div>

        </div>


    </div>
  )
}

export default Eventperso