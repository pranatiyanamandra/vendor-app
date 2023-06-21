import Vendor from "@models/vendor";
import { connectToDB } from "@utils/database"

export const GET=async(req,res)=>{
    try{
        await connectToDB();
        const vendors = await Vendor.find({}).populate('creator')
        return new Response(JSON.stringify(vendors),{status:200});
    }catch(error){
        return new Response('Failed to fetch all vendors',{status:500});
    }

    
}