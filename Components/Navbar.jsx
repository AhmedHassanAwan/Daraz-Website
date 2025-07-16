


import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";  
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../Context/Context";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [input , setinput] = useState("")
  const [loading , setloading] = useState(true)
  const [error , seterror] = useState(false)
  const [data , setdata] = useState(null)
  const navigate = useNavigate();

  const { setfilterdata, cartItems } = useContext(ProductsContext);



  function checkoutbtn() {
    console.log("hellow");

    navigate('checkout')
    
    
  }
  
  
  
  function btn() {
    console.log(input);

      fetch(`https://dummyjson.com/products/category/${input}`)
      .then((res)=> res.json())
      .then((res)=>{
        setfilterdata(res)
        console.log(res);
    setdata(res)
    navigate('filter')
      })
      .catch((err)=>{
        seterror(true)
        console.log(err)})
        .finally(()=>{
          console.log("finaly chal raha hay ");
          setloading(false);
          
        })


      
      }
      

  return (

    <nav className="bg-white text-black px-4 py-7  ">
 


      <div className="flex items-center justify-between">
        <img
        src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="Daraz logo"
          className="h-8 w-auto"
        />

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>


        <div className="hidden md:flex flex-1 mx-6">
          <div className="flex bg-[#f0f5ff] rounded overflow-hidden w-full">
            <input 
            onChange={(e)=> setinput(e.target.value)}
              type="text"
              placeholder="Search in FlipKart e.g smartphones,laptops"
              className="w-full px-4 py-2 text-black focus:outline-none"
            />
            <button onClick={btn} className="bg-[#2a55e5] px-4 flex items-center justify-center">
              <FaSearch className="text-white" />
            </button>
          </div>
        </div>

        {/* Desktop Right links */}
        <div className="hidden md:flex space-x-4 text-sm font-medium items-center">
          <Link to={'/'}  className="hover:underline"  > HOME</Link>
          <Link to={'about'} className="hover:underline" > ABOUT</Link>
          <Link to={'contact'}className="hover:underline" >CONTACT</Link>
          <Link to={'login'} className="hover:underline"> LOGIN</Link>
       <div className="relative">
        <div>


<div className="flex items-center gap-1 cursor-pointer" onClick={checkoutbtn}>
  <FaShoppingCart className="text-black text-xl" />
  <span className="text-black text-sm"> {cartItems?.length || 0}</span>
</div>

   



        </div>

</div>

        </div>
      </div>

      {/* Mobile search bar */}
      <div className="md:hidden mt-4">
        <div className="flex bg- bg-[#f0f5ff] rounded overflow-hidden w-full">
          <input
             onChange={(e)=> setinput(e.target.value)}
            type="text"
            placeholder="Search in FlipKart e.g smartphones,laptops"
            className="w-full px-4 py-2 text-black focus:outline-none"
          />
          <button onClick={btn}   className="bg-orange-500 px-4 flex items-center justify-center">
            <FaSearch className="text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="flex flex-col mt-4 space-y-2 text-sm font-medium items-center">
       
            <Link to={'/'} className="hover:underline">   HOME </Link>
          <Link to={'about'} className="hover:underline"> ABOUT </Link>
          <Link to={'contact'} className="hover:underline">  CONTACT  </Link>
          <Link to={'login'} className="hover:underline"> LOGIN </Link>
      <div className="flex items-center gap-1 cursor-pointer" onClick={checkoutbtn}>
  <FaShoppingCart className="text-black text-xl" />
  <span className="text-black text-sm"> {cartItems?.length || 0}</span>
</div>
        </div>
      )}
    </nav>
  );
}
