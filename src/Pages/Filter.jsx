




import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { ProductsContext } from '../../Context/Context'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';



const MySwal = withReactContent(Swal);
function Filter() {

    const {filterdata} = useContext(ProductsContext)
    console.log(filterdata);
    const {cartItems, setCartItems} = useContext(ProductsContext);
    const navigate = useNavigate()


      function handleAddToCart(item) {
  // Check if item already exists in cart
  const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

  if (existingItem) {
    // Agar already hai to quantity badhao
    const updatedCart = cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
  } else {
    // Agar pehli dafa add ho raha hai to quantity 1 se start karo
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  }

  // Show SweetAlert
  MySwal.fire({
    title: 'Added to Cart! 🛒',
    text: `${item.title} has been added to your cart.`,
    icon: 'success',
    timer: 2000,
    showConfirmButton: false,
  });
}
    function buynow() {
  console.log("hellwo ");

  navigate("/checkout")
  
}
  return (
    <>




    <img className="w-full h-48 sm:h-70 md:h-80 lg:h-100 "src="https://blog.daraz.pk/wp-content/uploads/2022/12/12-12-KV-1-1024x585.jpg"  alt="" /><br /><br />




<div className="container mx-auto px-4 py-6">
  {filterdata &&
  filterdata.products &&
  filterdata.products.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filterdata.products.map((items, index) => (
        <div
          key={items.id}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={items.thumbnail}
            alt={items.title}
            className="w-full h-40 object-contain bg-gray-50 p-2"
          />

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
              {items.title}
            </h2>

            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {items.description}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <div className="text-md font-bold text-orange-600">
                ${items.price.toFixed(2)}
                <span className="text-sm text-gray-400 line-through ml-1">
                  $
                  {(
                    items.price /
                    (1 - items.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              </div>
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded">
                -{items.discountPercentage.toFixed(0)}%
              </span>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs">
              <span className="text-yellow-500 font-medium">
                ⭐ {items.rating}
              </span>
              <span
                className={`${
                  items.availabilityStatus === "In Stock"
                    ? "text-green-600"
                    : "text-red-600"
                } font-semibold`}
              >
                {items.availabilityStatus}
              </span>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row gap-2">
              <button   onClick={()=> handleAddToCart(items)}    className="flex-1 flex items-center justify-center bg-orange-500 text-white text-sm px-3 py-2 rounded-md hover:bg-orange-600 transition">
                <FaShoppingCart className="mr-1" /> Add to Cart
              </button>
              {/* <button
                onClick={() => navigate(`/products/${items.id}`)}
                className="flex-1 border border-orange-500 text-orange-500 text-sm px-3 py-2 rounded-md hover:bg-orange-100 transition"
              >
                See More
              </button> */}
                <button onClick={buynow} className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md font-medium">
                    Buy Now
                  </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-center py-20 text-gray-500 text-xl font-semibold">
      😕 No products found...
    </div>
  )}
</div>







    </>
  )
}

export default Filter