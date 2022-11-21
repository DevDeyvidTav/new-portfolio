import { useDrawerValue } from "../context/DrawerContext"


export function HeaderMob() {
    const { openDrawer, setOpenDrawer } = useDrawerValue()
    return (
        <div className={`${openDrawer ? "translate-x-0" : "-translate-x-full"} duration-500 fixed flex z-50 w-full h-full`}>
            <div className="bg-[#2c2c2c] flex flex-col  w-3/4 h-full">
                <p className="w-full h-14 border-b-2 pt-10 border-zinc-400 text-white text-5xl flex pb-40 pl-8">
                    Let is build something together
                    <p  
                        onClick={() => setOpenDrawer(false)}
                        className="pr-8">
                        x
                    </p>
                </p>


                <ul className="flex gap-20 mt-20 flex-col text-white text-5xl items-center  ">
                    <li><a onClick={() => setOpenDrawer(false)} href="#services">Services</a></li>
                    <li><a onClick={() => setOpenDrawer(false)} href="#about">About-me</a></li>
                    <li><a onClick={() => setOpenDrawer(false)} href="#projects">Projects</a></li>
                    <a onClick={() => setOpenDrawer(false)} href="#contacts"><button className=" bg-[#70F700] shadow-md shadow-[#70F700] px-2 py-1 rounded" >Contact</button></a>
                </ul>

            </div>
            <div className="bg-black opacity-60 w-1/4">

            </div>
        </div>
    )
}