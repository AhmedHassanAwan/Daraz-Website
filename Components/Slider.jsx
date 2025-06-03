



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

function Slider() {
  return (
    <div style={{ width: "100%", padding: "0", margin: "0" , marginTop:"0%" }}> 
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        // style={{ width: "100%", height: "400px" }} 
         className="w-full"
      >
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/8fcd3c63-312c-4549-877c-f8d95a7c0c82_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 1"
            className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/cf04fd73-832b-4936-9fa9-fc2225893593_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 2"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/8d2127ef-bfd3-4c2b-8ec5-d03cbd73d012_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/891cefff-15d8-4a00-b376-e1f9fb4c7676_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/bbb7eea6-c6f0-471d-ab8b-b96151ddffce_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/4733e3a6-c9cc-45a4-910b-98fcd780e3ab_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/d8eee01e-5137-430e-9445-c1250160eeb8_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/5e67938a-cf54-4123-b297-b8d44bca9e04_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/c53a1d3e-c517-4143-964d-f6399891e2c9_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/1bc8796f-5497-44e8-9389-8f2ebef143c6_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
          <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/60942fd6-a84a-4bd9-9b1b-8f5b12f7ac74_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
          <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/e6c5ad43-556e-4e4a-83e0-cd690767c2e1_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
          <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/1844f9c7-529b-4098-be3c-ed265d092630_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
          <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/ff6bde9c-9201-49fd-856d-b29e8b922183_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/3b0ec7e6-3ad0-4fd0-b267-f2fd6d041168_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/8d2127ef-bfd3-4c2b-8ec5-d03cbd73d012_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/7886c125-4854-4f67-892c-a80f25b187e5_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/e54bd524-7307-4527-817b-31c2091e5264_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>
         <SwiperSlide>
          <img
            src="https://img.lazcdn.com/us/domino/45fd426f-7879-485a-8e83-a8572e0e73e1_PK-1976-688.jpg_2200x2200q80.jpg_.webp"
            alt="Image 3"
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover"
          />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Slider;
