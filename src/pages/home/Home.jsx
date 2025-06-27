import { useProduct } from '@/api/hooks/useProduct'
import Hero from '@/components/hero/Hero'
import Products from '@/components/products/Products'
import Range from '@/components/range/Range'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const {getProduct} = useProduct()
  const {data, isLoading} = getProduct({limit: 8})
  
  return (
    <div>
      <Hero/>
      <Range/>
      <Products data={data?.data?.products} loading={isLoading} count={8}/>
      <div className='w-3xs h-12 mx-auto rounded text-center mt-4 border border-[#B88E2F] py-3'>
        <button onClick={()=> navigate('/shop')} className='text-[#B88E2F]'>Show more</button>
      </div>
    </div>
  )
}

export default React.memo(Home)