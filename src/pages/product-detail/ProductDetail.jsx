import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";
import { useProduct } from '@/api/hooks/useProduct';
import Products from '@/components/products/Products';
const ProductDetail = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const { getProductByid } = useProduct(); 
  const { data } = getProductByid(id);
  const wishlist = useSelector((state) => state.wishlist.value);
  const { getProduct } = useProduct(id);
const { data: allProducts } = getProduct({ limit: 4, skip: 0 });


  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
        <div className="rounded-lg p-4 flex flex-col md:flex-row gap-6 items-center justify-center w-full">
          <div className="flex md:flex-col gap-4  max-w-full md:max-h-[400px]">
            {data?.images?.map((item, inx) => (
              <img onClick={() => setIndex(inx)} loading='lazy' src={item} className="w-20 h-20 md:w-24 md:h-24 px-2 bg-gray-300 rounded-[10px] object-cover" key={inx} alt="" />
            ))}
          </div>
          <img className="w-full max-w-xs md:w-96 h-auto md:h-[360px] px-2 bg-gray-300 rounded-[10px] object-contain" src={data?.images?.[index]} loading='lazy' alt=""/>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-bold text-[#333]">{data?.title}</h1>
          <p className="text-base md:text-lg text-[#555]"> Brand: <span className="font-medium">{data?.brand}</span> </p>
          <p className="text-xl md:text-2xl text-[#B88E2F] font-semibold">${data?.price} USD</p>
          <p className="text-sm md:text-base text-[#666] leading-6">{data?.description}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-[#B88E2F] text-white px-6 py-2 rounded hover:bg-[#a2781f] flex items-center gap-2" onClick={() => dispatch(addToCart(data))}><ShoppingCartOutlined /> Add to Cart </button>
            <button className="text-[#B88E2F] border border-[#B88E2F] px-6 py-2 rounded hover:bg-[#f9f2e7] flex items-center gap-2" onClick={() => dispatch(toggleWishlist(data))}><HeartOutlined /> Wishlist </button>
          </div>
        </div>
      </div>
      <Products data={allProducts?.data?.products} count={4} />
      <div className='w-3xs h-12 mx-auto rounded text-center mt-8 border border-[#B88E2F] py-3'>
        <button className='text-[#B88E2F]'>Show more</button>
      </div>
    </div>
  );
};

export default React.memo(ProductDetail);
