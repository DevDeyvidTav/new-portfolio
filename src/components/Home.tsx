import {BsCodeSlash} from "react-icons/bs"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillGithub, AiOutlineWhatsApp, AiFillInstagram, AiOutlineInstagram} from "react-icons/ai"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import Image from "next/image"


export function HomeComponent(){
    useEffect(() => {
        Aos.init({duration: 2000, easing:"ease-out"})
    })

    return (
        <div className="text-white text-xl justify-center lg:justify-start items-center lg:items-start flex w-full md:w-screen lg:flex-row flex-col-reverse md:h-screen md:max-w-full overflow-hidden">
            <div data-aos="fade-right" className="textLeft flex flex-col lg:items-start items-center w-[70%] lg:w-[50%] lg:pl-64 pt-20 lg:pt-36">
                <p>
                    Hello i am a 
                </p>
                <p className="flex gap-1 items-center text-3xl font-bold">
                    <span className="text-[#70F700]">Front-End</span>
                      Developer
                      <span className="text-[#70F700] font-black">< BsCodeSlash/></span>
                </p>
                <p className="pt-10 lg:pl-4 text-2xl">connect with me! </p>
                <div className="flex  gap-4 items-center ">
                <TiSocialLinkedinCircular className="w-12 h-12 text-[#70F700]"/>
                <AiFillGithub className="w-10 text-[#70F700] h-10"/>
                <AiOutlineWhatsApp className="w-10 text-[#70F700] h-10"/>
                <AiOutlineInstagram className="w-10 text-[#70F700] h-10"/>
                </div>
                <p className="pt-10">I am <span className="font-black text-center w-full text-2xl">Deyvid Tavares</span>, a programming fanatic who aims to improve the user experience with the website.</p>
                <button className=" bg-[#70F700] shadow-md md:mb-20 shadow-[#70F700] px-2 py-1 rounded text-xl mb-10 lg:mb-0 lg:mx-16 mt-10">See my CV</button>

            </div>
            <div data-aos="fade-left" className="textRigh  w-[40%] pt-10 lg:pl-64 lg:pt-40">
                <Image quality={100} className="lg:w-64 w-full mt-20 lg:mt-0 bg-[#70F700] shadow-2xl shadow-[#70F700] h-72 rounded-full " src="/Deyvid.png" alt="" />
            </div>
        </div>
    )
}