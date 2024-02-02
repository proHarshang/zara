import { Swiper, SwiperSlide } from 'swiper/react';
import Women from '../components/Women'
import React, { useRef, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../index.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Home() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="HomeSwiper">
        <SwiperSlide><Women/></SwiperSlide>
        <SwiperSlide><Women/></SwiperSlide>
        <SwiperSlide><Women/></SwiperSlide>
        <SwiperSlide><Women/></SwiperSlide>
      </Swiper>
    </>
  );
}
