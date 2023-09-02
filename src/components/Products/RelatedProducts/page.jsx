import React from 'react'
import ProductContainer from "@/components/Products/ProductContainer/page";

const RelatedProducts = () => {
  const url = "https://fakestoreapi.com/products/category/jewelery"
  return (
  <div>
    <ProductContainer apiEndpoint={url}/>
  </div>
  )
}

export default RelatedProducts;