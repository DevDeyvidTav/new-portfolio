import React, { useRef, useState } from "react";
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { ProjectBox } from "./ProjectBox";


export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-out" })
  })
  return (
    <div id="projects" className="md:max-w-full md:w-screen ">
      <div className="md:max-w-[1140px] md:mx-auto ">
        <div className="text-white mt-10 text-4xl mb-10 w-full bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">
          Projects
        </div>
        <div className="w-80 mx-auto h-auto md:grid-cols-3 md:w-full md:h-96 md:grid-rows-2 grid gap-4 ">
          <ProjectBox img="/finances.png"/>
          <ProjectBox img="/dtstore.png"/>
          <ProjectBox img="/pokedex.png"/>
          <ProjectBox img="/nunesPizza.png"/>
          <ProjectBox img="/coffeshop.png"/>
        </div>
      </div>
    </div>
  )
}