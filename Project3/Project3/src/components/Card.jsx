import React from 'react'

function Card(user) {
  return (

    <div className=' border-2 px-4.5 py-5.5 m-5.5 flex flex-col justify-center items-center'>
      <div className="image object-cover rounded-4xl">
        <img src={user.profile} className='rounded-[50%] object-cover w-55 h-55' alt="" />
      </div>

      <h2 className='py-2 font-bold text-4xl text-brown-800'>{user.name}</h2>
      <h3 className='py-2 font-semi-bold text-2xl text-center'>{user.title}</h3>

      <div className="buttons flex gap-3.5">
        <button className='bg-blue-500 px-3 py-2.5 border rounded-2xl font-semi-bold text-xl active:scale-95'>UI</button>
        <button className='bg-blue-500 px-3 py-2.5 border rounded-2xl font-semi-bold text-xl active:scale-95'>UX</button>
        <button className='bg-blue-500 px-3 py-2.5 border rounded-2xl font-semi-bold text-xl active:scale-95'>photoshop</button>
        <button className='bg-blue-500 px-3 py-2.5 border rounded-2xl font-semi-bold text-xl active:scale-95 '>+4</button>
      </div>
      <p className='text-center font-semi-bold text-xl px-10 py-4'>{user.desc}</p>
      <div className="profile">
        <button className='bg-blue-500 px-3.5 py-2.5 border rounded-2xl font-semi-bold text-xl active:scale-95'>View Profile</button>
      </div>
    </div>

  )
}

export default Card
