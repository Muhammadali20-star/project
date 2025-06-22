import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserOutlined, SearchOutlined, HeartOutlined, ShoppingCartOutlined, MenuOutlined, CloseOutlined} from '@ant-design/icons';
import photo from '@/assets/vite.svg'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()


  return (
    <header className="container mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2" onClick={()=> navigate('/')}>
          <img src={photo} alt="logo" className="w-10 h-10" />
          <h2 className="text-3xl font-bold">Furniro</h2>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <CloseOutlined className="text-2xl" />
            ) : (
              <MenuOutlined className="text-2xl" />
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center gap-16">
          <nav className="flex gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
          <div className="flex gap-6">
            <UserOutlined className="text-[22px]" />
            <SearchOutlined className="text-[22px]" />
            <HeartOutlined className="text-[22px]" />
            <ShoppingCartOutlined className="text-[22px]" />
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
}
