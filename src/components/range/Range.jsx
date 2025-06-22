import React from 'react'
import photo from '@/assets/Image-living room.png'
import photo2 from '@/assets/Mask Group (16).png'
import photo3 from '@/assets/Mask Group (17).png'

const Range = () => {
  return (
    <div className='container mx-auto mt-20'>
  <div className='text-center mb-10 flex flex-col gap-2'>
    <h2 className='text-[32px] text-[#333333] leading-100% font-bold'>Browse The Range</h2>
    <p className='text-[20px] text-[#666666] leading-100% font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] text-center'>
    <div className='flex flex-col gap-3'>
      <img src={photo} alt="" />
      <h2 className='text-2xl text-[#333333] leading-100% font-semibold'>Dining</h2>
    </div>
    <div className='flex flex-col gap-3'>
      <img src={photo2} alt="" />
      <h2 className='text-2xl text-[#333333] leading-100% font-semibold'>Living</h2>
    </div>
    <div className='flex flex-col gap-3'>
      <img src={photo3} alt="" />
      <h2 className='text-2xl text-[#333333] leading-100% font-semibold'>Bedroom</h2>
    </div>
  </div>
</div>
  )
}

export default Range