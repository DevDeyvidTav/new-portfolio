//skills icon imports
import { IoLogoJavascript } from "react-icons/io"
import { SiTypescript, SiTailwindcss, SiStyledcomponents, SiPrisma, SiSqlite, SiFirebase, SiNextdotjs } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiSass, DiReact, DiNodejsSmall } from "react-icons/di"
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
        <div id="about" className="overflow-hidden w-full   md:max-w-full md:w-screen">
            <div className="md:max-w-[1140px] mx-auto w-full">
                <h2 className="text-white mt-10 text-4xl mb-10 w-full flex justify-start underline py-2 pl-10 lg:pl-20 font-bold">Sobre mim</h2>
                <div data-aos="fade-up" className="flex md:flex-row flex-col text-white justify-between w-full ">
                    <div className="md:text-xl md:w-1/2 w-full text-3xl">
                        Desde fevereiro de 2022, tenho me dedicado ao estudo de programação e venho desenvolvendo diversas habilidades
                        por meio dos desafios diários e de projetos pessoais. Ao longo desse período, aprendi várias tecnologias, tais
                        como React, Next.js, Node.js, Express, Prisma, SQLite, Firebase, JavaScript, TypeScript, CSS, Tailwind CSS,
                        Sass e Styled-components, entre outras. Atualmente, tenho 20 anos e trabalho como desenvolvedor freelancer
                        de páginas de destino, ao mesmo tempo em que continuo estudando e me atualizando com as novidades do mercado.
                    </div>
                    <div className="hidden md:flex">
                        <div className=" bg-gradient-to-b from-[#180962] to-[#A7558C] w-72 absolute right-0 top-2 rounded-3xl rounded-l-xl h-60"/>
                        <LazyLoadImage
                            width={300}
                            className="w-72 relative right-0 lg:-top-16  -top-10 md:h-72  lg:h-full border-white border-2 object-cover"
                            height={200}
                            src="/Deyvid.png"
                        />
                    </div>
                </div>
                <div className="text-white mt-10 text-4xl mb-10 w-full flex justify-start underline  py-2 pl-10 lg:pl-20 font-bold">
                    Minhas habilidades
                </div>
                <div data-aos="fade-up" className="w-full h-96 grid md:grid-cols-7 grid-cols-3 px-10 lg:px-0 gap-y-4">
                    <IoLogoJavascript
                        onClick={() => setSkillText("JavaScript é uma linguagem de programação interpretada por scripts de alto nível estruturada, multiparadigma, fraca dinamicamente tipada. Junto com HTML e CSS, JavaScript é uma das três principais tecnologias da World Wide Web.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiTypescript
                        onClick={() => setSkillText("TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona digitação estática opcional ao idioma.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <AiFillHtml5
                        onClick={() => setSkillText("HTML é uma linguagem de marcação usada na construção de páginas da web. Os documentos HTML podem ser interpretados pelos navegadores. A tecnologia é resultado da junção dos padrões HyTime e SGML. HyTime é um padrão para a representação estruturada de hipermídia e conteúdo baseado em tempo.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiTailwindcss
                        onClick={() => setSkillText("Tailwind CSS é uma estrutura CSS de código aberto. A principal característica desta biblioteca é que, ao contrário de outros frameworks CSS como o Bootstrap, ela não fornece uma série de classes predefinidas para elementos como botões ou tabelas.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiStyledcomponents
                        onClick={() => setSkillText("Basicamente, styled components é uma biblioteca que permite escrever código CSS dentro do JavaScript. Com ele, você pode criar sites bonitos e funcionais. Além disso, ganhe mais agilidade e precisão no desenvolvimento web.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiPrisma
                        onClick={() => setSkillText("O Prisma Client é um construtor de consultas fortemente tipadas e gerado automaticamente que pode ser usado para ler e gravar dados programaticamente em um banco de dados de dentro de um aplicativo Node. js ou TypeScript.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiSqlite
                        onClick={() => setSkillText("SQLite é uma biblioteca de linguagem C que implementa um banco de dados SQL embutido. Os programas que usam a biblioteca SQLite podem acessar bancos de dados SQL sem executar um processo DBMS separado.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiNextdotjs
                        onClick={() => setSkillText("Next.js é uma estrutura web de desenvolvimento front-end React de código aberto criada pela Vercel que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para aplicativos web baseados em React.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiCss3
                        onClick={() => setSkillText("Cascading Style Sheets é um mecanismo para adicionar estilo a um documento da web. O código CSS pode ser aplicado diretamente a tags ou contido em tags. Também é possível, ao invés de colocar a formatação dentro do documento, vincular a um arquivo CSS que contenha os estilos.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiSass
                        onClick={() => setSkillText("Sass é uma linguagem de folha de estilo inicialmente concebida por Hampton Catlin e desenvolvida por Natalie Weizenbaum. Após seus lançamentos iniciais, Weizenbaum e Chris Eppstein continuaram a estender Sass com SassScript, uma linguagem de script simples usada em arquivos Sass.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiReact
                        onClick={() => setSkillText("React é uma biblioteca front-end JavaScript de código aberto focada na criação de interfaces de usuário em páginas da web.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiNodejsSmall
                        onClick={() => setSkillText("Node.js é um software multiplataforma de código aberto, baseado no interpretador V8 do Google, que permite a execução de código JavaScript fora de um navegador da web.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <div className={`${skillText === "" ? "translate-y-[32rem]" : "translate-y-0"} duration-500 fixed shadow-2xl shadow-[#70F700] text-white w-[70%] h-full mx-10 md:mx-40 bg-black rounded-xl`}>
                        <div
                            className="w-full flex justify-end border-b  border-zinc-400">
                            <p
                                className="pr-2 cursor-pointer"
                                onClick={() => setSkillText("")}
                            >x
                            </p>
                        </div>
                        <p
                            className="px-2">
                            {skillText}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}