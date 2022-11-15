import {BsCodeSlash} from "react-icons/bs"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillGithub, AiOutlineWhatsApp, AiFillInstagram, AiOutlineInstagram} from "react-icons/ai"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'

export function HomeComponent(){
    useEffect(() => {
        Aos.init({duration: 2000, easing:"ease-out"})
    })
    return (
        <div className="text-white text-xl flex w-screen h-screen max-w-full overflow-hidden">
            <div data-aos="fade-right" className="textLeft w-[50%] pl-64 pt-40">
                <p>
                    Hello i'm a 
                </p>
                <p className="flex gap-1 items-center text-3xl font-bold">
                    <span className="text-[#70F700]">Front-End</span>
                      Developer
                      <span className="text-[#70F700] font-black">< BsCodeSlash/></span>
                </p>
                <p className="pt-10 pl-4 text-2xl">connect with me! </p>
                <div className="flex  gap-4 items-center ">
                <TiSocialLinkedinCircular className="w-12 h-12 text-[#70F700]"/>
                <AiFillGithub className="w-10 text-[#70F700] h-10"/>
                <AiOutlineWhatsApp className="w-10 text-[#70F700] h-10"/>
                <AiOutlineInstagram className="w-10 text-[#70F700] h-10"/>
                </div>
                <p className="pt-10">I'm <span className="font-black text-2xl">Deyvid Tavares</span>, a programming fanatic who aims to improve the user experience with the website.</p>
                <button className=" bg-[#70F700] shadow-md shadow-[#70F700] px-2 py-1 rounded text-xl mx-16 mt-10">See my CV</button>

            </div>
            <div data-aos="fade-left" className="textRight w-[50%] pl-64 pt-40">
                <img className="w-64 h-72 rounded  border border-[#70F700]" src="/Deyvid.jpg" alt="" />
            </div>
        </div>
    )
}