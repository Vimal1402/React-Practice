import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const productData = useContext(ProductDataContext)

    const param = useParams()
    console.log(param.productId);

    let selectedProduct = '';
    if (productData.length > 0) {
        selectedProduct = productData.find((elem) => param.productId == elem.id)
        console.log(selectedProduct);
    }


    return (
        <div>
            <div className='singleProduct'>
                <img src={selectedProduct.image} alt="" />
                <h2>{selectedProduct.title}</h2>
                <p>{selectedProduct.price}</p>
            </div>
        </div>
    )
}

export default ProductDetails
