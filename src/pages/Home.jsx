import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Women from '../components/Women'
import { useAppContext } from '../AppContext';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';

export default function Home() {

  const { activeSlide } = useAppContext();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeSlide);
    }
  }, [activeSlide]);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="HomeSwiper" ref={swiperRef} initialSlide={activeSlide}>
        <SwiperSlide><Women /></SwiperSlide>
        <SwiperSlide>asdas</SwiperSlide>
        <SwiperSlide><Women /></SwiperSlide>
        <SwiperSlide><Women /></SwiperSlide>
      </Swiper>
    </>
  );
}
