



import React, { useState } from 'react';
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  function btn() {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);




     toast.success('Meassge Send   Successfully 🎉', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
            });

    // Clear the form
    setname("");
    setemail("");
    setphone("");
    setmessage("");
  }

  return (
    <>
      <h1 className="mt-16 ml-5 text-6xl sm:text-7xl font-extrabold text-[#2a55e5] tracking-wide font-serif drop-shadow-md">
        Contact
      </h1><br /><br />

      <div className="flex flex-col md:flex-row items-center justify-around gap-10 px-4 py-8">
        {/* Media Card */}
        <div className="w-full md:w-[400px] rounded-lg overflow-hidden shadow-lg">
          <div className="bg-[#2a55e5] px-4 py-6 text-white">
            <h2 className="text-lg font-bold">Media</h2>
            <h6 className="text-sm">media@daraz.com</h6>
          </div>
          <img
            src="https://storiesflistgv2.blob.core.windows.net/stories/2018/06/customersupportnumber_banner1.jpg"
            alt="Daraz Team"
            className="w-full h-100 max-w-2xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-[400px]">
          <h6 className="text-3xl sm:text-2xl font-extrabold text-[#2a55e5] tracking-wide font-serif mb-6 text-center md:text-left">
            Leave us a message
          </h6>

          <input
            value={name}
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setname(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a55e5] mb-4"
          />

          <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a55e5] mb-4"
          />

          <input
            value={phone}
            type="tel"
            placeholder="Phone"
            onChange={(e) => setphone(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a55e5] mb-4"
          />

          <textarea
            value={message}
            rows="5"
            placeholder="Message"
            onChange={(e) => setmessage(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a55e5] mb-4 resize-none"
          ></textarea>

          <p className="text-sm text-gray-600 mb-4">
            By clicking the Submit button you agree to our Privacy Policy
          </p>

          <button
            className="w-full bg-[#2a55e5] text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-all cursor-pointer"
            onClick={btn}
          >
            Submit
          </button>
        </div>
      </div>
           <ToastContainer />
    </>
  );
}

export default Contact;
