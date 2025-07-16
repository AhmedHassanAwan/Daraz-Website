import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "../../Components/Slider";
import { ProductsContext } from "../../Context/Context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';


const MySwal = withReactContent(Swal);

const bannerImagesTop = [
  "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e549a027e172b730.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/25fc7992288d87ea.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/ee753b8c57dcf2a5.jpg?q=80",
];

const bannerImagesBottom = [
  "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/dae907fde916aee9.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/8a6e77d3822011e6.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/450/280/image/6e3c77252d2a8174.jpeg?q=80",
];

function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const { cartItems, setCartItems } = useContext(ProductsContext);
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const exists = cartItems.find((cartItem) => cartItem.id === item.id);

    if (exists) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
toast.success('Added to Cart! 🛒', {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await fetch("https://dummyjson.com/products?limit=24");
        const data1 = await res1.json();
        setProducts1(data1.products);

        const res2 = await fetch("https://dummyjson.com/products?limit=24&skip=80");
        const data2 = await res2.json();
        setProducts2(data2.products);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderProductCard = (item) => (
    <div
      key={item.id}
      className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.02] transform transition duration-300 hover:ring-2 hover:ring-blue-200"
    >
      <div className="w-full h-44 bg-gray-100 flex items-center justify-center">
        <img src={item.thumbnail} alt={item.title} className="h-40 object-contain p-2" />
      </div>

      <div className="p-3">
        <h2 className="text-sm font-medium text-gray-800 truncate">{item.title}</h2>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{item.description}</p>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-lg font-bold text-blue-700">₹{item.price}</span>
          <span className="text-sm text-gray-400 line-through">
            ₹{(item.price / (1 - item.discountPercentage / 100)).toFixed(0)}
          </span>
          <span className="bg-green-100 text-green-700 px-1.5 py-0.5 rounded text-xs font-semibold">
            {item.discountPercentage.toFixed(0)}% off
          </span>
        </div>

        <div className="mt-2 text-xs font-medium bg-yellow-100 text-yellow-800 w-max px-2 py-0.5 rounded">
          ⭐ {item.rating}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-2">
          <button
            onClick={() => handleAddToCart(item)}
            className="flex-1 bg-[#f7ca00] text-black text-xs font-semibold py-2 rounded hover:bg-[#f0b800] transition cursor-pointer"
          >
            Add to Cart
          </button>
          <button
            onClick={() => navigate(`/products/${item.id}`)}
            className="flex-1 border border-blue-500 text-blue-600 text-xs py-2 rounded hover:bg-blue-50 transition cursor-pointer"
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Slider />

<img
  className="w-full h-40 sm:h-52 md:h-72 lg:h-80 object-cover rounded-md mb-4"
  src="https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/157d3c8c56f97bb2.jpg?q=80"
  alt="banner"
/>


      <div className="flex flex-wrap justify-center gap-5 px-4 py-6">
        {bannerImagesTop.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Banner Top ${index + 1}`}
            className="w-full sm:w-[48%] lg:w-[31%] h-auto rounded-md shadow-sm"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products1.map(renderProductCard)}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-5 px-4 py-6">
        {bannerImagesBottom.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Banner Bottom ${index + 1}`}
            className="w-full sm:w-[48%] lg:w-[31%] h-auto rounded-md shadow-sm"
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products2.map(renderProductCard)}
        </div>
      </div>
       <ToastContainer />
    </>
  );
}

export default Home;
