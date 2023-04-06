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
                <h2 className="text-white mt-10 text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">About-me</h2>
                <div data-aos="fade-up" className="flex md:flex-row flex-col text-white justify-between w-full px-10">
                    <div className="md:text-xl md:w-1/2 w-full text-3xl">
                        Desde fevereiro de 2022, tenho me dedicado ao estudo de programação e venho desenvolvendo diversas habilidades
                        por meio dos desafios diários e de projetos pessoais. Ao longo desse período, aprendi várias tecnologias, tais
                        como React, Next.js, Node.js, Express, Prisma, SQLite, Firebase, JavaScript, TypeScript, CSS, Tailwind CSS,
                        Sass e Styled-components, entre outras. Atualmente, tenho 20 anos e trabalho como desenvolvedor freelancer
                        de páginas de destino, ao mesmo tempo em que continuo estudando e me atualizando com as novidades do mercado.
                    </div>
                    <div className="hidden md:flex">
                        <div className=" bg-gradient-to-b from-[#302f2f] w-72 to-[#555454] absolute right-0 top-2 rounded-3xl rounded-l-xl h-60"/>
                        <LazyLoadImage
                            width={300}
                            className="w-72 relative -right-10 lg:-top-16  -top-10 md:h-72  lg:h-full border-white border-2 object-cover"
                            height={200}
                            src="/Deyvid.png"
                        />
                    </div>
                </div>
                <div className="text-white mt-10 text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">
                    skills
                </div>
                <div data-aos="fade-up" className="w-full h-96 grid md:grid-cols-6 grid-cols-3 px-16  gap-y-4">
                    <IoLogoJavascript
                        onClick={() => setSkillText("JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language. Along with HTML and CSS, JavaScript is one of the three main technologies of the World Wide Web.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiTypescript
                        onClick={() => setSkillText("TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <AiFillHtml5
                        onClick={() => setSkillText("HTML is a markup language used in building web pages. HTML documents can be interpreted by browsers. The technology is the result of the junction between HyTime and SGML standards. HyTime is a standard for the structured representation of hypermedia and time-based content.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiTailwindcss
                        onClick={() => setSkillText("Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiStyledcomponents
                        onClick={() => setSkillText("Basically, styled components is a library that makes it possible to write CSS code inside JavaScript. With it, you can create beautiful and functional websites. In addition, gain more agility and precision in web development.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiPrisma
                        onClick={() => setSkillText("Prisma Client is an auto-generated, strongly typed query builder that can be used to programmatically read and write data to a database from within a Node. js or TypeScript.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiSqlite
                        onClick={() => setSkillText("SQLite is a C language library that implements an embedded SQL database. Programs using the SQLite library can access SQL databases without running a separate DBMS process.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiFirebase
                        onClick={() => setSkillText("Firebase is a set of hosting services for any type of application. Offers NoSQL and real-time hosting of databases, content, social authentication and notifications, or services such as a real-time communication server")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <SiNextdotjs
                        onClick={() => setSkillText("Next.js is an open source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and static website generation for React-based web applications.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiCss3
                        onClick={() => setSkillText("Cascading Style Sheets is a mechanism for adding style to a web document. CSS code can be applied directly to tags or contained within tags. It is also possible, instead of placing the formatting inside the document, to link to a CSS file that contains the styles.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiSass
                        onClick={() => setSkillText("Sass is a stylesheet language initially conceived by Hampton Catlin and developed by Natalie Weizenbaum. After their initial releases, Weizenbaum and Chris Eppstein continued to extend Sass with SassScript, a simple scripting language used in Sass files.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiReact
                        onClick={() => setSkillText("React is an open source JavaScript front-end library focused on creating user interfaces on web pages.")}
                        className="w-12 cursor-pointer h-12 text-white hover:shadow-2xl hover:bg-[#70F700] hover:duration-300 rounded-md hover:shadow-[#70F700] " />
                    <DiNodejsSmall
                        onClick={() => setSkillText("Node.js is an open source, cross-platform software, based on Google's V8 interpreter, that allows the execution of JavaScript code outside of a web browser.")}
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