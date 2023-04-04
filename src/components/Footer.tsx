import {SiNextdotjs} from "react-icons/si"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai"
import {BsCodeSlash} from "react-icons/bs"

export function Footer(){
    return(
        <div className="w-full h-72 text-white border-t mt-10 bg-black  border-[#70F700] shadow-2xl shadow-[#70F700]">
        <div className="md:max-w-[1140px] md:mx-auto max-w-full px-auto">
        <div className="px-5 w-full flex items-center  h-[90%]">
                <div className="w-1/3 flex items-center text-2xl uppercase font-bold">
                   Deyvid <span className="text-[#70F700]">Tav</span> <BsCodeSlash/> 
                </div>
                <div className="w-1/3 text-2xl">
                    <p>social networks</p>
                    <ul className="flex items-center">
                        <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/"><TiSocialLinkedinCircular className="w-10 h-10"/></a>
                        <a href="https://github.com/DevDeyvidTav"><AiFillGithub className="w-8 h-8"/></a>
                        <a href="https://wa.me/5581997210434"><AiOutlineWhatsApp className="w-8 h-8"/></a>
                        <a href="https://www.instagram.com/deyvid_tavar/"><AiOutlineInstagram className="w-8 h-8"/></a>
                    </ul>
                </div>
                <div className="text-2xl flex items-center gap-2 w-1/3">
                    produced by Deyvid Tavares with <SiNextdotjs className="w-8 h-8"/> 
                </div>
            </div>
            <div className="px-10">Copyright© 2022 Deyvid Tavares.</div>
        </div>
        </div>
    )
}