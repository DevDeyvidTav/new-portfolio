import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

export function Projects(){
    return(
        <div className="flex flex-col items-center">
             <div className="text-white mt-10 text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">
                Projects
            </div>
            <Swiper
            
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-2/3 flex justify-center items-center h-96"
      >
        <SwiperSlide className="bg-black w-full h-96">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-black w-full h-96">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-black w-full h-96">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-black w-full h-96">Slide 4</SwiperSlide>
      </Swiper>
      
        </div>
    )
}