import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ProductDataContext } from './context/ProductContext'
import Home from './components/Home'
import Products from './components/Products'

const App = () => {
const {productData, getData} = useContext(ProductDataContext)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Products/>}/>
      </Routes>



    </div>  
  )
}

export default App
