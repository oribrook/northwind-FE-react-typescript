import React, { useEffect, useState } from 'react'
import ProductModel from '../../models/ProductModel'
import { getProduct } from '../../api/products-api'
import { useParams } from 'react-router-dom'
import Product from './Product'


const ProductPage = () => {

    const [p, setP] = useState<ProductModel>()
    
    const params = useParams();

    useEffect(() => {
        getProduct(Number(params.id)).then((res)=>{setP(res)})
    }, [])

  return (
      <div>
          {p && <Product p={p}/>}
    </div>
  )
}

export default ProductPage