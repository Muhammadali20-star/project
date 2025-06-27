import Support from "@/components/support/Support";
import { decrementCart, incrementCart, removeCart } from "@/redux/features/cart";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
import HeroShop from "../shop/hero-shop/HeroShop";
import { useNavigate } from "react-router-dom";
  
  const Cart = () => {
    const cart = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    return (
      <>
      <HeroShop/>
      <h2 className=" container mx-auto font-bold text-2xl leading-100%">cart</h2>
      {
        cart.length ?
        <div className="container mx-auto px-4 py-10 mb-12">
            <div className="max-w-[840px] h-12 flex justify-around  items-center rounded bg-[#F9F1E7]">
                <h2 className="text-[#000000] leading-100% font-medium">Product</h2>
                <h2 className="text-[#000000] leading-100% font-medium">Price</h2>
                <h2 className="text-[#000000] leading-100% font-medium">Quantity</h2>
                <h2 className="text-[#000000] leading-100% font-medium">Subtotal</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                {cart.map((product) => (
                    <div key={product.id} className="flex gap-4 items-center mt-10 p-4 rounded-lg bg-white">
                    <img src={product.thumbnail} alt={product.title} className="w-24 h-24 bg-[#F9F1E7] object-contain rounded-lg"/>
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg">{product.title}</h3>
                        <p className="text-gray-500">${product.price} x {product.quantity}</p>
                        <div className="flex items-center gap-3 mt-2">
                        <button className="px-2 py-1 border rounded disabled:opacity-30" disabled={product.quantity <= 1} onClick={() => dispatch(decrementCart(product))}>-</button>
                        <span className="px-3">{product.quantity}</span>
                        <button className="px-2 py-1 border rounded" onClick={() => dispatch(incrementCart(product))}>+</button>
                        <button className="ml-auto text-red-500 hover:underline" onClick={() => dispatch(removeCart(product))}>Delete</button>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
    
                <div className="bg-[#F9F1E7] flex flex-col gap-4 border border-[#F9F1E7] p-6 rounded-lg  h-96">
                <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
                <div className="flex justify-between mb-2 text-gray-700">
                    <span>Subtotal</span>
                    <span>${cart.reduce((sum, item) => Math.floor(sum + (item.price * item.quantity)) , 0)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${cart.reduce((sum, item) => Math.floor(sum + (item.price * item.quantity)) , 0)}</span>
                </div>
                <div className="mt-12 w-[200px] bg-[#F9F1E7] mx-auto text-center ">
                <button onClick={()=> navigate("/checkout")} className="text-[#000000] border border-[#000000] py-3 px-8 rounded-[15px]">Check Out</button>
                </div>
                </div>
            </div>
        </div>
        :
        <div className="container mx-auto">empty</div>
      }
      
      <Support/>
      </>
    );
  };
  
  export default React.memo(Cart);
  