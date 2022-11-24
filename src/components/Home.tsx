import {BsCodeSlash} from "react-icons/bs"
import {TiSocialLinkedinCircular} from "react-icons/ti"
import {AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram} from "react-icons/ai"
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { LazyLoadImage } from "react-lazy-load-image-component";

export function HomeComponent(){
    useEffect(() => {
        Aos.init({duration: 2000, easing:"ease-out"})
    })

    return (
        <div id="#" className="text-white text-3xl lg:text-xl justify-center lg:justify-start items-center  lg:items-start flex w-full md:w-screen lg:flex-row flex-col-reverse md:h-screen md:max-w-full overflow-hidden">
            <div data-aos="fade-right" className="textLeft flex flex-col lg:items-start items-center w-[70%] lg:w-[50%] lg:pl-64 pt-20 lg:pt-36">
                <p>
                    Hello i am a 
                </p>
                <p className="flex gap-1 items-center text-4xl font-bold">
                    <span className="text-[#70F700] ">Front-End</span>
                      Developer
                      <span className="text-[#70F700] font-black">< BsCodeSlash/></span>
                </p>
                <p className="pt-10 text-4xl">connect with me! </p>
                <div className="flex gap-4 items-center ">
                <a href="https://www.linkedin.com/in/deyvid-tavares-37918b236/" ><TiSocialLinkedinCircular className="w-12 hover:w-15 hover:h-15 hover:duration-300 h-12 text-[#70F700]"/></a>
                <a href="https://github.com/DevDeyvidTav" ><AiFillGithub className="w-10 hover:w-11 hover:h-11 hover:duration-300 text-[#70F700] h-10"/></a>
                <a href="https://wa.me/5581997210434" ><AiOutlineWhatsApp className="w-10 hover:w-11 hover:h-11 hover:duration-300 text-[#70F700] h-10"/></a>
                <a href="https://www.instagram.com/deyvid_tavar/" ><AiOutlineInstagram className="w-10 hover:w-11 hover:h-11 hover:duration-300 text-[#70F700] h-10"/></a>
                </div>
                <p className="pt-10 text-center w-full flex justify-center flex-col lg:justify-start lg:text-start lg:text-2xl text-3xl">I am <span className="font-black lg:text-3xl text-4xl">Deyvid Tavares</span>, a programming fanatic who aims to improve the user experience with the website.</p>
                <a href="https://drive.google.com/drive/u/0/folders/1Mk_ZA8aQG_zk7vD1AD3VtV-9DBmO899I"><button className=" bg-[#70F700] shadow-md md:mb-20 shadow-[#70F700] lg:px-2 lg:py-1 rounded text-3xl lg:text-xl py-2 px-3 mb-10 lg:mb-0 lg:mx-16 mt-10">See my CV</button></a>

            </div>
            <div data-aos="fade-left" className="textRigh w-[30%] lg:w-[40%] pt-10 lg:pl-64 lg:pt-40">
                <LazyLoadImage width={1000} height={1000} className="lg:w-64 w-full mt-20 lg:mt-0 bg-[#70F700] shadow-2xl shadow-[#70F700] h-56 lg:h-72 rounded-full " src="/Deyvid.png" alt="" />
            </div>
        </div>
    )
}