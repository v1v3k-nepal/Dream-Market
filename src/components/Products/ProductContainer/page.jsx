import ProductCard from "../ProductCard/page";
import { useDispatch } from "react-redux";
import { setProductData } from "../../../redux/productSlice"

const getData = async ()=>{
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  if (!response.ok){
    throw new Error("Failed to fetch Data")
  }
  return data;
}

const ProductContainer = async () => {
  
    const dispatch = useDispatch();

    const data = await getData();
    dispatch(setProductData(data));
    // console.log(data);

  return (
    <div className="grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-5 gap-8">
      {data?.map((item)=>(
        <ProductCard key={item.id} prodData={item}/>
      ))}
    </div>
  );
};

export default ProductContainer;
