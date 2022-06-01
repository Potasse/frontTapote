import React, { useEffect } from "react";
import Map from "react-map-gl";
import mapboxgl from "mapbox-gl";
import { MarkerDragEvent, LngLat } from "react-map-gl";
import { Marker, NavigationControl } from "react-map-gl";
import axios from "axios";
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ControlPanel from "./Controlpanel";
import { Tab } from "@headlessui/react";

import Pin from "./Pin";

function Mapgl() {

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoicG90YXNzZSIsImEiOiJjbDFtcWQ5NmswNWo1M2RwZGk3Nnp5Z2MwIn0.q2Q2N-WzY4TRvcKFJ54NMg";

    // const map = new mapboxgl.Map({

    //     container: 'leafletmap', // container ID
    //     style: 'mapbox://styles/potasse/cl1mqn5s500cx16rz2kjyjpon', // style URL
    //     center: [-74.5, 40], // starting position
    //     zoom: 9 // starting zoom
    //     });getevenlist
    GetListevent();

  }, ['50000']);

  const [lists, setLists] = React.useState();
  const navigate = useNavigate();

  //Coordonnées du marker
  const [marker, setMarker] = useState({
    latitude: 33.520593,
    longitude: -7.56806,
  });


  const GetListevent = () => {

    axios.get(`http://34.163.156.6/GetevenlistMap`)

    .then(res => { 

      setLists(res.data)
      console.log(res.data);


    })

    .catch(error => {

        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);

    }); 
  }

  const [events, logEvents] = useState();

  // const handleposition = () => {

  //   console.log("Get Position");

  // }

  const handleMarkerTest = () => {
    console.log("Bonjour");
  }

  
  // function handleposition() {

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);
  //   } else { 
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

const handleposition = () => {

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

const handlerMarker =()=> {

  console.log('bonjour');

}

const handleDisplayId = (id) => {

  console.log(id);
  
  navigate("/displayevent", { state:{ id: id }} );
  
  
}

  
  return (
    <div> 
       <div className="relative top-[70px] md:top-[90px]">
        
      
        <div className="mt-1 mb-2">
          <div className="font-bold text-xl ml-2" onClick={ GetListevent }>Carte</div>
        </div>

        <div className="flex">
          <div className="flex-1">
            <div className="font-bold text-sm text-teal-600">
              <button className="text-teal-600">
                <svg
                  xmlns="http:www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <button onClick={ handleposition }>
                <b>Casablanca</b>
                <div className="text-xs">A moins de 3 km </div>
              </button>
            </div>
          </div>
          <div className="flex-1"></div>

           <div className="flex-1">
              <button onClick={ handleposition }  type="button" className="ml-10 text-sm text-teal-600 font-bold py-1 px-3 focus:outline-none bg-gray-100 rounded-lg border"> 
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

      <div id="leafletmap" className="mt-5 mb-20">

        <Map
          initialViewState={{
            longitude: -7.080168,
            latitude: 31.792306,
            zoom: 2,
          }}
          style={{ height: 400 }}
          //mapStyle="mapbox://styles/potasse/cl1mqn5s500cx16rz2kjyjpon"
          mapStyle ="mapbox://styles/mapbox/streets-v11"
          >

            {(lists || []).map((list) => (

                  <Marker
                    
                    onClick={ ()=> handleDisplayId(list._id)  }
                    key={list._id} 
                    longitude={ list.longitude} 
                    
                    latitude={ list.latitude} 
                    anchor="bottom"

                    
                    // draggable
                    // onDragStart={onMarkerDragStart}
                    // onDrag={onMarkerDrag}
                    // onDragEnd={onMarkerDragEnd}
                  >
                    <Pin size={20} />
                  </Marker>
            ))}

          <NavigationControl />
        </Map>

        <ControlPanel events={events} />
      </div>
      
      </div>
      </div>
   
  );
}

export default Mapgl;
