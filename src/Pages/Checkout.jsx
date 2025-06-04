



import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../Context/Context'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Config.js';



const Myswal =    withReactContent(Swal)
function Checkout() {
  const { cartItems, setCartItems } = useContext(ProductsContext)
  const navigate = useNavigate()



  useEffect(()=>{

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    
  } else {
    navigate('/login');
  }
});

  },[])

  // price calculations
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 200 : 0
  const tax = subtotal * 0.05
  const total = subtotal + tax + shipping

  // Increase quantity
  function handleIncrease(id) {
    const updatecart = cartItems.map(items => 
      items.id === id ? { ...items, quantity: items.quantity + 1} : items 
    );
    setCartItems(updatecart)
  };

  // Decrease quantity
  const handleDecrease = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    );
    setCartItems(updatedCart);
  };

  // Remove item
  function deletebtn(id) {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);

Myswal.fire({
   title: "Deleted!",
   text: "Cancel this order",
  icon: "success",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Cancel this order",
      icon: "success"
    });
  }
})
};

//handlePlaceOrder

function handlePlaceOrder(params) {

Swal.fire({
  title: "Order Placed Successfully!",
  text: "Thank you for shopping with us. Your order is on the way 🚚",
  icon: "success",
  width: 500,
  padding: "2em",
  color: "#333", // dark gray text
  background: "#fefefe", // soft white background
  backdrop: `
    rgba(0,0,0,0.3)
    url("https://i.gifer.com/ZZ5H.gif")  // optional loading gif
    center left
    no-repeat
  `
});



  
}

  return (
    <>
      {/* Daraz-style orange header */}
      <div className="bg-orange-500 py-2 px-4 text-white">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl font-bold">Checkout</h1>
        </div>
      </div>

      {/* Main content */}
      <section className="bg-gray-100 py-8">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left column - Cart items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded shadow p-4 mb-4">
                <h2 className="text-lg font-semibold mb-4">My Shopping Cart ({cartItems.length})</h2>
                
                {cartItems.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500">Your cart is empty</p>
                    <button 
                      onClick={() => navigate('/')}
                      className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex border-b pb-4">
                        <div className="w-24 h-24 bg-gray-200 rounded overflow-hidden mr-4">
                          <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-500">{item.brand}</p>
                          
                          <div className="flex items-center mt-2">
                            <span className="text-orange-500 font-bold">Rs. {(item.price * item.quantity).toFixed(2)}</span>
                           
                          </div>
                          
                          <div className="flex items-center mt-2">
                            <button 
                              onClick={() => handleDecrease(item.id)}
                              className="w-8 h-8 border rounded-l flex items-center justify-center"
                            >
                              -
                            </button>
                            <div className="w-10 h-8 border-t border-b flex items-center justify-center">
                              {item.quantity}
                            </div>
                            <button 
                              onClick={() => handleIncrease(item.id)}
                              className="w-8 h-8 border rounded-r flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <button 
                          onClick={() => deletebtn(item.id)}
                          className="text-gray-400 hover:text-red-500 cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right column - Order summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded shadow p-4 sticky top-4">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">Rs. {subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">Rs. {shipping.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (5%):</span>
                    <span className="font-medium">Rs. {tax.toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t pt-3 mt-3 flex justify-between">
                    <span className="font-semibold">Total:</span>
                    <span className="text-orange-500 font-bold text-lg">Rs. {total.toFixed(2)}</span>
                  </div>
                </div>

                <button

                  onClick={handlePlaceOrder}
                  disabled={cartItems.length === 0}
                  className={`w-full mt-6 py-3 rounded font-medium cursor-pointer  ${
                    cartItems.length === 0 
                      ? 'bg-gray-300 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  Place Order
                </button>

                <div className="mt-4 text-center">
                  <button 
                    onClick={() => navigate('/')}
                    className="text-orange-500 hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Checkout;