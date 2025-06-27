import { Suspense } from '@/utils'
import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
const Layout = lazy(()=> import("./layout/Layout"))
const Home = lazy(()=> import("./home/Home"))
const Shop = lazy(()=> import("./shop/Shop"))
const Wishlist = lazy(()=> import("./wishlist/Wishlist"))
const Cart = lazy(()=> import("./cart/Cart"))
const Checkout = lazy(()=> import("./checkout/Checkout"))
const About = lazy(()=> import("./about/About"))
const Contact = lazy(()=> import("./contact/Contact"))
const Product = lazy(() => import('./product-detail/ProductDetail'));

const MainRouters = () => {
  return (
    <>
    {
      useRoutes([
        {path: "/", element:<Suspense><Layout/></Suspense>, children: [
          {path: "/", element:<Suspense><Home/></Suspense>},
          {path: "/shop", element:<Suspense><Shop/></Suspense> },
          {path: "/wishlist", element:<Suspense><Wishlist/></Suspense> },
          {path: "/cart", element:<Suspense><Cart/></Suspense> },
          {path: "/checkout", element:<Suspense><Checkout/></Suspense> },
          {path: "/about", element:<Suspense><About/></Suspense> },
          {path: "/contact", element:<Suspense><Contact/></Suspense> },
          {path: "/products/:id", element:<Suspense><Product/></Suspense> },
        ]},
      ])
    }
    </>
  )
}

export default React.memo(MainRouters)