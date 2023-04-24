import React from "react";
import { SiNextdotjs } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";

export function Footer() {
  return (
    <div className="w-full h-auto md:h-72 text-white border-t mt-10 bg-black border-[#70F700] shadow-2xl shadow-[#70F700]">
      <div className="md:max-w-[1140px] mx-auto px-5">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between h-auto md:h-[90%] py-5 md:py-10">
          <div className="w-full md:w-1/3 flex items-center justify-center md:justify-start text-2xl uppercase font-bold">
            Deyvid <span className="text-[#70F700]">Tav</span> <BsCodeSlash />
          </div>
          <div className="w-full md:w-1/3 text-2xl mt-4 md:mt-0">
            <p className="text-center md:text-left">Redes sociais</p>
            <ul className="flex items-center justify-center md:justify-start">
              <li className="mx-3 md:mx-0">
                <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/">
                  <TiSocialLinkedinCircular className="w-10 h-10" />
                </a>
              </li>
              <li className="mx-3 md:mx-0">
                <a href="https://github.com/DevDeyvidTav">
                  <AiFillGithub className="w-8 h-8" />
                </a>
              </li>
              <li className="mx-3 md:mx-0">
                <a href="https://wa.me/5581997210434">
                  <AiOutlineWhatsApp className="w-8 h-8" />
                </a>
              </li>
              <li className="mx-3 md:mx-0">
                <a href="https://www.instagram.com/deyvid_tavar/">
                  <AiOutlineInstagram className="w-8 h-8" />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 text-2xl flex items-center justify-center md:justify-end gap-2 mt-4 md:mt-0">
            Desenvolvido por Deyvid Tavares com <SiNextdotjs className="w-8 h-8" />
          </div>
        </div>
        <div className="px-10 text-center md:text-left">Direitos reservados© 2022 Deyvid Tavares.</div>
      </div>
    </div>
  );
}