import React from 'react';
import photo from '@/assets/scandinavian-interior-mockup-wall-decal-background 1.png'


const Hero = () => {
 

  return (
  <div className="bg-center bg-cover w-full h-screen flex items-center justify-center md:justify-end px-4 md:px-14" style={{ backgroundImage: `url(${photo})` }}>
      <div className="w-full max-w-[640px] bg-white/70 flex flex-col items-start justify-center p-6 md:p-10 rounded-[10px] gap-4">
            <h2 className="text-sm md:text-lg font-semibold text-[#333333] tracking-[3px]">New Arrival</h2>
            <h1 className="text-3xl md:text-[52px] font-bold leading-[44px] md:leading-[65px] text-[#B88E2F]">Discover Our New Collection </h1>
            <p className="text-sm md:text-[18px] leading-[22px] md:leading-[24px] font-medium text-[#333333]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <button className="px-6 py-2 bg-[#B88E2F] text-white rounded">BUY Now</button>
      </div>
  </div>

  );
};

export default Hero;