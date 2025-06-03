



import React, { useState } from 'react'
import { ProductsContext } from '../Context/Context'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


function App() {
  const [filterdata , setfilterdata] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <>

    <ProductsContext.Provider value={{filterdata , setfilterdata ,  cartItems, setCartItems }} >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </ProductsContext.Provider>
   
    </>
  )
}

export default App