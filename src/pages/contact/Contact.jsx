import React from 'react'
import HeroShop from '../shop/hero-shop/HeroShop'
import { ClockCircleOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons'
import Support from '@/components/support/Support'

const Contact = () => {
  return (
    <>
    <HeroShop/>
    <main className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">Get In Touch With Us</h2>
        <p className="mt-2 text-gray-500 max-w-xl mx-auto"> For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <EnvironmentOutlined className="text-2xl mt-1 text-[#B88E2F]" />
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <PhoneOutlined className="text-2xl mt-1 text-[#B88E2F]" />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <ClockCircleOutlined className="text-2xl mt-1 text-[#B88E2F]" />
            <div>
              <h4 className="font-semibold text-lg">Working Time</h4>
              <p> Monday–Friday: 9:00 - 22:00 <br /> Saturday–Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div className='flex flex-col gap-4'>
            <label className="block text-sm font-medium">Your name</label>
            <input type="text" placeholder="Abc" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#B88E2F]"/>
          </div>
          <div className='flex flex-col gap-4'>
            <label className="block text-sm font-medium">Email address</label>
            <input type="email" placeholder="Abc@def.com" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#B88E2F]"/>
          </div>
          <div className='flex flex-col gap-4'>
            <label className="block text-sm font-medium">Subject</label>
            <input type="text" placeholder="This is an optional" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#B88E2F]"/>
          </div>
          <div className='flex flex-col gap-4'>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows={4} placeholder="Hi! I'd like to ask about..." className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-[#B88E2F]" />
          </div>
          <button type="submit" className="bg-[#B88E2F] text-white py-2 px-6 rounded">Submit</button>
        </form>
      </div>
    </main>
    <Support/>
    </>
  )
}

export default React.memo(Contact)