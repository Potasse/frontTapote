import React from 'react'
import { Tab } from '@headlessui/react'
import { useState } from 'react'
// import Mapgl from './Mapgl'



// const Tabs = ({ color }) => {

//   const [openTab, setOpenTab] = React.useState(1);
//   return (
//     <>
//       <div className="flex flex-wrap">
//         <div className="w-full">
//           <ul
//             className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
//             role="tablist"
//           >
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">

//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 1
//                     ? "text-white bg-" + color + "-600"
//                     : "text-" + color + "-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(1);
//                 }}
//                 data-toggle="tab"
//                 href="#link1"
//                 role="tablist"
//               >
//                 <i className="fas fa-space-shuttle text-base mr-1"></i> Profile
//               </a>

//             </li>
//             <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
//               <a
//                 className={
//                   "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
//                   (openTab === 2
//                     ? "text-white bg-" + color + "-600"
//                     : "text-" + color + "-600 bg-white")
//                 }
//                 onClick={e => {
//                   e.preventDefault();
//                   setOpenTab(2);
//                 }}
//                 data-toggle="tab"
//                 href="#link2"
//                 role="tablist"
//               >
//                 <i className="fas fa-cog text-base mr-1"></i>  Settings
//               </a>
//             </li>
            
//           </ul>
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
//             <div className="px-4 py-5 flex-auto">
//               <div className="tab-content tab-space">
//                 <div className={openTab === 1 ? "block" : "hidden"} id="link1">
//                   <p>
//                     Collaboratively administrate empowered markets via
//                     plug-and-play networks. Dynamically procrastinate B2C users
//                     after installed base benefits.
//                     <br />
//                     <br /> Dramatically visualize customer directed convergence
//                     without revolutionary ROI.
//                   </p>
//                 </div>
//                 <div className={openTab === 2 ? "block" : "hidden"} id="link2">
//                   <p>
//                     Completely synergize resource taxing relationships via
//                     premier niche markets. Professionally cultivate one-to-one
//                     customer service with robust ideas.
//                     <br />
//                     <br />
//                     Dynamically innovate resource-leveling customer service for
//                     state of the art customer service.
//                   </p>
//                 </div>
               
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };


 function Map() {
   return (
    
     <div className='relative top-[60px]'>  

        <div>
          bonjour
        {/* <Mapgl /> */}

        
        </div> 

        


        {/* <div className='mt-1 mb-2'>
           <div className='font-bold text-xl ml-2'>Carte</div>  
        </div>

        <div className="flex">
             <div className="flex-1">
                
               <div className='font-bold text-sm text-teal-600'>
                
                 <button className='text-teal-600'>
                     <svg xmlns="http:www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                       <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                     </svg>
                 </button>

                 <button>

                 <b>Casablanca</b>
                 <div className='text-xs'>A moins de 3 km </div>
                 </button>
      
               </div>
              
               </div>
              
            <div className="flex-1"></div>

            <div className="flex-1">
               <button type="button" className="ml-10 text-sm text-teal-600 font-bold py-1 px-3 focus:outline-none bg-gray-100 rounded-lg border"> 
               Position 
               </button>
           </div>
         </div>

          <div className="flex mx-auto mt-1">
              <div className="flex border-1 ml-2 rounded-lg justify-center">
                  <button className="flex items-center justify-center px-4 border-solid border-2 border-teal-600">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http:www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path
                              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                          </path>
                      </svg>
                  </button>
                  <input type="text" className="px-4 py-2 w-80 text-sm" placeholder="Recherche un type d'evenement"/>
              </div>
          </div>

          <div className="px-5 mt-3 sm:px-0">
            
          <Tabs color='green' />
          
          </div> */}


        

    </div>
   )
 }
 
 export default Map

//  //Link pour le components tabs https:headlessui.dev/react/tabs

//   function classNames(...classNamees) {
//     return classNamees.filter(Boolean).join(' ')
//   }


//   function Map() {

//     let [categories] = useState({

//       Liste: [
//         {
//           id: 1,
//           title: 'Does drinking coffee make you smarter?',
//           date: '5h ago',
//           commentCount: 5,
//           shareCount: 2,
//         },
//         {
//           id: 2,
//           title: "So you've bought coffee... now what?",
//           date: '2h ago',
//           commentCount: 3,
//           shareCount: 2,
//         },
//       ],
//       Carte: [
//         {
//           id: 1,
//           title: 'Carte',
       
//         },
//       ]
//     })
 
//     return (

//       <div className='relative top-[80px]'>

//               <div className='mt-1 mb-2'>
//                 <div className='font-bold text-xl ml-2'>Carte</div>  
//               </div>

//               <div className="flex">
//                 <div className="flex-1">
                
//                 <div className='font-bold text-sm text-teal-600'>
                
//                   <button className='text-teal-600'>
//                       <svg xmlns="http:www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                         <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                       </svg>
//                   </button>

//                   <button>

//                   <b>Casablanca</b>
//                   <div className='text-xs'>A moins de 3 km </div>
//                   </button>
      
//                 </div>
              
//                 </div>
//                 {/* <div className="flex-1">02</div> */}
              
//               {/* une division flex laisser pour modifier en cas  */}
//              <div className="flex-1"></div>

//              <div className="flex-1">
//                 <button type="button" className="ml-10 text-sm text-teal-600 font-bold py-1 px-3 focus:outline-none bg-gray-100 rounded-lg border"> 
//                 Position 
//                 </button>
//             </div>
//           </div>

//           {/* BAR DE RECHERCHE */}
//           <div className="flex mx-auto mt-1">
//               <div className="flex border-1 ml-2 rounded-lg justify-center">
//                   <button className="flex items-center justify-center px-4 border-solid border-2 border-teal-600">
//                       <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http:www.w3.org/2000/svg"
//                           viewBox="0 0 24 24">
//                           <path
//                               d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
//                           </path>
//                       </svg>
//                   </button>
//                   <input type="text" className="px-4 py-2 w-80 text-sm" placeholder="Recherche un type d'evenement"/>
//               </div>
//           </div>


        
//           <div className="px-5 mt-3 sm:px-0">
//         <Tab.Group>

//           <Tab.List className="flex p-1 space-x-1 backdrop-opacity-10 backdrop-invert bg-white/30 rounded-lg">

//             {Object.keys(categories).map((category) => (

//               <Tab
//                 key={category}
              
//                 className={({ selected }) =>
//                   classNames(
//                     'w-full py-2 text-sm leading-5 font-medium text-teal-600 rounded-r-lg bg-transparent',
//                     'rounded-l-lg',
//                     selected
//                       ? 'bg-teal-600 text-white'
//                       : 'text-teal-600'
//                   )
//                 }
//               >
//                 {category}
//               </Tab>
//             ))}
//           </Tab.List>
        
//           <Tab.Panels className="mt-2">
          
//             {Object.values(categories).map((posts, idx) => (

//               <Tab.Panel
//                 key={idx}
//                 className={classNames(
//                   'bg-white rounded-xl p-3',
//                   'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
//                 )}
//               >
//                 <div>
//                   {posts.map((post) => (
//                     <div
//                       key={post.id}
//                       className="relative p-3 rounded-md hover:bg-coolGray-100"
//                     >
//                       <h1 className="text-sm font-medium leading-5">
//                         {post.title}
//                       </h1>

//                       <div>bonjour</div>
//                     </div>
//                   ))}
//                 </div>
//               </Tab.Panel>
//             ))}
//           </Tab.Panels>

//         </Tab.Group>
//       </div>

//       </div>
//     )
//   }

//   export default Map