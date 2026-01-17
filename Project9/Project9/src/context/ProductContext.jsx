import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

export const ProductDataContext = createContext();

const ProductContext = (props) => {
    const [productData, setProductData] = useState([])
    const getData = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        setProductData(response.data);
        console.log(response.data);
    } 
    // useEffect(function(){
    //     getData()
    // },[])
  return (
    <div>
      <ProductDataContext.Provider value={{productData,getData}}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  )
}

export default ProductContext
