import React from 'react'
import photo from '@/assets/Vector (20).svg'
import photo2 from '@/assets/Vector (21).svg'
import photo3 from '@/assets/Vector (22).svg'

const HeroInfo = () => {
  return (
    <div className='bg-[#F9F1E7] w-full h-auto md:h-32 mb-20 flex items-center py-4'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between gap-4 md:gap-0'>
        <div className='flex flex-wrap gap-4 items-center'>
          <div className='flex gap-2 items-center'>
            <img src={photo} alt="" />
            <p className='text-[16px] md:text-[20px] text-[#000000] font-normal'>Filter</p>
          </div>
          <div className='flex gap-2 items-center'>
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
          </div>
          <div className='flex gap-2 items-center'>
            <div className="w-[1px] h-[37px] bg-[#9F9F9F]" />
            <p className='text-[16px] md:text-[20px] text-[#000000] font-normal'>Showing 1–16 of 32 results</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-4 md:gap-8 items-center'>
          <div className='flex gap-2 items-center'>
            <h2 className='text-[16px] md:text-[20px] text-[#000000] font-normal'>Show</h2>
            <button className='w-12 h-10 md:h-12 text-[16px] md:text-[20px] text-[#9F9F9F] bg-white py-1 px-2'>16</button>
          </div>
          <div className='flex gap-2 items-center'>
            <h2 className='text-[16px] md:text-[20px] text-[#000000] font-normal'>Short by</h2>
            <button className='w-24 h-10 md:h-12 text-[16px] md:text-[20px] text-[#9F9F9F] bg-white py-1 px-2'>Default</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(HeroInfo)
