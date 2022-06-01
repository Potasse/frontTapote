import React from 'react'
import { useNavigate } from "react-router-dom";
import { StreamChat } from 'stream-chat';

import Header from '../Header/Header'
import Tabs from '../Tabs/Tabs'


// import "./chatbox.css";
// import {
//   Chat,
//   Channel,
//   ChannelHeader,
//   ChannelList,
//   MessageList,
//   MessageInput,
//   Thread,
//   Window,
// } from 'stream-chat-react';
// import '@stream-io/stream-chat-css/dist/css/index.css';
import { useEffect } from 'react';
import { useState } from 'react';


function ChatBox() {

   //Navigation pour le retour en arrière
   const navigate = useNavigate();
  
  

   useEffect(() => {
    


    
  }, []);

 

  const handleReturn = () => {

       navigate(-1)
   }
   const HandleChat = () => {

    console.log("Chat")
   }

  

  return (
    <div>
    <div className="mt-0 mr-auto w-full">


      <div className="relative top-[70px]">
       
      <div className='mt-1 mb-2 flex justify-start '>
            <button onClick={ handleReturn } className='ml-3'>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-left" className="w-10 h-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zm448 0c0 110.5-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56s200 89.5 200 200zm-72-20v40c0 6.6-5.4 12-12 12H256v67c0 10.7-12.9 16-20.5 8.5l-99-99c-4.7-4.7-4.7-12.3 0-17l99-99c7.6-7.6 20.5-2.2 20.5 8.5v67h116c6.6 0 12 5.4 12 12z"></path>
                </svg>
            </button>
           <div className='font-bold text-lg text-gray-900 ml-10 inline-flex mt-2 ' onClick={ HandleChat }>Chat</div>  
      </div>

      <div id='chatref'>


       

      </div>
       
      </div>

    </div>

  </div>
  )
}

export default ChatBox