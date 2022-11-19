//skills icon imports
import {IoLogoJavascript} from "react-icons/io"
import {SiTypescript, SiTailwindcss, SiStyledcomponents, SiPrisma, SiSqlite, SiFirebase, SiNextdotjs} from "react-icons/si"
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3, DiSass, DiReact, DiNodejsSmall} from "react-icons/di"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

export function AboutMe() {
    useEffect(() => {
        Aos.init({duration: 2000, easing:"ease-out"})
    })
    return (
        <div className="overflow-hidden w-full md:max-w-full md:w-screen">
            <h2 className="text-white mt-10 text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">About-me</h2>
            <div data-aos="zoom-out" className="text-xl text-white w-full px-10">
                I've been studying programming since February 2022, I've developed several skills with the challenges
                I face daily, with personal projects. During this period, I learned technologies such as react, next, node,
                express, prisma, sqlite, firebase, javascript, typescript, css, tailwind, sass, styled-components, among
                others. At the moment, I am 20 years old, I work as a freelance landing page developer and study new features
                that appear in the market.
            </div>
            <div className="text-white mt-10 text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">
                skills
            </div>
            <div data-aos="flip-left" className="w-full grid grid-cols-6 gap-y-4 px-20">
                <IoLogoJavascript className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <SiTypescript className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <AiFillHtml5 className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <SiTailwindcss className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <SiStyledcomponents className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <SiPrisma className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <SiSqlite className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <SiFirebase className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <SiNextdotjs className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <DiCss3 className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <DiSass className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <DiReact className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
                <DiNodejsSmall className="w-12 h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] "/>
            </div>
        </div>
    )
}