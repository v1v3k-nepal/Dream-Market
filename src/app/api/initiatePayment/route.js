import { NextResponse } from "next/server";

export const POST = async (request)=>{

  const payload = await request.json();
 
    try {
  
        const response = await fetch("https://a.khalti.com/api/v2/epayment/initiate/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.KHALTI_SECRET_KEY
          },
          body: JSON.stringify(payload),
        });
    
        const data = await response.json();
        console.log(data);
        return new NextResponse(JSON.stringify(data))

      } catch (error) {
        console.error(error);
        throw new Error("Payment initiation Failed")
      }

}