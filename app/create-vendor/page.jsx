'use client';
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreateVendor = () => {
    const router = useRouter();
    const {data:session} = useSession();
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
    const createVendor=async(e)=>{
        e.preventDefault();
        setSubmitting(true);
        try{
            const response = await fetch('/api/vendor/new',{
                method:'POST',
                body:JSON.stringify({
                    vendor:vendor,
                    userId:session.user.id,
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
    type="Create"
    post = {vendor}
    setPost = {setVendor}
    submitting ={submitting}
    handleSubmit = {createVendor}
    />
  )
}

export default CreateVendor
