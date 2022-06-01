import React, { useEffect }  from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'



function Profile() {

  const usernameC = localStorage.getItem('usernameC');

  const [namecomplet, setNamecomplet] = useState("");
  const [usernameb, setUsernameb]= useState("");
  const [email, setEmail]= useState("");


  const [isDisablednamecomplet, setIsDisablednamecomplet] = useState(true);
  const [isDisabledusername, setIsDisabledusername]= useState(true);
  const [isDisableemail, setIsDisableemail]= useState(true);

  const [isHiddenedit, setIsHiddenedit] = useState(false);
  const [ishiddensave, setIshiddensave] = useState(true);

  useEffect(()  => {  

    
    //setTotal(1);
    console.log("It is page Profile ");
    axios.get(`http://34.163.156.6/edit-profil?username=${ usernameC }`)

      .then(res => {
       
          
          console.log(res.data);
          
          setNamecomplet(res.data.nomcomplet);
          setEmail(res.data.email);
          setUsernameb(res.data.username);
      
     
      })
      .catch((error) => {
        console.log(error);
      })
    
      
  },[usernameC])



 

  const onChangeHandler1 = event => {


    setNamecomplet(event.target.value);
    

  };

  const onChangeHandler2 = event => {


   
    setUsernameb(event.target.value);
   

  };

  const onChangeHandler3 = event => {

    setEmail(event.target.value);

  };

  const handleEdit = () => {

      
      setIsDisablednamecomplet(false);
      setIsDisabledusername(false);
      setIsDisableemail(false);

      setIsHiddenedit(true);
      setIshiddensave(false);
     
  

}
 
const handleSave = () => {

  
  axios.put(`http://34.163.156.6/update-profil`, { 'username': usernameC,  'email': email, 'nomcomplet': namecomplet, 'usernamenew':usernameb })

      .then((res) => {

        console.log(res.data)
        localStorage.setItem("usernameC",usernameb)
        console.log('Profil successfully updated')

      }).catch((error) => {
        console.log(error)
  })

  setIsHiddenedit(false);
  setIshiddensave(true);
  console.log("save");
  alert("sauvegarde reussite");
  setIsDisablednamecomplet(true);
  setIsDisabledusername(true);
  setIsDisableemail(true);
  

}

  return (

    <div className='relative top-[70px]'>
        
        <div className='mt-1 mb-2'>
           <div className='font-bold text-xl ml-2'> Profile</div>  
        </div>
       
        <div className="border-b-2 block md:flex">

    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div className="flex justify-between">
        <button hidden= { isHiddenedit ? "hidden" : false } type='button' type='button' onClick={ handleEdit } >
        <a href="#" className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Modifier</a>
        </button>

        <button hidden = {ishiddensave ? "hidden" : false } onClick={ handleSave } >
        <a href="#" className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Sauvegarder</a>
        </button>

      </div>
      <div className="w-full p-8 mx-2 flex justify-center">
        <img id="showImage" className="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt=""/>                          
        </div>
    </div>
    
    <div className="w-full p-8 bg-white lg:ml-4">
    <input type="hidden" name="id" />
      <div className="rounded  shadow p-6">
        <div className="pb-6">
          <label htmlFor="name" className="font-semibold text-gray-700 block pb-1">Nom et prenom </label>

          <div className="flex">
            <input  disabled={ isDisablednamecomplet ? "disabled" : false}  name="myInput" id="username" className="border-1  rounded-r px-4 py-2 w-full " type="text" onChange={onChangeHandler1} value={namecomplet} />
          </div>
        </div>

        <div className="pb-4">
          <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Username</label>
          <input disabled={ isDisabledusername ? "disabled" : false}  className="border-1  rounded-r px-4 py-2 w-full" type="text" onChange={onChangeHandler2} value={usernameb} />
        </div>

        <div className="pb-4">
          <label htmlFor="about" className="font-semibold text-gray-700 block pb-1">Email</label>
          <input disabled={ isDisableemail ? "disabled" : false } id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" onChange={onChangeHandler3} value={email}  />
        </div>

      </div>

        <Link to='/evenementperso'>
        <span className='flex justify-center'>Mes evenenements Perso</span>
        </Link>

    </div>

  </div>
    
    </div>
  )
}

export default Profile