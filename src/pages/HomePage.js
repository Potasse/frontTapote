import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Plus  from '../components/images/plus.png'; 
import Like from '../components/images/like.png';
import Comment from '../components/images/comment.png';
import TrieBy from '../components/images/triepar.png';
import ThemeContext from '../Context/ThemeContext';
import axios from 'axios';
import  Link  from 'react-dom'


function HomePage() {

  
  const {connect, setConnect} = useContext(ThemeContext);
  const [lists, setLists] = React.useState();


  const navigate = useNavigate();
  
  const getListevent = (event) => {

    console.log(event.target.value);

    axios.get(`http://34.163.156.6/getevenlist?event=${ event.target.value }`)
    
    .then( (res) =>{

      //console.log(res.data);
      setLists(res.data)
      

      console.log(res.data);

      const dollar = res.data;
      for (var i = 0, l = dollar.length; i < l; i++) {
        
        var obj = dollar[i];

      }
    })

    .catch(function (error) {
        
          console.log('Error', error.message);
    })

   
     

  };

  
  useEffect(() => {
    console.log("test");

    

    console.log(connect)
    //NOM USER , COMMENT FAIRE SORTIR DEPUIS LA BASE
    console.log(localStorage.getItem('usernameC'));
    
    
    //Retourne ALL EVENT
    getListevent({ target: { value: 0 }});
    
   
    
  }, []);

  //Methode Recent
  const hanlderRecent = () => {

    console.log("recent");
    axios.get(`http://34.163.156.6/GetRecentEvent`)
    
    .then( (res) =>{

      console.log(res.data);
      
    })

    .catch(function (error) {
        
          console.log('Error', error.message);
    })


  }
  const [valueState,setValueState] = useState("")


//   const handler = (event) => {

//     var value =

// console.log("test test");
//       //Trie par date event
//       var result = "";
//       var dateA1;  
//       var dateB1;

//       //Conversion de la date selon l'option
//       //Option de la date
//       var options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };

//       let reverse = lists.sort(function (a, b) {

//         var dateA = new Date(a.dateevent), dateB = new Date(b.dateevent);

//         let textA = dateA.toLocaleDateString('fr-fr', options);
//         let textB = dateB.toLocaleDateString('fr-fr', options);

//         dateA1 = textA;
//         dateB1 = textB;

//         result = dateA - dateB
//         return result;


//       });

//       //console.log(lists.reverse());
//       const dollar = reverse.reverse();
//       console.log(dollar);
//       setLists(dollar)
//       // console.log(result);
//       // console.log(dateA1);
//       // console.log(dateB1);
      
        
    

//   } 



  

function handleposition() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {

  var Latitude = position.coords.latitude ;
  var Longitude = position.coords.longitude;


  console.log("it is the Latitude :  " + Latitude);
  console.log("it is the Longitude : " + Longitude);
  
}

  

  const handleinfocompany = () => {

    console.log("informationPlus sur Tapote");

  }

  //Prend id d'un display dans un FetchAll
  const handleDisplayId = (id) => {

    console.log(id);
    
    navigate("/displayevent", { state:{ id: id }} );
    
    
  }


  return (

    // {evenData.map((event) =>{ })}

    <div className='relative top-[70px] md:top-[90px]'>

        <div className='mt-1 mb-2'>
           <div className='font-bold text-xl ml-2'>Accueil</div>  
        </div>

        <div className="flex">

            
              <div className="flex-1">
                
              <div className='font-bold text-sm text-teal-600'>
                
                <button className='text-teal-600' onClick={ handleposition }>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                </button>

                <button>

                <b>Casablanca</b>
                <div className='text-xs'>A moins de 30 km </div>
                </button>
      
              </div>
              
              </div>
              {/* <div className="flex-1">02</div> */}
           
            {/* une division flex laisser pour modifier en cas  */}
           <div className="flex-1"></div>

           <div className="flex-1">
              <button onClick={ handleposition } type="button" className="ml-10 text-sm text-teal-600 font-bold py-1 px-3 focus:outline-none bg-gray-100 rounded-lg border"> 
              Position 
              </button>
            </div>



          
        </div>
        
        <div className="mt-2">
          <div className="flex border-1 ml-2 rounded-lg justify-center">
            <button className="flex items-center justify-center px-4 border-solid border-2 border-teal-600">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="currentColor"
                xmlns="http:www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path>
              </svg>
            </button>
            <input
              type="text"
              className="px-4 py-2 w-80 text-sm"
              placeholder="Recherche un type d'evenement"
            />
          </div>
        </div>

        <div>
        <div className='mt-5 font-bold mb-5 flex justify-center'> 
        
        <div className='mr-5 mt-3'>Participer avant la fin</div>

        <div> 
          
          <img className='inline-flex mr-2 mt-2' src={ TrieBy } alt="plus" height={ 30 } width={30} ></img>
        
        </div>
        
        <select  onChange={ getListevent } className="mr-3 mb-3 md:mb-0 text-white bg-[#d3650a] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" aria-label="Default select example">
            
          <option value="0" >Tous</option>
          <option value="1" >Recent</option>
          <option value="2">A côté</option>
          <option value="3">Populaire</option>

        </select>

      </div>
        <div className="inline-grid grid-cols-2 gap-1 md:flex justify-center">

          {(lists || []).map((list) => (

           
            
          <div className="text-gray-600 body-font w-54 " key={list._id} onClick={ ()=> handleDisplayId(list._id) }>
            <div className="flex flex-wrap">
              <div className="p-1">
                <div className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img className=" w-full object-cover object-center" src="https://picsum.photos/id/1005/500/250" alt="blog"/>
                  <div className="p-2">

                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400">  
                    
                    { 
                    

                    list.title.charAt(0).toUpperCase() + 
                    list.title.slice(1) 
                    
                    } 
                    
                    </h2>

                    <h1 className="title-font text-lg font-bold  text-gray-900">{ list.typeevent.toUpperCase() } </h1>
                    <p className="leading-relaxed text-sm">Details... </p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center text-sm">
                      
                      {/* <Link to="/displayevent">
                       <button className="mt-4 w-full bg-yellow-500 font-semibold py-2 rounded-md  tracking-wide">En cours</button>
                     </Link> */}
                     
                     </a>
                      <span className="text-gray-400 mr-1 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-1 py-1 border-r-2 border-gray-200">
                        <img className='ml-3 inline-flex' src={Like} alt="plus" height={ 20 } width={20}/> 1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm mr-3">
                      
                      <img className='ml-3 inline-flex' src={ Comment } alt="plus" height={ 20 } width={20}/> 200

                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          )) }


        </div>

  <div className="mr-2 ml-2">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch md:flex justify-center">
      <div className="flex items-center  bg-gray-100 rounded">
        <div className="text-center lg:text-left mb-2 mt-2">
          <h2 className="text-2xl font-bold text-center">
            Qui sommes nous ? 
          </h2>

          <p className="mt-2 text-sm text-gray-700 text-center">
           <span className='text-red-700'> TapPot </span> est une applications pour trouver le meilleur moment trend a quelques Kilometre.<br></br>
           <span className='text-red-700'> TapPot </span>  te permet de creer ton evenement et de l'identifier sur la carte au utilisateur de tapote.<br></br>
            A travers  <span className='text-red-700'> TapPot </span>  chacun de peut participer a un evenement de son choix sur la carte en parlant directement le createur 
            de l'evenement pour avoir une place.
          </p>

          <div className='flex justify-center mt-5'>
          <button onClick={ handleinfocompany } className=' mb-20 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline border border-blue-700 hover:bg-orange-700 text-white font-normal py-2 px-4 rounded bg-blue-700 ' >
          <a
            href="/path/to/tapotecompany"
            
          >
            En Savoir 
          </a>
          <img className='ml-3 inline-flex' src={Plus} alt="plus" height={ 20 } width={20}/>
          </button>


          </div>
        </div>
      </div>
    </div>
  </div>
  </div>



    </div>
  )
}

export default HomePage