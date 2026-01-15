import React from 'react'
import Card from './components/Card'
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [userDesc, setUserDesc] = useState('')

  const [allUsers, setAllUsers] = useState([])

   const submitHandler = (e)=>{
      e.preventDefault();
      setAllUsers([...allUsers, {userName, userRole, imageUrl, userDesc}])
      setUserName('');
      setUserRole('');
      setImageUrl('');
      setUserDesc('');
    }
   const deleteHandler = (idx) =>{
      const copyUsers = [...allUsers];
      copyUsers.splice(idx, 1)
      setAllUsers(copyUsers)
   }
  return (
    <div>

     <form className='px-5 py-10 bg-red-200 flex flex-col justify-center items-center' onSubmit={(e)=>{
      submitHandler(e);
     }}>

      <input className='border-2 rounded p-3 m-4 w-1/2' type="text" placeholder='Enter your name' 
      value={userName} 
      onChange={(e) => {
        setUserName(e.target.value);
      }}/>

      <input className='border-2 rounded p-3 m-4 w-1/2' type="text" placeholder='Enter your Role' 
      value={userRole} 
      onChange={(e) => {
        setUserRole(e.target.value);
      }}/>

      <input className='border-2 rounded p-3 m-4 w-1/2' type="text" placeholder='Enter Image URL' 
      value={imageUrl} 
      onChange={(e) => {
        setImageUrl(e.target.value);
      }}/>

      <input className='border-2 rounded p-3 m-4 w-1/2' type="text" placeholder='Enter your Description' 
      value={userDesc} 
      onChange={(e) => {
        setUserDesc(e.target.value);
      }}/>

      <button className='border-blue-300 rounded px-5 py-3 w-1/2 mt-5 bg-blue-500 text-white ' onClick={()=>{
        console.log("Form Submited")
      }}>Submit</button>
  
     </form>
     <div className='px-4 py-10 gap-4 flex flex-wrap'>
      {allUsers.map(function(elem, idx){
          return <Card idx = {idx} elem = {elem} deleteHandler = {deleteHandler} />
      })}
     </div>

    </div>
  )
}

export default App

