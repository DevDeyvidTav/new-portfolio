interface ProjectBoxProps{
    img: string,
    title?: string,
    description?: string
}

export function ProjectBox({img, title, description}: ProjectBoxProps){
    return (
        <div className="w-full md:w-auto bg-white">
            <img src={img} className="w-full h-full " alt="" />
            <div className="bg-project-gradient justify-center gap-4 flex-col flex opacity-0 hover:opacity-100 hover:duration-500 hover:transform w-full h-full bottom-full relative ">
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto  hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000">Código</button>
              <button
                className="px-4 py-2 rounded-md text-white font-bold bg-gradient-to-br from-[#70F700] to-[#00ff915e] w-40 mx-auto hover:from-[#00ff915e] hover:to-[#70F700] hover:duration-1000"
              >
                Demonstração
              </button>
            </div>
          </div>
    )
}