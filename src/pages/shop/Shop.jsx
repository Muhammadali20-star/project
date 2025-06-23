import { useProduct } from "@/api/hooks/useProduct";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Pagination } from "antd";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate()
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    if(pageS !== pageSize){
      params.set("pageSize", pageS)
      params.set("page", "1")
    }else{
      params.set("page", page)
    }
    setParams(params)
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 mt-10">
        {data?.data?.products?.map((product) => (
          <div key={product.id} className="bg-white shadow-md flex flex-col justify-end">
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
      <div>
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default Shop;
