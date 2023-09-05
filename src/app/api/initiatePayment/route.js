import { NextResponse } from "next/server";

export const POST = async (request)=>{
    
    try {
  
        const response = await fetch("https://a.khalti.com/api/v2/epayment/initiate/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Key 53b79d5239224f2dbefe1365e5655d78",
          },
          body: JSON.stringify({
              "return_url": "https://your-dream-market.vercel.app/search/",
              "website_url": "https://your-dream-market.vercel.app",
              "amount": "1000",
              "purchase_order_id": "Order01",
              "purchase_order_name": "test",
              "customer_info": {
                  "name": "Ram Bahadur",
                  "email": "test@khalti.com",
                  "phone": "9800000001"
              }
              })
          // body: JSON.stringify(payload),
        });
    
        const data = await response.json();
        console.log(data);
        return new NextResponse(JSON.stringify(data))

      } catch (error) {
        console.error(error);
        throw new Error("Payment initiation Failed")
      }

}