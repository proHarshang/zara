import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

import '../index.css';

// import required modules
import { EffectCreative, Mousewheel } from 'swiper/modules';
import FooterSlide from './FooterSlide';

export default function Women() {
  return (
    <>
      <div className='w-[100vw] overflow-y-hidden h-[100vh] fixed top-0 left-0'>
        <Swiper
          effect={'creative'}
          creativeEffect={{
            prev: {
              translate: [0, "0%", 0],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
          modules={[EffectCreative, Mousewheel]}
          mousewheel={{
            invert: false, // Set to true if you want to invert the mousewheel direction
          }}
          direction="vertical"
          className="WomenSwiper"
        >
          <SwiperSlide><img src="women/w1.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><img src="women/w2.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><img src="women/w3.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><img src="women/w4.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><img src="women/w5.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><img src="women/w6.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><img src="women/w7.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><img src="women/w8.jpg" className='h-full w-full object-cover' /></SwiperSlide>
          <SwiperSlide><FooterSlide /></SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
