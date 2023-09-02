"use client"
import ProductContainer from "@/components/Products/ProductContainer/page";

export default function Home() {
  const url = "https://fakestoreapi.com/products"
  return (
    <div>
      <ProductContainer apiEndpoint={url}/>
    </div>
  )
}
