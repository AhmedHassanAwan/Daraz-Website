


import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>

    
    </>
  )
}

export default Layout