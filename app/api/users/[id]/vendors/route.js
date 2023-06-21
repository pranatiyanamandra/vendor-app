import Vendor from "@models/vendor";
import { connectToDB } from "@utils/database"

export const GET=async(req,{params})=>{
    try{
        await connectToDB();
        const vendors = await Vendor.find({creator:params.id}).populate('creator')
        return new Response(JSON.stringify(vendors),{status:200});
    }catch(error){
        return new Response('Failed to fetch all vendors',{status:500});
    }

    
}