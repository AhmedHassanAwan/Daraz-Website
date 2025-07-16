import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ProductsContext } from '../../Context/Context';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function Single() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const {cartItems, setCartItems} = useContext(ProductsContext);
  const params = useParams();
  const MySwal = withReactContent(Swal);

  const navigate = useNavigate()  



// addtocard
function handleAddToCart(item) {
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem
    );
    setCartItems(updatedCart);
  } else {
    setCartItems([...cartItems, { ...item, quantity }]);
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
}

//  buynow

function buynow() {
  console.log("hellwo ");

  navigate("/checkout")
  
}

 useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10  text-7xl "><span className="loading loading-spinner text-error"></span></div>;
  if (error) return <div className="text-center text-red-500 py-10"><div role="alert" className="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Error! Task failed successfully.</span>
</div></div>;


  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      {/* Top Banner */}
        <img 
        src='https://storiesflistgv2.blob.core.windows.net/stories/2020/08/StayHomeWithFlipkart_WinnerBanner_FKS.jpg'
          alt="promotional banner" 
          className="w-full h-auto max-h-120 object-cover"
        />

      {/* Main Product Section */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded shadow-sm p-4">
          {/* Breadcrumbs */}
          <div className="text-sm breadcrumbs mb-4 text-gray-500">
            <ul>
              <li>Home</li>   
              <li>Fashion</li>
              <li>Bags</li>
              <li>Shoulder Bags</li>
            </ul>
          </div>

          {/* Product Main Info */}
          {data && (
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Product Images */}
              <div className="lg:w-2/5">
                <div className="border rounded-lg p-2 mb-4">
                  <img 
                    src={data.images[selectedImage] || data.thumbnail} 
                    alt={data.title}
                    className="w-full h-80 object-contain"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {data.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${data.title} ${index + 1}`}
                      className={`w-16 h-16 object-cover border rounded cursor-pointer ${selectedImage === index ? 'border-orange-500' : 'border-gray-200'}`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:w-3/5">
                <h1 className="text-2xl font-semibold text-gray-800">{data.title}</h1>
                
                {/* Rating and Reviews */}
                <div className="flex items-center mt-2">
                  <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-blue-600 text-sm ml-1">{data.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-blue-600 text-sm ml-2">({data.reviews.length} Reviews)</span>
                  <span className="text-blue-600 text-sm ml-2">|</span>
                  <span className="text-blue-600 text-sm ml-2">{data.stock} Sold</span>
                </div>

                {/* Price Section */}
                <div className="mt-4 p-4 bg-gray-50 rounded">
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-orange-500">${(data.price).toFixed(2)}</span>
                    <span className="text-lg text-gray-500 ml-2 line-through">${(data.price / (1 - (data.discountPercentage / 100))).toFixed(2)}</span>
                    <span className="text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded ml-2">{data.discountPercentage}% OFF</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-600">
                    <span>Tax included.</span>
                  </div>
                </div>


                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <button onClick={()=> handleAddToCart(data)}   className="flex-1 bg-[#f7ca00] hover:bg-orange-600 text-white py-3 px-4 rounded-md font-medium flex items-center justify-center cursor-pointer">
                    Add to Cart
                  </button>
                  <button onClick={buynow} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md font-medium cursor-pointer">
                    Buy Now
                  </button>
                </div>

                {/* Delivery Info */}
                <div className="mt-6 border-t border-gray-200 pt-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div className="ml-2">
                      <span className="text-sm font-medium text-gray-700">Delivery</span>
                      <p className="text-sm text-gray-600">Free shipping for orders over $20. Expected delivery in 2-5 days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Description Section */}
        <div className="bg-white rounded shadow-sm p-6 mt-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Product Description</h2>
          <p className="text-gray-700">{data?.description}</p>
          
          <div className="mt-6">
            <h3 className="font-medium text-gray-800">Key Features:</h3>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Latest design shoulder and crossbody bags for women</li>
              <li>Medium-sized leather bag for everyday use</li>
              <li>Versatile for travel, work, and everyday activities</li>
              <li>Stylish and fashionable handbag for girls and women</li>
              <li>Suitable for carrying essentials with multiple compartments</li>
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-white rounded shadow-sm p-6 mt-4">
          <h2 className="text-xl font-semibold border-b pb-2 mb-4">Customer Reviews</h2>
          
          <div className="flex items-center mb-6">
            <div className="text-4xl font-bold mr-4">{data?.rating.toFixed(1)}</div>
            <div>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★★</div>
                <div className="w-32 h-2 bg-gray-200 rounded-full ml-2 overflow-hidden">
                  <div className="h-full bg-yellow-400" style={{ width: '80%' }}></div>
                </div>
                <span className="text-sm text-gray-500 ml-2">80%</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Based on {data?.reviews.length} reviews</div>
            </div>
          </div>
          
          {data?.reviews.map(review => (
            <div key={review.id} className="border-b border-gray-100 pb-4 mb-4">
              <div className="flex justify-between">
                <span className="font-medium">{review.user}</span>
                <div className="text-yellow-400 text-sm">{"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}</div>
              </div>
              <p className="text-gray-600 mt-1">{review.comment}</p>
              <div className="text-xs text-gray-400 mt-2">1 week ago</div>
            </div>
          ))}
        </div>
      </div>
    </div>
           <ToastContainer />
    </>
    
  );
}

export default Single;