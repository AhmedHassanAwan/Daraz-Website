import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Config.js';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


function Sign() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const [email , setemail]  = useState("")
  const [password , setpassward] = useState("")

  const navigate = useNavigate()


  function signup(e) {
    e.preventDefault()
    console.log(email);
    console.log(password);

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);

    toast.success('Sign up Successfully 🎉', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });

    setTimeout(() => {
      navigate('/Login');
    }, 2000);
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.error(errorMessage, {
      position: 'top-center',
      autoClose: 3000,
      theme: 'colored',
    });
  });


    
    
    
  }



  return (
    <>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img 
          className="mx-auto h-12 w-auto  " 
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
          alt="Flipkart Logo"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create Your Flipkart Account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join Daraz to enjoy faster checkout and exclusive deals
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-4" >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="py-3 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-[#2a55e5] focus:border-[#2a55e5]"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e)=> setemail(e.target.value) }
                  className="py-3 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-[#2a55e5]"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaPhone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  // value={formData.phone}
                  // onChange={handleChange}
                  className="py-3 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-[#2a55e5]"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength="6"
                  // value={formData.password}
               onChange={(e)=> setpassward(e.target.value)}
                  className="py-3 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-[#2a55e5]"
                  placeholder="Create a password (min 6 characters)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  // value={formData.confirmPassword}
                  // onChange={handleChange}
                  className="py-3 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-[#2a55e5]"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Delivery Address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="address"
                  name="address"
                  type="text"
                  required
                  // value={formData.address}
                  // onChange={handleChange}
                  className="py-3 pl-10 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-orange-500 focus:border-[#2a55e5]"
                  placeholder="Enter your delivery address"
                />
              </div>
            </div>

            <div className="flex items-start">
             
              
            </div>

            <div>
              <button
              onClick={signup}
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#2a55e5] hover:bg-[#2a55e5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a55e5] cursor-pointer "
              >
                CREATE ACCOUNT
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a  onClick={()=> navigate("/login")} className="font-medium text-[#2a55e5] hover:text-[#2a55e5] cursor-pointer   ">
               Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
           <ToastContainer />
    </>
  );
}

export default Sign;



