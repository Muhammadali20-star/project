import React from 'react';
import { useLocation } from 'react-router-dom';
import shopBg from '@/assets/hero.png';

const HeroShop = () => {
  const { pathname } = useLocation();

  let image = '';
  let title = '';
  let subtitle = '';

  if (pathname === '/shop') {
    image = shopBg;
    title = 'Shop';
    subtitle = 'Home > Shop';
  } else if (pathname === '/about') {
    image = shopBg;
    title = 'About';
    subtitle = 'Home > About';
  } else if (pathname === '/contact') {
    image = shopBg;
    title = 'Contact';
    subtitle = 'Home > Contact';
  } else if (pathname === '/cart') {
    image = shopBg;
    title = 'Cart';
    subtitle = 'Home > Cart';
  } else if (pathname === '/checkout') {
    image = shopBg;
    title = 'Checkout';
    subtitle = 'Home > Checkout';
  }

  return (
    <div className="w-full h-80 md:h-96 bg-cover bg-center flex items-center justify-center px-4 md:px-14" style={{ backgroundImage: `url(${image})` }}>
      <div className="text-center text-black  p-6 md:p-10 rounded-md max-w-[640px] w-full">
        <h1 className="text-2xl md:text-[52px] font-medium leading-100% text-[#000000]">{title}</h1>
        <p className="text-sm md:text-[18px] mt-2 text-[#333333]">{subtitle}</p>
      </div>
    </div>
  );
};

export default React.memo(HeroShop);
