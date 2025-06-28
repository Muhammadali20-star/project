import React from "react";
import { useDispatch } from "react-redux";
import { decrementCart, incrementCart, removeCart } from "@/redux/features/cart";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 items-center mt-10 p-4 rounded-lg bg-white">
      <img src={product.thumbnail} alt={product.title} className="w-24 h-24 bg-[#F9F1E7] object-contain rounded-lg"/>
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-500">${product.price} x {product.quantity}</p>
        <div className="flex items-center gap-3 mt-2">
          <button
            className="px-2 py-1 border rounded disabled:opacity-30"
            disabled={product.quantity <= 1}
            onClick={() => dispatch(decrementCart(product))}
          >
            -
          </button>
          <span className="px-3">{product.quantity}</span>
          <button
            className="px-2 py-1 border rounded"
            onClick={() => dispatch(incrementCart(product))}
          >
            +
          </button>
          <button
            className="ml-auto text-red-500 hover:underline"
            onClick={() => dispatch(removeCart(product))}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
