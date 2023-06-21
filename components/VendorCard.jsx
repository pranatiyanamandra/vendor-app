'use client';
import Image from "next/image";
const VendorCard = ({post,handleEdit,handleDelete}) => {
  return (
    <div className="flex-1 break-inside-avoid rounded-lg border border-gray-300 bg-white/20 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter md:w-[360px] w-full h-fit">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex-justify-start items-center gap-3 cursor-pointer">
          <Image src="/assets/images/vendor.png"
          width={40}
          height={40}
          alt="vendor icon"
          className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{post.vendor.name.value}</h3>
            <p className="font-inter text-sm text-gray-500">{post.vendor.city.value}, {post.vendor.country.value}, {post.vendor.zipCode.value}</p>
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-700">
        Name: {post.vendor.name.value}
        <br/>
        Bank Name: {post.vendor.bankName.value}
        <br/>
        Bank Account Number: {post.vendor.bankAccountNo.value}
        <br/>
        Address: {post.vendor.addressLine1.value} {post.vendor.addressLine2.value} 
        <br/>
        City: {post.vendor.city.value}
        <br/>
        Country: {post.vendor.country.value}
        <br/>
        Zip Code: {post.vendor.zipCode.value}
      </p>
      
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent cursor-pointer"
          onClick={()=>{handleEdit(post)}}
          >Edit</p>
          <p className="font-inter text-sm bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent cursor-pointer"
          onClick={()=>{handleDelete(post)}}
          >Delete</p>
        </div>
      
    </div>
  ) 
}

export default VendorCard