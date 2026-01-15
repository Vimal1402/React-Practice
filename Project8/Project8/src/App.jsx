import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'


const App = () => {

  // const [productData, setProductData] = useState([])

  // const getData = async()=>{
  //   const response = await axios.get('https://fakestoreapi.com/products')
  //   setProductData(response.data);
  // }
  
  // useEffect(function(){
  //  getData()
  // },[])
  
  return (
    // <div className='allProducts'>
    //   {productData.map(function(elem,idx){
    //     return <a target='_blank' className='product' key={idx} href="">
    //       <div>
    //         <img src={elem.image} alt="" />
    //         <h2>{elem.title}</h2>
    //         <p>${elem.price}</p>
    //       </div>
    //     </a>
    //   })}

    // </div>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/products/:productId' element={<ProductDetails/>} />
    </Routes>
  )
}

export default App





// const getSingleData = async(id)=>{
//   const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
//   console.log(response.data);
// }

{/* <button onClick={getData}>Get Data</button>
<button onClick={()=>{
  getSingleData(2)
}}>Get Single Data</button> */}