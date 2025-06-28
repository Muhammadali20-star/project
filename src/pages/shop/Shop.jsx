import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import { Pagination } from "antd";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HeroShop from "./hero-shop/HeroShop";
import HeroInfo from "./hero-info/HeroInfo";
import Support from "@/components/support/Support";

const Shop = () => {
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams()
  const page = params.get("page") || 1
  const pageSize = params.get("pageSize") || 16
  

  const { data, isLoading } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

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
    <div>
      <HeroShop/>
      <HeroInfo/>
      <Products data={data?.data?.products} loading={isLoading} count={16}/>
      <div className="flex justify-center my-6">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
      <Support/>
    </div>
  );
};

export default React.memo(Shop);
