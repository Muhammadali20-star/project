import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] mt-12 shadow-md border-t">
  <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div className='flex flex-col gap-4'>
      <h1 className="text-xl font-bold mb-2">Funiro.</h1>
      <p className="text-sm text-gray-600">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
    </div>
    <div className='flex flex-col gap-6'>
      <p className="font-semibold text-[#9F9F9F] text-sm  mb-2">Links</p>
      <h2 className="text-sm leading-100% font-medium text-[#000000]">Home</h2>
      <h2 className="text-sm leading-100% font-medium text-[#000000]">Shop</h2>
      <h2 className="text-sm leading-100% font-medium text-[#000000]">About</h2>
      <h2 className="text-sm leading-100% font-medium text-[#000000]">Contact</h2>
    </div>
    <div className='flex flex-col gap-6'>
      <p className="font-semibold text-[#9F9F9F] text-sm  mb-2">Help</p>
      <h2 className="text-sm leading-100% font-medium text-[#000000]">Payment Options</h2>
      <h2 className="text-sm leading-100% font-medium text-[#000000]">Returns</h2>
      <h2 className="text-sm leading-100% font-medium text-[#000000]">Privacy Policies</h2>
    </div>
    <div className='flex flex-col gap-4'>
      <p className="font-semibold text-[#9F9F9F] text-sm  mb-2">Newsletter</p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input type="text" placeholder="Enter Your Email Address" className="text-sm w-full sm:w-auto underline decoration-[3px]"/>
        <h2 className="text-[14px] underline decoration-[3px]">SUBSCRIBE</h2>
      </div>
    </div>
  </div>
</footer>
  )
}

export default React.memo(Footer)