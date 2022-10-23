import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({ data }) => {
  return <>
    {data?.map((cat, item, index) => (
      <ProductCard item={item} key={index} />
    ))}

  </>
}

export default ProductList