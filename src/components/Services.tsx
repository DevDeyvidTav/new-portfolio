import { SiMaterialdesign } from "react-icons/si"
import { GiStoneCrafting } from "react-icons/gi"
import { MdOutlineComputer } from "react-icons/md"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export function Services() {
    useEffect(() => {
        Aos.init({ duration: 2000, easing: "ease-out" })
    })
    return (
        <div id="services" className="md:w-screen flex flex-col items-center w-full   md:max-w-full">

            <div className="md:max-w-[1140px] md:mx-auto">
                <h2 className="text-white text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold"
                >Services
                </h2>
                <div className="w-full items-center justify-center md:h-72 gap-5 text-3xl md:flex-row flex-col flex ">
                    <div data-aos="fade-up" className="bg-black flex flex-col justify-center text-white w-[90%] md:w-1/3 h-72 ">
                        <p className="w-full items-center gap-1 flex justify-center md:text-2xl "><span className="text-[#70F700]">
                            <SiMaterialdesign /></span>WebDesigner
                        </p>
                        <p className="w-full mt-5 text-base text-center">
                            I develop modern and elegant interfaces, using cutting edge technologies in the programming market.
                        </p>
                    </div>
                    <div data-aos="fade-down" className="bg-black flex flex-col justify-center text-white w-[90%] md:w-1/3 h-72 ">
                        <p className="w-full items-center gap-1 flex justify-center text-3xl md:text-2xl ">
                            <span className="text-[#70F700]"><GiStoneCrafting /></span>FullStack builds
                        </p>
                        <p className="w-full mt-5 text-base  text-center">development of complete applications with backend and database such as e-commerce, blogs and systems.</p>
                    </div>
                    <div data-aos="fade-up" className="bg-black flex flex-col justify-center text-white w-[90%] md:w-1/3 h-72 ">
                        <p className="w-full items-center gap-1 flex justify-center text-3xl md:text-2xl ">
                            <span className="text-[#70F700]"><MdOutlineComputer /></span>
                            Deploy
                        </p>
                        <p className="w-full mt-5 text-base  text-center">
                            deployment of web applications with free and private domains.
                        </p>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}