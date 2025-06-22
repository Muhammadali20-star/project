import React from 'react'
import photo from '@/assets/trophy 1.svg'
import photo2 from '@/assets/guarantee.svg'
import photo3 from '@/assets/shipping.svg'
import photo4 from '@/assets/customer-support.svg'

const Support = () => {
  return (
    <div className='bg-[#FAF3EA] w-full flex items-center mt-12 h-72'>
        <div className='container mx-auto flex justify-between'>
         <div className='flex gap-2 items-center'>
            <img src={photo} alt="" />
            <div>
                <h2 className='text-2xl text-[#242424] leading-150% font-semibold'>High Quality</h2>
                <p className='text-[20px] text-[#898989] leading-150% font-medium'>crafted from top materials</p>
            </div>
         </div>

         <div className='flex gap-2 items-center'>
            <img src={photo2} alt="" />
            <div>
                <h2 className='text-2xl text-[#242424] leading-150% font-semibold'>High Quality</h2>
                <p className='text-[20px] text-[#898989] leading-150% font-medium'>crafted from top materials</p>
            </div>
         </div>

         <div className='flex gap-2 items-center'>
            <img src={photo3} alt="" />
            <div>
                <h2 className='text-2xl text-[#242424] leading-150% font-semibold'>High Quality</h2>
                <p className='text-[20px] text-[#898989] leading-150% font-medium'>crafted from top materials</p>
            </div>
         </div>

         <div className='flex gap-2 items-center'>
            <img src={photo4} alt="" />
            <div>
                <h2 className='text-2xl text-[#242424] leading-150% font-semibold'>High Quality</h2>
                <p className='text-[20px] text-[#898989] leading-150% font-medium'>crafted from top materials</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Support