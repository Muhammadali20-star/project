import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import { Pagination } from "antd";
import React from "react";
import { useSearchParams } from "react-router-dom";
import HeroShop from "./hero-shop/HeroShop";
import HeroInfo from "./hero-info/HeroInfo";
import Support from "@/components/support/Support";
import './style.css'

const Shop = () => {
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  

  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

 

  const handleChangePage = (page, pageS) => {
    if(pageS !== pageSize){
      params.set("pageSize", pageS)
      params.set("page", "1")
    }else{
      params.set("page", page)
    }
    setParams(params)

    window.scrollTo(0, 0);
  };

  return (
    <div>
      <HeroShop/>
      <HeroInfo/>
      <Products data={data?.data?.products} loading={isLoading} count={16}/>
      <div className="flex justify-center my-10">
          <Pagination
            current={page}
            onChange={handleChangePage}
            total={data?.data?.total}
            pageSize={pageSize}
            showSizeChanger={false}
            className="custom-pagination"
          />
      </div>
      <Support/>
    </div>
  );
};

export default React.memo(Shop);
