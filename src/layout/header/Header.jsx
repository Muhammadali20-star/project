import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import photo from '@/assets/vite.svg';
import { useSelector } from 'react-redux';
import { useProduct } from '@/api/hooks/useProduct';
import useDebounce from '@/hooks/useDebounce';

const Header = () => {
  const { getSearchProduct } = useProduct();
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState('');
  const navigate = useNavigate();

  const debouncedText = useDebounce(value, 500);
  const { data } = getSearchProduct({ q: debouncedText.trim() });

  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <header className="container mx-auto py-4 relative z-50 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <img src={photo} alt="logo" className="w-10 h-10" />
          <h2 className="text-3xl font-bold">Furniro</h2>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseOutlined className="text-2xl" /> : <MenuOutlined className="text-2xl" />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-16">
          <nav className="flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="flex gap-6 items-center">
            <UserOutlined className="text-[22px]" />
            <button onClick={() => setShowSearch(!showSearch)}>
              <SearchOutlined className="text-[22px]" />
            </button>

            {showSearch && (
              <div className="relative">
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Search..."
                  className="border px-3 py-1 rounded focus:outline-none w-[500px]"
                />
                {value && data?.data?.products?.length > 0 && (
                  <div className="absolute top-full mt-2 w-[500px] max-h-[300px] overflow-auto bg-white border border-gray-200 shadow z-50 rounded">
                    {data.data.products.map((product) => (
                      <div
                        key={product.id}
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="flex gap-3 items-center p-3 border-b last:border-none hover:bg-gray-100 cursor-pointer"
                      >
                        <img src={product.thumbnail} alt={product.title} width={50} />
                        <div>
                          <p className="font-semibold text-sm">{product.title}</p>
                        </div>
                        <p className="font-semibold text-sm">{product.price}$</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="relative">
              <HeartOutlined onClick={() => navigate('/wishlist')} className="text-[22px]" />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </div>

            <div className="relative">
              <ShoppingCartOutlined onClick={() => navigate('/cart')} className="text-[22px]" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col items-start gap-4 md:hidden">
          <nav className="flex flex-col gap-3 w-full">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/shop" onClick={() => setIsOpen(false)}>Shop</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </nav>
          <div className="flex gap-6 pt-2">
            <UserOutlined className="text-[22px]" />
            <SearchOutlined className="text-[22px]" />
            <HeartOutlined className="text-[22px]" />
            <ShoppingCartOutlined className="text-[22px]" />
          </div>
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
