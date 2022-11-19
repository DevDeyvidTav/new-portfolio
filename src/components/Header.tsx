import {BsCodeSlash} from "react-icons/bs"
export function Header() {
    return(
        <div className="bg-[#2c2c2c] px-20 w-full md:max-full md:w-screen h-14 text-white flex items-center justify-between text-lg shadow-lg shadow-[#2c2c2c] md:max-w-full">
           <a className="flex text-2xl items-center uppercase font-bold " href="#">Deyvid<span className="text-[#70F700] font-black">Tav</span><BsCodeSlash/></a> 
            <ul className="md:flex hidden items-center gap-9 ">
                <li><a href="">Services</a></li>
                <li><a href="">About-me</a></li>
                <li><a href="">Projects</a></li>
                <button className=" bg-[#70F700] shadow-md shadow-[#70F700] px-2 py-1 rounded" >Contact</button>
            </ul>
            
        </div>
    )
}