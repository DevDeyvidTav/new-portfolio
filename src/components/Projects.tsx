import React, { useRef, useState } from "react";
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'


export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000, easing: "ease-out" })
  })
  return (
    <div id="projects" className="md:max-w-full md:w-screen  ">
      <div className="md:max-w-[1140px] md:mx-auto ">
        <div className="text-white mt-10 text-4xl mb-10 w-full bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">
          Projects
        </div>
        <div className="w-80 mx-auto h-[85vh] md:grid-cols-3 md:w-full md:h-56 grid gap-4 ">
          <div className="w-full md:w-auto bg-white">
            <img src="/pokedex.png" className="w-full h-full " alt="" />
            <div className="bg-project-gradient justify-center gap-4 flex-col flex opacity-0 hover:opacity-100 hover:duration-500 hover:transform w-full h-full bottom-full relative ">
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto  hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000">Código</button>
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000"
              >
                Demonstração
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto bg-white">
            <img src="/pokedex.png" className="w-full h-full " alt="" />
            <div className="bg-project-gradient justify-center gap-4 flex-col flex opacity-0 hover:opacity-100 hover:duration-500 hover:transform w-full h-full bottom-full relative ">
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto  hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000">Código</button>
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000"
              >
                Demonstração
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto bg-white">
            <img src="/pokedex.png" className="w-full h-full " alt="" />
            <div className="bg-project-gradient justify-center gap-4 flex-col flex opacity-0 hover:opacity-100 hover:duration-500 hover:transform w-full h-full bottom-full relative ">
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto  hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000">Código</button>
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000"
              >
                Demonstração
              </button>
            </div>
          </div>
        </div>
        <div className="w-80 mx-auto h-[85vh] md:grid-cols-3 md:w-full md:h-56 grid gap-4 ">
          <div className="w-full md:w-auto bg-white">
            <img src="/pokedex.png" className="w-full h-full " alt="" />
            <div className="bg-project-gradient justify-center gap-4 flex-col flex opacity-0 hover:opacity-100 hover:duration-500 hover:transform w-full h-full bottom-full relative ">
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto  hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000">Código</button>
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000"
              >
                Demonstração
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto bg-white">
            <img src="/pokedex.png" className="w-full h-full " alt="" />
            <div className="bg-project-gradient justify-center gap-4 flex-col flex opacity-0 hover:opacity-100 hover:duration-500 hover:transform w-full h-full bottom-full relative ">
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto  hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000">Código</button>
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000"
              >
                Demonstração
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto bg-white">
            <img src="/pokedex.png" className="w-full h-full " alt="" />
            <div className="bg-project-gradient justify-center gap-4 flex-col flex opacity-0 hover:opacity-100 hover:duration-500 hover:transform w-full h-full bottom-full relative ">
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto  hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000">Código</button>
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000"
              >
                Demonstração
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}