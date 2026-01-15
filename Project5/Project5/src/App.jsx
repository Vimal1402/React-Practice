import React, { use } from 'react'
import { useState } from 'react'
import { jsx } from 'react/jsx-runtime';

function App() {
      function submitHandler(e){
        e.preventDefault();

        const oldUser = [...allUsers];
        oldUser.push({user, email, age, role})
        setAllUsers(oldUser);
        localStorage.setItem('all-users', JSON.stringify(oldUser));
        
        setUser('');
        setAge('');
        setEmail('');
        setRole('');

    }

    function deleteHandler(idx){
        const copyUsers = [...allUsers];
        copyUsers.splice(idx, 1)
        setAllUsers(copyUsers);
        localStorage.setItem('all-users', JSON.stringify(copyUsers));
    }

    const[user, setUser] = useState('')
    const[email, setEmail] = useState('')
    const[age, setAge] = useState('')
    const[role, setRole] = useState('')
    const[allUsers, setAllUsers] = useState([])
  
  return (
    <div>
      <form onSubmit={(e) => {
          submitHandler(e);
      }}>
        <input type="text" placeholder='Enter your name' value={user} onChange = {(e)=>{
          setUser(e.target.value);
        }}/>
        <input type="text" placeholder='Enter your Email' value={email} onChange = {(e)=>{
          setEmail(e.target.value);
        }}/>
        <input type="text" placeholder='Enter your age' value={age} onChange = {(e)=>{
          setAge(e.target.value);
        }}/>
        <input type="text" placeholder='Enter your role' value={role} onChange = {(e)=>{
          setRole(e.target.value);
        }}/>
        <button>Submit</button>
      </form>
      <div>
        {allUsers.map((elem, idx)=>{
          return (
            <div>
            <h1>{elem.user}</h1>
            <h1>{elem.email}</h1>
            <h1>{elem.role}</h1>
            <h1>{elem.age}</h1>
            <button onClick={()=>{
              deleteHandler(idx)
            }}>Delete</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
