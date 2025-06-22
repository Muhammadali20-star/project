import { useProduct } from '@/api/hooks/useProduct';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import React from 'react'
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const { getProduct } = useProduct();
  const navigate = useNavigate()
  


  const { data } = getProduct({ limit: 8 });
  return (
    <div className='container mx-auto mt-12'>
        <h2 className='text-[32px] text-center text-[#333333] leading-100% font-bold'>Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {data?.data?.products?.map((product) => (
            <div key={product.id} className='bg-white shadow-md flex flex-col justify-end'>
                <div className='relative px-2'>
                <img className='object-contain w-full h-full mx-auto' onClick={() => navigate(`/product/${product.id}`)} src={product.thumbnail} alt="" />
                <div className='absolute top-2 left-2 text-blue-600'>
                <HeartOutlined className='text-2xl' />
                </div>
                <div className='absolute top-2 right-2 text-blue-600'>
                <ShoppingCartOutlined className='text-2xl' /> 
                </div>
                </div>
                <div  className='bg-[#F4F5F7] rounded px-4 gap-2 pb-2 pt-2'>
                <h3><span className='font-bold'>Title:</span> {product.title}</h3>
                <h2><span className='font-bold'>Brand:</span> {product.brand}</h2>
                <h2><span className='font-bold'>Price:</span> ${product.price} USD</h2>
                </div>
            </div>
            ))}
        </div>
        <div className='border border-[#B88E2F] rounded py-2 text-center mt-8 w-60 mx-auto'>
        <button className='text-[#B88E2F] leading-150% font-semibold' onClick={()=> navigate("/shop")}>Show More</button>
        </div>
    </div>
  )
}

export default Products