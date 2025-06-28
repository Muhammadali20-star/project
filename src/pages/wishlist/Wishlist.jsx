import Products from '@/components/products/Products';
import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value)
  console.log(wishlist);
  
  return (
    <>
    <div className='container mx-auto'>
      {
        wishlist.length ?
        <Products data={wishlist}/>
        :
        <div className='grid place-items-center mt-80'>
          <h2 className='font-bold'>Tanlanganlarda hozircha hech narsa yoʻq</h2>
          <p className='text-[14px]'>Yoqqan mahsulotlarni saqlab qo‘ying, keyin ularni uzoq qidirishga to‘g‘ri kelmaydi.</p>
        </div>
      }
    </div>
    </>
  )
}

export default React.memo(Wishlist)