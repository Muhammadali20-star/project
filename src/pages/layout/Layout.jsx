import Hero from '@/components/hero/Hero'
import Range from '@/components/range/Range'
import Support from '@/components/support/Support'
import Footer from '@/layout/footer/Footer'
import Header from '@/layout/header/Header'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const {pathname} = useLocation()
  return (
    <>
      <Header/>
      <Hero />
      <Range />
      <main className='min-h-[80vh]'>
        <Outlet/>
      </main>
     <Support/>
      <Footer/>
    </>
  )
}

export default React.memo(Layout)