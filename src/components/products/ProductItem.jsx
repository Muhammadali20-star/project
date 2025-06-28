import React from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleWishlist
} from "@/redux/features/wishlist";
import {
  addToCart,
  incrementCart,
  decrementCart,
  removeCart,
} from "@/redux/features/cart";
import { useNavigate } from "react-router-dom";

const ProductItem = (product) => {
  const navigate = useNavigate();
  const { id, title, brand, price, thumbnail } = product;
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const cartItem = cart.find((item) => item.id === id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleIncrease = () => {
    dispatch(incrementCart(product));
  };

  const handleDecrease = () => {
    if (cartItem.quantity === 1) {
      dispatch(removeCart(product));
    } else {
      dispatch(decrementCart(product));
    }
  };

  return (
    <div className="rounded-2xl overflow-hidden bg-white">
      <div className="relative group">
        <img src={thumbnail} alt={title} onClick={() => navigate(`/products/${id}`)} className="w-full h-64 object-contain bg-gray-100 p-4"/>
        <button
          onClick={() => dispatch(toggleWishlist(product))}
          className="absolute top-3 right-3 text-xl bg-white shadow-md px-2 py-1 rounded-full"
        >
          {wishlist.some((item) => item.id === id) ? (
            <HeartFilled />
          ) : (
            <HeartOutlined />
          )}
        </button>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="text-xl font-bold text-gray-800">${price}</p>

        {cartItem ? (
          <div className="flex items-center justify-between mt-7 bg-gray-100 py-1 px-2 rounded-4xl">
            <button onClick={handleDecrease} className="w-7 h-7 flex items-center justify-center rounded text-xl font-bold">−</button>
              <span className="text-lg font-semibold">{cartItem.quantity}</span>
              <button onClick={handleIncrease} className="w-7 h-7 flex items-center justify-center rounded text-xl font-bold">+</button>
          </div>
        ) : (
          <button onClick={handleAddToCart} className="w-full mt-4 bg-[#B88E2F] text-white py-2 rounded-xl font-medium">Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
