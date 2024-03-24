import { BsDot } from "react-icons/bs";



interface CardExperienceProps {

}


export function CardExperience() {
    return (
        <div className="w-full h-full">
            <div className="w-[90%] md:max-w-[1140px] mx-auto border-l-4 min-h-[calc(100vh-50px)] mt-10  border-[#70F700]">
                <div>
                    <div className="w-full items-center flex">
                        <BsDot className="text-9xl relative -left-10 sm:-left-[66px] lg:-left-16 text-[#70F700]" />
                        <p className="text-lg sm:-ml-[9px] md:-ml-20 -ml-16 font-bold text-[#70F700]">Desenvolvedor de sofware Ongold</p>
                        <p className="text-white md:ml-6 text-xs">Outubro 2023 - momento atual</p>
                    </div>
                    <ul className="w-[90%] -mt-5 lg:-mt-10 md:max-w-[1140px] mx-auto text-white">
                        <li>- Desenvolvimento e manutenção de aplicativos para Android e iOS</li>
                        <li>- Manutenção dos sistemas web</li>
                        <li>- Desenvolvimento back-end</li>
                        <li>- Testes unitários</li>
                    </ul>
                    <h3 className="w-[90%] mt-5 font-semibold md:max-w-[1140px] mx-auto text-[#70F700]">
                        Tecnologias:
                    </h3>
                    <ul className="w-[90%] grid grid-cols-2 md:flex md:flex-wrap md:gap-4 md:max-w-[1140px] mx-auto text-white">
                        <li>- Expo</li>
                        <li>- Kotlin</li>
                        <li>- React</li>
                        <li>- React native</li>
                        <li>- Node.js</li>
                        <li>- TypeScript</li>
                        <li>- Git</li>
                        <li>- Adonis.js</li>
                        <li>- mySQL</li>
                        <li>- Socket.io</li>
                        <li>- Css</li>
                        <li>- Jest</li>
                    </ul>
                </div>
                <div>
                    <div className="w-full items-center flex">
                        <BsDot className="text-9xl relative -left-9 sm:-left-[66px] lg:-left-16 text-[#70F700]" />
                        <p className="text-lg sm:-ml-[9px] md:-ml-20 -ml-12 font-bold text-[#70F700]">Desenvolvedor Freelancer Dra Luana Dourado</p>
                        <p className="text-white md:ml-6 text-xs">Janeiro 2024 - momento atual</p>
                    </div>
                    <ul className="w-[90%] -mt-5 lg:-mt-10 md:max-w-[1140px] mx-auto text-white">
                        <li>- Desenvolvimento de um painel de controle para um consultorio Odontológico</li>
                        <li>- Desenvolvimento web</li>
                        <li>- Desenvolvimento back-end</li>
                        <li>- Testes unitários</li>

                    </ul>
                    <h3 className="w-[90%] mt-5 font-semibold md:max-w-[1140px] mx-auto text-[#70F700]">Tecnologias:</h3>
                    <ul className="w-[90%] grid grid-cols-2 md:flex md:flex-wrap md:gap-4 md:max-w-[1140px] mx-auto text-white">
                        <li>- React</li>
                        <li>- Next.js</li>
                        <li>- Fastify.js</li>
                        <li>- Prisma.js</li>
                        <li>- Firebase</li>
                        <li>- Tailwind css</li>
                        <li>- postgreSQL</li>
                        <li>- Git</li>
                    </ul>
                </div>
                <div>
                    <div className="w-full items-center flex">
                        <BsDot className="text-9xl relative -left-9 sm:-left-[66px] lg:-left-16 text-[#70F700]" />
                        <p className="text-lg sm:-ml-[9px] md:-ml-20 -ml-12 font-bold text-[#70F700]">Desenvolvedor Ecommerce Colégio Terceiro milênio</p>
                        <p className="text-white md:ml-6 text-xs">Janeiro 2024 - momento atual</p>
                    </div>
                    <ul className="w-[90%] -mt-5 lg:-mt-10 md:max-w-[1140px] mx-auto text-white">
                        <li>- Desenvolvimento de ecommerce</li>
                        <li>- Desenvolvimento web</li>
                        <li>- Desenvolvimento back-end</li>
                        <li>- Testes unitários</li>

                    </ul>
                    <h3 className="w-[90%] mt-5 font-semibold md:max-w-[1140px] mx-auto text-[#70F700]">Tecnologias:</h3>
                    <ul className="w-[90%] grid grid-cols-2 md:flex md:flex-wrap md:gap-4 md:max-w-[1140px] mx-auto text-white">
                        <li>- React</li>
                        <li>- Next.js</li>
                        <li>- Fastify.js</li>
                        <li>- Prisma.js</li>
                        <li>- Firebase</li>
                        <li>- Tailwind css</li>
                        <li>- postgreSQL</li>
                        <li>- Git</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}