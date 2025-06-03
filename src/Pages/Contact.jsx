



import React from 'react'

function Contact() {
  return (

    <>
    

  <h1 className="mt-16 ml-5 text-6xl sm:text-7xl font-extrabold text-purple-950 tracking-wide font-serif drop-shadow-md">
  Contact
</h1><br /><br />



  <div className="flex flex-col md:flex-row items-center justify-around gap-10 px-4 py-8">
  {/* Media Card */}
  <div className="w-full md:w-[400px] rounded-lg overflow-hidden shadow-lg">
    <div className="bg-orange-500 px-4 py-6 text-white">
      <h2 className="text-lg font-bold">Media</h2>
      <h6 className="text-sm">media@daraz.com</h6>
    </div>
    <img
      src="https://daraz.com/wp-content/uploads/2021/12/Daraz-Team-Member-768x512.jpg"
      alt="Daraz Team"
      className="w-full h-100  max-w-2xl    object-cover"
    />
  </div>

  {/* Form Section */}
  <div className="w-full md:w-[400px]">
    <h6 className="text-3xl sm:text-2xl font-extrabold text-purple-950 tracking-wide font-serif mb-6 text-center md:text-left">
      Leave us a message
    </h6>

    <input
      type="text"
      placeholder="Enter your name"
      className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
    />

    <input
      type="email"
      placeholder="Email"
      className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
    />

    <input
      type="tel"
      placeholder="Phone"
      className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
    />

    <textarea
      rows="5"
      placeholder="Message"
      className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4 resize-none"
    ></textarea>

    <p className="text-sm text-gray-600 mb-4">
      By clicking the Submit button you agree to our Privacy Policy
    </p>

    <button className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition-all">
      Submit
    </button>
  </div>
</div>


  <h1 className="mt-16 ml-5 text-6xl sm:text-7xl font-extrabold text-purple-950 tracking-wide font-serif drop-shadow-md">
  Our head offices
</h1><br />

<div className="flex flex-wrap justify-center items-start gap-6 px-4 py-6">
  {/* Hero Box 1 */}
  <div className="w-full md:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden border">
    <div className="flex flex-col lg:flex-row items-center p-4 gap-4">
      <img
        src="https://daraz.com/wp-content/uploads/2021/12/IMG_1788-scaled.jpg"
        className="w-full lg:w-1/2 rounded-lg object-cover"
      />
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-purple-900">Singapore</h2>
        <p className="text-sm py-2 text-gray-600">
          51 Bras Basah Rd, #01-21, Lazada One, Singapore 189554
        </p>
      <a 
  href="https://www.google.com/maps/place/Daraz+Singapore+Private+Limited/@1.297821,103.8502159,17z/data=!3m2!4b1!5s0x31da19ad3c7cab71:0x13c82b4c63bf0d52!4m6!3m5!1s0x31da191374955555:0xfd0fdf21d6fa3ead!8m2!3d1.297821!4d103.8502159!16s%2Fg%2F11mr2_z59l?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
  className="text-purple-700 font-medium flex items-center gap-1"
  target="_blank" 
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
    <path d="M4.146 4.854a.5.5 0 0 1 .708 0L8 7.999l3.146-3.145a.5.5 0 0 1 .708.708L8.707 8.707a1 1 0 0 1-1.414 0L4.146 5.562a.5.5 0 0 1 0-.708z"/>
  </svg>
  Open map
</a>

      </div>
    </div>
  </div>

  {/* Hero Box 2 */}
  <div className="w-full md:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden border">
    <div className="flex flex-col lg:flex-row items-center p-4 gap-4">
      <img
        src="https://daraz.com/wp-content/uploads/2023/04/Screenshot-2023-04-24-at-10.45.22-AM-300x189.png"
        className="w-full lg:w-1/2 rounded-lg object-cover"
      />
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-purple-900">Sri Lanka</h2>
        <p className="text-sm py-2 text-gray-600">
        Daraz Sri Lanka No. 100, Elvitigala Mawatha, Colombo 08, Sri Lanka
        </p>
        <a href="https://www.google.com/maps/place//@6.9055398,78.6574729,9z?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D" className="text-purple-700 font-medium flex items-center gap-1" 
    target="_blank" 
  rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16"><path d="M4.146 4.854a.5.5 0 0 1 .708 0L8 7.999l3.146-3.145a.5.5 0 0 1 .708.708L8.707 8.707a1 1 0 0 1-1.414 0L4.146 5.562a.5.5 0 0 1 0-.708z"/></svg>
          Open map
        </a>
      </div>
    </div>
  </div>
</div>

<div className="flex flex-wrap justify-center items-start gap-6 px-4 py-6">
  {/* Hero Box 1 */}
  <div className="w-full md:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden border">
    <div className="flex flex-col lg:flex-row items-center p-4 gap-4">
      <img
        src="https://daraz.com/wp-content/uploads/2021/12/Pakistan-Office-5-300x200.jpg"
        className="w-full lg:w-1/2 rounded-lg object-cover"
      />
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-purple-900">Pakistan</h2>
        <p className="text-sm py-2 text-gray-600">
      Jade E-Services Pakistan Pvt. Ltd., Daraz Head Office, 1st Floor, NASTP Silicone Building, Main Shahrah-e-Faisal, Karachi
        </p>
        <a href="https://www.google.com/maps/place/Daraz+Pakistan/@24.8095487,67.0319647,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33db9aaaaaa95:0x81da362a67133438!8m2!3d24.8095487!4d67.0319647!16s%2Fg%2F11f104pdf5?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"   className="text-purple-700 font-medium flex items-center gap-1" 
       target="_blank" 
  rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16"><path d="M4.146 4.854a.5.5 0 0 1 .708 0L8 7.999l3.146-3.145a.5.5 0 0 1 .708.708L8.707 8.707a1 1 0 0 1-1.414 0L4.146 5.562a.5.5 0 0 1 0-.708z"/></svg>
          Open map
        </a>
      </div>
    </div>
  </div>

  {/* Hero Box 2 */}
  <div className="w-full md:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden border">
    <div className="flex flex-col lg:flex-row items-center p-4 gap-4">
      <img
        src="https://daraz.com/wp-content/uploads/2022/01/DSC09151-scaled-e1642571963307-300x190.jpg"
        className="w-full lg:w-1/2 rounded-lg object-cover"
      />
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-purple-900">Nepal</h2>
        <p className="text-sm py-2 text-gray-600">
         Daraz Head Office, Rotary Complex, Thapathali, Kathmandu Metropolitan City, Ward No. 11, Nepal
        </p>
        <a href="https://www.google.com/maps/place/Daraz+Kaymu+Pvt.+Ltd./@27.7088254,85.2917959,14z/data=!4m6!3m5!1s0x39eb194f01d94fcd:0x8d9a56182c89c936!8m2!3d27.7196931!4d85.3281634!15sCgxkYXJheiBvZmZpY2WSARJlX2NvbW1lcmNlX3NlcnZpY2U?shorturl=1" 
      target="_blank" 
  rel="noopener noreferrer"
        className="text-purple-700 font-medium flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16"><path d="M4.146 4.854a.5.5 0 0 1 .708 0L8 7.999l3.146-3.145a.5.5 0 0 1 .708.708L8.707 8.707a1 1 0 0 1-1.414 0L4.146 5.562a.5.5 0 0 1 0-.708z"/></svg>
          Open map
        </a>
      </div>
    </div>
  </div>
</div>


 <div className="w-full md:w-[45%] bg-white shadow-lg rounded-lg overflow-hidden border ml-15">
    <div className="flex flex-col lg:flex-row items-center p-4 gap-4">
      <img
        src="https://daraz.com/wp-content/uploads/2022/01/DSC1249-300x169.jpg"
        className="w-full lg:w-1/2 rounded-lg object-cover"
      />
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-purple-900">Bangladesh</h2>
        <p className="text-sm py-2 text-gray-600">
       Asfia Tower, House-76, Block-E, Road-11, Banani, Dhaka-1213, Bangladesh
        </p>
        <a href="https://www.google.com/maps/place/Asfia+Tower/@23.7900789,90.4085361,17z/data=!3m1!4b1!4m5!3m4!1s0x3755c7e320970f2f:0x78b46ec73b35095d!8m2!3d23.7900789!4d90.4107248?shorturl=1"    className="text-purple-700 font-medium flex items-center gap-1 "
      target="_blank" 
  rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16"><path d="M4.146 4.854a.5.5 0 0 1 .708 0L8 7.999l3.146-3.145a.5.5 0 0 1 .708.708L8.707 8.707a1 1 0 0 1-1.414 0L4.146 5.562a.5.5 0 0 1 0-.708z"/></svg>
          Open map
        </a>
      </div>
    </div>
  </div>

    </>
  )
}

export default Contact