import {SiMaterialdesign} from "react-icons/si"
import {GiStoneCrafting } from "react-icons/gi"
import { MdOutlineComputer } from "react-icons/md"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


export function Services(){
    useEffect(() => {
        Aos.init({duration: 2000, easing:"ease-out"})
    })
    return(
        <div className="w-screen flex flex-col items-center max-w-full">
            <h2 className="text-white text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">Services</h2>
            <div  className="w-[95%] justify-center h-72 gap-5 flex ">
                <div data-aos="fade-up" className="bg-black flex flex-col justify-center text-white w-1/3 h-72 ">
                    <p className="w-full items-center gap-1 flex justify-center text-2xl "><span className="text-[#70F700]"><SiMaterialdesign/></span>WebDesigner</p>
                    <p className="w-full mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae nesciunt corrupti soluta, non dignissimos quis totam rerum corporis ut? Praesentium dolorem rerum consectetur repellendus, reiciendis earum labore aperiam commodi?</p>
                </div>
                <div data-aos="fade-down" className="bg-black flex flex-col justify-center text-white w-1/3 h-72 ">
                    <p className="w-full items-center gap-1 flex justify-center text-2xl "><span className="text-[#70F700]"><GiStoneCrafting/></span>FullStack builds</p>
                    <p className="w-full mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae nesciunt corrupti soluta, non dignissimos quis totam rerum corporis ut? Praesentium dolorem rerum consectetur repellendus, reiciendis earum labore aperiam commodi?</p>
                </div>
                <div data-aos="fade-up" className="bg-black flex flex-col justify-center text-white w-1/3 h-72 ">
                    <p className="w-full items-center gap-1 flex justify-center text-2xl "><span className="text-[#70F700]"><MdOutlineComputer/></span>Deploy</p>
                    <p className="w-full mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repudiandae nesciunt corrupti soluta, non dignissimos quis totam rerum corporis ut? Praesentium dolorem rerum consectetur repellendus, reiciendis earum labore aperiam commodi?</p>
                </div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}