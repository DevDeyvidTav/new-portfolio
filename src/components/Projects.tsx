import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper";

import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-out" })
  })
  return (
    <div id="projects" className="flex flex-col w-full  md:max-w-full md:w-screen  items-center">
      <div className="text-white mt-10 text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">
        Projects
      </div>
      <Swiper
        data-aos="fade-left"
        style={{}}
        spaceBetween={30}
        centeredSlides={true
        }
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-2/3 flex justify-center items-center h-96"
      >
        <SwiperSlide
          className="bg-black w-full bg-coffeshop bg-no-repeat bg-cover flex items-end justify-center pb-8 h-96">
          <div
            className="flex gap-3 justify-center">
            <a href="http://coffee-shop-wheat.vercel.app">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Demo
              </button></a>

            <a href="https://github.com/DevDeyvidTav/CoffeeShop">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Code
              </button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-black w-full bg-nunesPizza bg-no-repeat bg-cover flex items-end justify-center pb-8 h-96">
          <div
            className="flex gap-3 justify-center">
            <a href="https://pizzaria-nine.vercel.app/">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Demo
              </button>
            </a>
            <a href="https://github.com/DevDeyvidTav/Pizzaria">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Code
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-black w-full bg-dtstore bg-no-repeat bg-cover flex items-end justify-center pb-8 h-96">
          <div
            className="flex gap-3 justify-center">
            <a href="https://my-e-commerce-nu.vercel.app/">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Demo
              </button>
            </a>
            <a href="https://github.com/DevDeyvidTav/My-E-commerce">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Code
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-black w-full bg-finances bg-no-repeat bg-cover flex items-end justify-center pb-8 h-96">
          <div
            className="flex gap-3 justify-center">
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:6999460049576169472/">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Demo
              </button>
            </a>
            <a href="https://github.com/DevDeyvidTav/Finances">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Code
              </button>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="bg-black w-full bg-pokedex bg-no-repeat bg-cover flex items-end justify-center 
        pb-8 h-96">
          <div
            className="flex gap-3 justify-center">
            <a href="https://pokedex-five-inky.vercel.app/">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Demo
              </button>
            </a>
            <a href="https://github.com/DevDeyvidTav/pokedex">
              <button
                className="bg-black text-white text-xl rounded-md hover:bg-[#70F700] hover:shadow-[#70F700] hover:shadow-2xl px-2 hover:duration-300">
                Code
              </button>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>

    </div>
  )
}