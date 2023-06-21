import { connectToDB } from "@utils/database";
import Vendor from "@models/vendor";
export const POST = async (req,res)=>{
    const {userId,vendor} = await req.json();
    try{
        await connectToDB();
        const newVendor = new Vendor({
            creator:userId,
            vendor:vendor,
        })
        await newVendor.save();
        return new Response(JSON.stringify(newVendor),{status:201})
    }catch(error){
        return new Response("Failed to create a new Vendor",{status:500})
    }

}

