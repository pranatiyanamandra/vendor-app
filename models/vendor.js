import mongoose,{Schema,model,models} from "mongoose";

const VendorSchema = new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    vendor:{
        type:Object,
        required:[true,'Vendor is Required'],      
    }
})

const Vendor = models.Vendor || model('Vendor',VendorSchema);
export default Vendor