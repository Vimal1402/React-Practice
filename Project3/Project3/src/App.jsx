import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card.jsx'
import './App.css'

function App() {
  // const arr = ['Vimal', 'Hitesh', 'Pavani', 'Sarthak']
  const users = [
    {
      fullName: "Alice Johnson",
      title: "Software Engineer",
      profileImage: "https://i.pinimg.com/736x/36/b1/3f/36b13f53eb9c2990b5ee3402fe97094e.jpg",
      description: "Alice is a full-stack developer specializing in JavaScript frameworks and cloud-native applications."
    },
    {
      fullName: "Aprisha Kim",
      title: "Product Manager",
      profileImage: "https://i.pinimg.com/736x/05/57/5d/05575d63e8eddbc332b63864b8f2f4b4.jpg",
      description: "Kim has over 8 years of experience in product strategy and user experience design."
    },
    { 
      fullName: "Sophia Martinez",
      title: "UX Designer", 
      profileImage: "https://picsum.photos/200/200?random=3", 
      description: "Sophia crafts intuitive user experiences and has a passion for design systems and accessibility." 
    }, 
    { 
      fullName: "James Patel", 
      title: "Data Scientist", 
      profileImage: "https://picsum.photos/200/200?random=4", 
      description: "James leverages machine learning and statistical modeling to uncover insights from complex datasets." 
    }
  ];



  return (
    <div className='w-[0%] flex flex-2'  >
      {/* {arr.map(function(elem){
      return <Card name = {elem}/>
    })} */}
      {users.map(function (elem) {
        return <Card name={elem.fullName} title={elem.title} profile={elem.profileImage} desc={elem.description} />
      })}

    </div>
  )
}

export default App
