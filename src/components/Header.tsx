import {BsCodeSlash} from "react-icons/bs"
import {BiMenuAltRight} from "react-icons/bi"
import { useDrawerValue } from "../context/DrawerContext"
export function Header() {
    const { openDrawer, setOpenDrawer } = useDrawerValue()
    return(
        <div onClick={() => setOpenDrawer(true)} className="bg-[#2c2c2c] z-30 fixed px-20 w-full md:max-full md:w-screen h-20 md:h-14 text-white flex items-center justify-between text-lg shadow-lg shadow-[#2c2c2c] md:max-w-full">
           <a className="flex text-2xl items-center uppercase font-bold " href="#">Deyvid<span className="text-[#70F700] font-black">Tav</span><BsCodeSlash/></a> 
            <ul className="md:flex hidden items-center gap-9 ">
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About-me</a></li>
                <li><a href="#projects">Projects</a></li>
                <a href="#contacts"><button className=" bg-[#70F700] shadow-md shadow-[#70F700] px-2 py-1 rounded" >Contact</button></a>
            </ul>
            <p className="cursor-pointer md:hidden ">
                <BiMenuAltRight className="w-12 h-12"/>
            </p>
            
            
        </div>
    )
}