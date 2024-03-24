import Image from "next/image"
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

export function AboutMe() {
    useEffect(() => {
        Aos.init({ duration: 500, easing: "ease-out" })
    })
    const [skillText, setSkillText] = useState('')
    return (
        <div id="about" className="overflow-hidden w-full ">
            <div className="md:max-w-[1140px] mx-auto w-full">
                <h2 className="text-white mt-10 md:text-3xl text-xl mb-10 w-full flex justify-start underline py-2 pl-10 lg:pl-20 font-bold">Sobre mim</h2>
                <div data-aos="fade-up" className="flex md:flex-row flex-col text-white justify-between w-full ">
                    <div className="md:text-xl md:w-[65%] w-[90%] md:mx-0 mx-auto text-md">
                        Olá, Me chamo Deyvid Tavares de Moura, sou desenvolvedor FullStack, estudante de Análise e Desenvolvimento de Sistemas na
                        universidade Estácio de sá.
                        Desde fevereiro de 2022, tenho me dedicado ao estudo de programação e venho desenvolvendo diversas habilidades
                        por meio dos desafios diários e de projetos pessoais. Ao longo desse período, aprendi várias tecnologias, que ajudaram a me tornar um ótimo desenvoledor
                        . Atualmente, tenho 22 anos e sou desevolvedor da Ongold tecnologia em Limoeiro-PE,
                         ao mesmo tempo em que continuo estudando e me atualizando com as novidades do mercado.
                    </div>
                    <div className="hidden md:flex">
                        <div className=" bg-gradient-to-b from-[#180962] to-[#A7558C] w-72 absolute right-0 top-2 rounded-3xl rounded-l-xl h-60" />
                        <Image
                            quality={100}
                            alt="Picture of the author"
                            width={300}
                            className="w-72 relative right-0 lg:-top-16  -top-10 md:h-72  lg:h-full border-white border-2 object-cover"
                            height={200}
                            src="/Deyvid.png"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}