import { SiMaterialdesign } from "react-icons/si"
import { GiStoneCrafting } from "react-icons/gi"
import { MdOutlineComputer } from "react-icons/md"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export function Services() {
    useEffect(() => {
        Aos.init({ duration:500, easing: "ease-out" })
    })
    return (
        <div id="services" className="md:w-screen flex flex-col items-center w-full   md:max-w-full">

            <div className="md:max-w-[1140px] md:mx-auto">
                <h2 className="text-white text-3xl mb-10 w-full flex justify-start underline py-2 pl-20 font-bold"
                >O que faço?
                </h2>
                <div className="w-full items-center justify-center md:h-72 gap-5 text-3xl md:flex-row flex-col flex ">
                    <div data-aos="fade-up" className="bg-black flex flex-col justify-center text-white w-[90%] md:w-1/3 h-72 ">
                        <p className="w-full items-center gap-1 flex justify-center md:text-2xl "><span className="text-[#70F700]">
                            <SiMaterialdesign /></span>WebDesigner
                        </p>
                        <p className="w-full mt-5 text-base text-center">
                        Desenvolvo interfaces modernas e elegantes, utilizando tecnologias de ponta no mercado de programação.
                        </p>
                    </div>
                    <div data-aos="fade-down" className="bg-black flex flex-col justify-center text-white w-[90%] md:w-1/3 h-72 ">
                        <p className="w-full items-center gap-1 flex justify-center text-3xl md:text-2xl ">
                            <span className="text-[#70F700]"><GiStoneCrafting /></span>FullStack builds
                        </p>
                        <p className="w-full mt-5 text-base  text-center">desenvolvimento de aplicações completas com back-end e banco de dados.</p>
                    </div>
                    <div data-aos="fade-up" className="bg-black flex flex-col justify-center text-white w-[90%] md:w-1/3 h-72 ">
                        <p className="w-full items-center gap-1 flex justify-center text-3xl md:text-2xl ">
                            <span className="text-[#70F700]"><MdOutlineComputer /></span>
                            Deploy
                        </p>
                        <p className="w-full mt-5 text-base  text-center">
                        implantação de aplicações web e mobile.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}