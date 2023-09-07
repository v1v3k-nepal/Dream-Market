"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Shipping = () => {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartSubtotal = useSelector((state) => state.cart.cartSubtotal);
  const shippingCost = useSelector((state) => state.cart.shippingCost);


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="left"></div>
      <div className="right border-2 border-gray-400 p-5 rounded-md my-5 w-[90vw] sm:w-[85vw] lg:w-[70vw] overflow-scroll">
        <h1 className="font-bold text-3xl mb-2">Order Summary</h1>
        <div>
          <div className="font-bold flex text-2xl border-y-2 border-gray-400 py-2">
            <h1>Product</h1>
            <h1 className="ml-auto">Subtotal</h1>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="border-b-2 border-gray-400 py-2">
              <div className="flex">
                <h1 className="max-w-[150px] sm:max-w-[200px] whitespace-nowrap overflow-hidden text-ellipsis mb-2">{item.title}</h1>
                <p className="ml-auto">NPR {item.price}</p>
              </div>
              <div className="pl-1">
                <div className="relative w-[20vw] h-[20vw] sm:w-[15vw] sm:h-[15vw] md:w-[10vw] md:h-[10vw] lg:w-[5vw] lg:h-[5vw] bg-white rounded-md mb-1">
                  <Image
                    src={item.image}
                    alt="product Image"
                    fill={true}
                    className="object-contain p-1"
                  ></Image>
                </div>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex">
                <h1>Product Total</h1>
                <p className="ml-auto">
                  {item.quantity} * {item.price} = NPR{" "}
                  {item.quantity * item.price}
                </p>
              </div>
            </div>
          ))}
          <div className="flex border-b-2 border-gray-400 py-2 text-xl font-semibold">
            <h1>Shipping Cost:</h1>
            <p className="ml-auto">NPR {shippingCost}</p>
          </div>
          <div className="flex font-bold text-base sm:text-2xl mt-2">
            <h1 className="">Total Payment:</h1>
            <p className="ml-auto">NPR {cartSubtotal + shippingCost}</p>
          </div>
          <button className="bg-green-600 w-full p-2 text-xl font-bold rounded-md mt-5" onClick={()=>router.push("/shipping")}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
