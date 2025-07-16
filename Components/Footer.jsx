



import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#f4f4f6] dark:bg-gray-900 font-sans ">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Subscribe Section */}
          <div className="sm:col-span-2">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Stay updated with our latest offers!
            </h1>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border bg-white text-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="px-6 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2">
              <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline text-sm">Home</Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline text-sm">About</Link>
              <Link to="/filter" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline text-sm">Products</Link>
              <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline text-sm">Login</Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:underline text-sm">Contact</Link>
             
            </div>
          </div>

          {/* About Daraz */}
          <div className="lg:col-span-1">
            <h2 className="font-semibold text-gray-800 dark:text-white mb-4">About Us</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-4">
              FlipKart transformed online shopping in India since 2012, becoming the largest e-commerce platform with services across South Asia...
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* App Download Badges */}
          <div className="flex gap-3">
            <img 
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" 
              alt="Google Play" 
              className="h-10 object-contain"
            />
            <img 
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" 
              alt="App Store" 
              className="h-10 object-contain"
            />
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.facebook.com/darazpk" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" 
                alt="Facebook" 
                className="h-6 w-6"
              />
            </a>
            <a href="https://x.com/darazpk" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" 
                alt="Twitter" 
                className="h-6 w-6"
              />
            </a>
            <a href="https://www.instagram.com/darazpk/" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" 
                alt="Instagram" 
                className="h-6 w-6"
              />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-gray-300 text-center md:text-right">
            © {new Date().getFullYear()} Daraz Pakistan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;