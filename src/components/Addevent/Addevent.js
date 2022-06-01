import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from 'axios';
import DateRangePicker from '@themesberg/tailwind-datepicker/DateRangePicker';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css'


function Addevent() {

   //VARIABLE EN STATE POUR LES INPUTS

   const [usernameevent, setUsernameevent]= useState("");

   const [title, setTitle] = useState("");
   const [typeevent, setTypeevent] = useState("");
   const [telephone, setTelephone] = useState("");

   const [country, setCountry] = useState("");
   const [city, setCity] = useState("");

   const [adress, setAdress] = useState("");
   const [adress2, setAdress2]= useState("");

   const [latitude, setLatitude] = useState("");
   const  [longitude, setLongitude]= useState("");

   const [dateevent, setDateevent] = useState("");
   const [heureevent, setHeureevent]= useState("");

   //URL SAVE IMAGE
   const [imageUrl, setImageUrl] = useState("");

   //Validation
  const [isRequired, setIsrequired] = useState(true);

  useEffect(()  => {  

    console.log("It is page Add event ");
    //console.log("it is , it is " + localStorage.getItem('usernameC'));
    setUsernameevent(localStorage.getItem('usernameC'));
    //console.log();

  })

   //AUTO COMPLETE
   function onPlaceSelect(value) {

    if(value){

    // console.log(value.properties.lat); 
    // console.log(value.properties.lon); 

    setLatitude(value.properties.lat);
    setLongitude(value.properties.lon); 
    setAdress(value.properties.address_line1);
    setAdress2(value.properties.address_line2);
    
    //console.log(value);

  }else {
    console.log("Aucune position selectionnée");
  }
    
  }

  function onSuggectionChange(value) {

    //console.log(value);
    // console.log(value[0].geometry.coordinates[0]);
    // console.log(value[0].geometry.coordinates[1]);
   
  }

  //Handle display lat and long
  const diplsay = () => {

    console.log(latitude);
    console.log(longitude);
    console.log(adress);
    console.log(adress2);
  }


    const handleAddevent = () => {


      //console.log("echo");
        
        if(!title || !typeevent || !telephone || !country || !city || !dateevent || !heureevent) {

          console.log("Remplissez correctement tous les champs it is empty");

        }else {

            alert ("Merci d'avoir ajouter un evenement");

           //Navigation vers la page Home ("/")
           

        axios.post(`http://34.163.156.6/saveevent`, { 'title': title, 'typeevent': typeevent, 'telephone': telephone, 'country':country, 'city': city, 'adress': adress, 'adress2': adress2, 'latitude': latitude, 'longitude':longitude, 'dateevent':dateevent, 'heureevent':heureevent, 'usernameevent':usernameevent, 'imageUrl':imageUrl })
        .then(res =>{
          
          console.log(res.data);

        })

        navigate("/home", { replace: true });
      }
      
    }

    //Navigation pour le retour en arrière
    const navigate = useNavigate();
    function handleClick() {

        navigate(-1)

    }
    
  return (

    <div className='relative top-[70px]'>
            
            <div className='drop-shadow-md mt-1 flex justify-start md:justify-center md:my-8 '>
            <button onClick={ handleClick }>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" className="w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                </svg>
            </button>

            <h3 className="text-lg font-medium text-gray-900 inline-flex px-10 mt-2 " >Ajouter un evenement</h3>
            
            </div>

      <div className="sm:mt-0">
          <div className="md:col-span-1">
            <div className="px-5 py-3 flex justify-center ">
              
              <p className=" text-sm text-red-500 text-center">
              Veuillez mentionner toutes les informations car elles sont importants pour localiser votre evenement.
              </p>
            </div>
          </div>
   


      <form action="#" method="POST" className='mb-20'>
          <div className="px-1 py-1 bg-white">

            <div className="grid grid-cols-6 gap-4 flex flex-col space-y-0">

              <div className="col-span-6 sm:col-span-3">
                <input type="text" placeholder='Titre' autoComplete="given-name" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                " onChange={ (event) =>  setTitle(event.target.value)} required = { isRequired ? 'required' : false }/>
              </div>

             


              {/* <div className="col-span-6 sm:col-span-3">
                <input type="text" placeholder='Type evenement' autoComplete="family-name" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                " onChange={ (event) =>  setTypeevent(event.target.value)}  required = { isRequired ? 'required' : false }/>
                 
              </div> */}

              <div className="col-span-6 sm:col-span-3">
                <input type="text" placeholder='Telephone' autoComplete="telephone" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                " onChange={ (event) =>  setTelephone(event.target.value)}  required = { isRequired ? 'required' : false } />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <select id="country" name="country" placeholder='pays' className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "  onChange={ (event) =>  setTypeevent(event.target.value)}  required = { isRequired ? 'required' : false } >
                  <option value="" disabled selected>Type d'evenement</option>
                  <option>Conference</option>
                  <option>Concert</option>
                  <option>Congres</option>
                  <option>Seminaire</option>
                  <option>Lancement de produit</option>
                  <option>Anniversaire</option>
                  <option>Mariage</option>
                  <option>Team building</option>
                  <option>Festivals</option>
                  <option>Sport</option>
                  <option>Journée d'etude</option>


                </select>
              </div>



              <div className="col-span-6 sm:col-span-3">
                <select id="country" name="country" placeholder='pays' className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                " onChange={ (event) =>  setCountry(event.target.value)}  required = { isRequired ? 'required' : false } >
                  <option value="" disabled selected>Pays</option>
                  <option>Maroc</option>
                  <option>Cote divoire</option>
                </select>
              </div>
            
              <div className="col-span-6 sm:col-span-3">
                <select id="country" name="country" placeholder='ville' className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                " onChange={ (event) =>  setCity(event.target.value)}  required = { isRequired ? 'required' : false }>
                  <option value="" disabled selected>Ville</option>
                  <option>Casablanca</option>
                  <option>Abidjan</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3 " id='valueadress' name='valueadress'>
                {/* <input type="text" name="street_address" id="street_address" placeholder='Adresse' autoComplete="street-address" className="form-control block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                " 
                onChange={ (event) =>  setAdress(event.target.value)}/> */}
                 
                  <GeoapifyContext apiKey="1fb9292f4aa042178322fdc7ebdac722">

                      <GeoapifyGeocoderAutocomplete 

                        placeholder='Adresse'
                        placeSelect={onPlaceSelect}
                        suggestionsChange={onSuggectionChange}
                      />

                  </GeoapifyContext>
                  <input hidden className='' id='lngt_lat_value'/>
                  
              </div>
              
            </div>

            {/* DATE TABLE */}
            

        <div className="flex md:justify-center ">
          <div className="datepicker relative mt-4 flex">
          <label htmlFor="floatingInput" className="text-gray-700  inline-flex mt-2.5 text-red-700 font-medium text-sm">Date & Heure : </label>

            <input type="date" onChange={ (event) =>  setDateevent(event.target.value)}
              className="ml-3 px-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="choisir une date"  required = { isRequired ? 'required' : false }/>

            <input type="time" id="" name="" min="09:00" max="18:00" className='ml-1 text-gray-700 border border-solid border-gray-300'  onChange={ (event) =>  setHeureevent(event.target.value)}  required = { isRequired ? 'required' : false }/>

          </div>
        </div>


            <div className='mb-20'>
              <label className="block text-sm font-medium text-gray-700 text-center mt-5">
                Couverture de votre evenement
              </label>

              {/* TUTO STEP BY STEP ADD UPLOAD LINK : https://www.topcoder.com/thrive/articles/using-cloudinary-for-image-storage-with-express */}
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="True">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Telecharger une photo</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                    </label>
                    <p className="pl-1">ou glisser-déposer</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF jusqu'a 10MB
                  </p>
                </div>
              </div>
              
              <div className="px-3 bg-gray-50 text-right mt-2">
            <button onClick={ handleAddevent } type="submit" className="inline-flex w-40 justify-center py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Enregistrer
            </button>
          </div>


          
            </div>

          </div>

          

      </form>
    
</div>




    </div>

    
  )
}

export default Addevent