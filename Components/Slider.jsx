import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const images = [
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/9cb1a4418dfd0451.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/7bbc181dd3fbfb6a.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/3b8351d48612fe3d.jpg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/a5ed7d0f7008d602.jpeg?q=80",
  "https://rukminim2.flixcart.com/fk-p-flap/1620/270/image/1482d20068a6469d.jpg?q=80"
];

function Slider() {
  return (
    <div className="w-full mt-0 p-0 m-0">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="w-full h-48 sm:h-68 md:h-80 lg:h-96 object-cover  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
