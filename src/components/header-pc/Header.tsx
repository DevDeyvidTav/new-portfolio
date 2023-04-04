import {BsCodeSlash} from "react-icons/bs"
import {BiMenuAltRight} from "react-icons/bi"
import { useDrawerValue } from "../../context/DrawerContext"



export function Header() {
    const { openDrawer, setOpenDrawer } = useDrawerValue()
    return(
        <div  className="bg-[#121111] z-30 fixed w-full px-6 md:max-full md:w-screen h-20 md:h-14 text-white  text-lg shadow-lg shadow-[#2c2c2c] md:max-w-full">
           <div className="md:max-w-[1140px] md:mx-auto h-full flex justify-between items-center">
           <a className="flex text-2xl items-center uppercase font-bold " href="#">Deyvid<span className="text-[#70F700] font-black">Tav</span><BsCodeSlash/></a> 
            <ul className="md:flex hidden items-center gap-32 ">
                <li><a className="nav hover:duration-500 hover:text-[#70F700]" href="#services">Services</a></li>
                <li><a className="nav hover:duration-500 hover:text-[#70F700]" href="#about">About-me</a></li>
                <li><a className="nav hover:duration-500 hover:text-[#70F700]" href="#projects">Projects</a></li>
                <a href="#contacts"><button className=" bg-[#70F700] shadow-md hover:border-2 hover:border-white hover:bg-transparent border-2 border-transparent hover:duration-500 px-2 py-1 rounded" >Contact</button></a>
            </ul>
            <p onClick={() => setOpenDrawer(true)} className="cursor-pointer md:hidden ">
                <BiMenuAltRight className="w-12 h-12"/>
            </p>
            </div> 
        </div>
    )
}