import React from 'react'
import { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'

const Products = () => {

      const {productData, getData} = useContext(ProductDataContext)

  return (
    <div>

     <button onClick={getData}>GetData</button>  
      {productData.map(function(elem,idx){
        if(productData.length>0){
        return <div>
        <p key={idx}>{elem.title}</p>
        <img src={elem.image} alt="" />
        </div>
        }else{
          <p>Data not fetched</p>
        }
      })}
    </div>
  )
}

export default Products
