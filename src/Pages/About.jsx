




import React from 'react'

const About = () => {
  return (
    <>
     <div className="flex justify-center mt-3">
   <img
    className="h-44 sm:h-70 md:h-80 lg:h-88 w-full max-w-9xl"
    src="https://corporate.flipkart.net/assets/images/super-queens.png"
    alt=""
  />
</div>

<div className="flex flex-col lg:flex-row gap-8 px-6 py-10">
  {/* Left Side - Text Content */}
  <div className="lg:w-1/2 space-y-4">
    <img src="https://corporate.flipkart.net/assets/images/about-header-image.png" alt="" />

    <p className="text-gray-700 leading-6">
      The Flipkart Group is one of India’s leading digital commerce entities and includes group companies Flipkart, Myntra, Flipkart Wholesale, Flipkart Health+, and Cleartrip.
    </p>

    <p className="text-gray-700 leading-7">
      Started in 2007, Flipkart has enabled millions of sellers, merchants, and small businesses to participate in India's digital commerce revolution. With a registered customer base of more than 500 million, Flipkart's marketplace offers over 150 million products across 80+ categories.
    </p>

    <p className="text-gray-700 leading-7">
      Today, there are over 14 lakh sellers on the platform, including Shopsy sellers. With a focus on empowering and delighting every Indian by delivering value through technology and innovation, Flipkart has created lakhs of jobs in the ecosystem while empowering generations of entrepreneurs and MSMEs.
    </p>

    <p className="text-gray-700 leading-7">
      Flipkart is known for pioneering services such as Cash on Delivery, No Cost EMI and easy returns. In 2024, Flipkart also introduced the Flipkart UPI handle to further enhance its digital payment offerings for all customers and further India’s digital economy vision.
    </p>
  </div>

  {/* Right Side - Image */}
  <div className="lg:w-1/2 flex justify-center">
    <img
      src="https://corporate.flipkart.net/assets/images/about-office-image.png"
      alt="Flipkart Office"
      className="rounded-md w-full h-auto max-w-md object-cover"
    />
  </div>
</div>



<div className='mt-15 flex justify-center'>
  <img src="https://corporate.flipkart.net/assets/images/Purpose-Statement-creative.png" alt="" />
</div>



<div className='mt-15 '>
  <img src="https://corporate.flipkart.net/assets/images/kalyan-quote.png" alt="" />
</div>



<div className='mt-30'>
  <div className='flex justify-center'>
  <img  src="https://corporate.flipkart.net/assets/images/culture-logo.png" alt="" />
  </div>
<div className="flex items-center justify-center mt-5">
  
  <div className="text-black leading-8 space-y-2 text-center font-medium max-w-2xl ">
    <p>At Flipkart, we are dedicated to the cause of maximising for our customers,</p>
    <p>stakeholders and the planet. We achieve this when Flipsters maximise themselves </p>
    <p> on the dimensions of their own choice — be it their potential, impact, voice,</p>
    <p> influence, well-being, and more.</p>
  </div>

</div>

<div className='mt-10 m-5'>
  <img className='w-full' src="https://corporate.flipkart.net/assets/images/together.png" alt="" />
</div>



<div className="flex items-center justify-center mt-15">
  <div className="text-black leading-8 space-y-2 text-center font-medium max-w-5xl px-4">
    <p>We deliver this experience through our unique people-centric culture that’s based on our</p>
    <p>core values of Audacity, Bias for Action, Customer-First, Integrity and Inclusion and our 4</p>
    <p>promises — Leave a Mark through working on audacious challenges, Experiment Learn</p>
    <p>Grow through a self-owned career trajectories and continuous growth, Work With The</p>
    <p>Best in our inclusive high-performing teams, and Be Cared For through our employee-</p>
    <p>focused customisable benefits policies</p>

    <p className='mt-10'>In 2020, Flipkart was recognized as one of India’s Top Companies to Work For by Great</p>
    <p>Place to Work® Institute (India). Flipkart has been recognised among LinkedIn’s Top</p>
    <p>Companies in 2021, 2019, 2016 and also among Working Mother and Avatar’s 100 Best</p>
    <p>Companies for Women in India for the third year in a row.</p>
  </div>
</div>




















</div>
    </>
  )
}

export default About