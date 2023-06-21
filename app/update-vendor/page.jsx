'use client';
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter,useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditVendor = () => {
    const router = useRouter()
    const searchParams = useSearchParams();
    const vendorId = searchParams.get('id');
    const [submitting, setSubmitting] = useState(false)
    const [vendor, setVendor] = useState({
            name:{
                value:'',
                id:'Name',
                required:true
            },
            bankName:{
                value:'',
                id:'Bank Name',
                required:true
            },
            bankAccountNo:{
                value:'',
                id:'Bank Account Number',
                required:true
            },
            addressLine1:{
                value:'',
                id:'Address Line 1',
                required:true
            },
            addressLine2:{
                value:'',
                id:'Address Line 2',
                required:false
            },
            city:{
                value:'',
                id:'City',
                required:true
            },
            country:{
                value:'',
                id:'Country',
                required:true
            },
            zipCode:{
                value:'',
                id:'Zip Code',
                required:true
            },
        
    })


    useEffect(()=>{

        const getVendorDetails = async()=>{
            const response = await fetch(`/api/vendor/${vendorId}`)
            const data = await response.json();
            
           setVendor({
            name:data.vendor.name,
            bankName:data.vendor.bankName,
            bankAccountNo:data.vendor.bankAccountNo,
            addressLine1:data.vendor.addressLine1,
            addressLine2:data.vendor.addressLine2,
            city:data.vendor.city,
            country:data.vendor.country,
            zipCode:data.vendor.zipCode,
        })
        
    }
    if(vendorId){
        getVendorDetails();
    }

    },[vendorId])


    const updateVendor=async(e)=>{
        e.preventDefault();
        setSubmitting(true);
        if(!vendorId){
            return alert('Vendor Id not Found')
        }
        try{
            const response = await fetch(`/api/vendor/${vendorId}`,{
                method:'PATCH',
                body:JSON.stringify({
                    vendor:vendor,
                })
            })
            if(response.ok){
                router.push('/');
            }

        }catch(error){
            console.log(error);
        }finally{
            setSubmitting(false);
        }
    }
  return (
    <Form 
    type="Edit"
    post = {vendor}
    setPost = {setVendor}
    submitting ={submitting}
    handleSubmit = {updateVendor}
    />
  )
}

export default EditVendor
