import React from 'react';
import photo from '@/assets/scandinavian-interior-mockup-wall-decal-background 1.png'


const Hero = () => {
 
  return (
    <div className='w-full h-[720px]' style={{ backgroundImage: `url(${photo})` }}>
    <div className='container mx-auto h-full flex items-center justify-end'>
      <div className='bg-[#FFFFFFB2] py-10 px-10 rounded-[10px] w-[700px]'>
        <p className='font-semibold text-[#333333]'>New Arrival</p>
        <h3 className='text-[52px] font-bold text-[#B88E2F]'>Discover Our New Collection</h3>
        <p className='text-[18px] font-medium text-[#333333] mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae molestiae quisquam qui, quaerat numquam explicabo?</p>
        <button className='font-bold text-white px-10 py-6 rounded bg-[#B88E2F]'>BUY NOW</button>
      </div>
    </div>
  </div>

  );
};

export default React.memo(Hero);