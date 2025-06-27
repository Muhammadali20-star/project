import { useQuery } from "@tanstack/react-query";
import { api } from "..";

export const useProduct = () => {
    const getProduct = (params) => useQuery({
        queryKey: ["product", params],
        queryFn: ()=> api.get("/products", {params}),
    })

    const getSearchProduct = (params) => useQuery({
        queryKey: ["product", params],
        queryFn: ()=> api.get("/products/search", {params}),
        enabled: !!params.q
    })

    const getProductByid = (id) => useQuery({
        queryKey: ['product', id],
        queryFn: () => api.get(`/products/${id}`).then(res => res.data), 
        enabled: !!id,
    })

    return {getProduct, getProductByid, getSearchProduct}
}