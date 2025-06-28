import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeroShop from "../shop/hero-shop/HeroShop";
import Support from "@/components/support/Support";
import CartItem from "@/components/cart-item/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const navigate = useNavigate();

  return (
    <>
      <HeroShop />
      <h2 className="container mx-auto font-bold text-2xl">cart</h2>

      {cart.length ? (
        <div className="container mx-auto px-4 py-10 mb-12">
          <div className="max-w-[840px] h-12 flex justify-around items-center rounded bg-[#F9F1E7]">
            <h2 className="text-[#000000] font-medium">Product</h2>
            <h2 className="text-[#000000] font-medium">Price</h2>
            <h2 className="text-[#000000] font-medium">Quantity</h2>
            <h2 className="text-[#000000] font-medium">Subtotal</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              {cart.map((product) => (
                <CartItem key={product.id} product={product} />
              ))}
            </div>

            <div className="bg-[#F9F1E7] flex flex-col gap-4 border border-[#F9F1E7] p-6 rounded-lg h-96">
              <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Subtotal</span>
                <span>${cart.reduce((sum, item) => Math.floor(sum + item.price * item.quantity), 0)}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${cart.reduce((sum, item) => Math.floor(sum + item.price * item.quantity), 0)}</span>
              </div>
              <div className="mt-12 w-[200px] bg-[#F9F1E7] mx-auto text-center">
                <button onClick={() => navigate("/checkout")} className="text-[#000000] border border-[#000000] py-3 px-8 rounded-[15px]">Check Out</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto">empty</div>
      )}

      <Support />
    </>
  );
};

export default React.memo(Cart);
