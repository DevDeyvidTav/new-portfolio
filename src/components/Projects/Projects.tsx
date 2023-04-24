import React, { useRef, useState } from "react";
import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import { ProjectBox } from "./ProjectBox";


export function Projects() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-out" })
  })
  return (
    <div
      id="projects" className="md:max-w-full md:w-screen ">
      <div className="md:max-w-[1140px] md:mx-auto ">
        <div className="text-white mt-10 text-4xl mb-10 w-full underline py-2 pl-20 font-bold">
          Meus projetos
        </div>
        <div className="w-96 mx-auto h-auto md:grid-cols-3 md:w-full md:h-96 md:grid-rows-2 grid gap-4 ">
          <ProjectBox
            description="landing page para treinar design ux/ui apenas com react e tailwind"
            videoUrl="/kabab.mp4"
            title="Kabab foodmood"
            img="/kabab.png" 
            visit="https://kabab-food-mood.vercel.app/"/>
          <ProjectBox
            description="Projeto utilizando um sistema de contextApi para trocar informaçoes entre os componentes da loja e carrinho, o dtstore foi meramente para treinar minha lógica de programação, visto que não utilizei um banco de dados para salvar informações"
            videoUrl="/ecommerce.mp4"
            title="DtStore"
            img="/dtstore.png" 
            visit="https://my-e-commerce-nu.vercel.app/"/>
          <ProjectBox
            description="Meu primeiro projeto consumindo api, desenvolvi um sistemas de pokemons e materiaUI para estilizar"
            videoUrl="/pokedex.mp4"
            title="Pokedex"
            img="/pokedex.png" 
            visit="https://pokedex-five-inky.vercel.app/"/>
          <ProjectBox
            description="Mc Laren é um sistema de cardápio digital para delivery, no qual eu criei uma aplicação full-stack sozinho com next, axios, express, docker, postgres, entre outros..."
            videoUrl="/mclaren.mp4"
            title="Mc laren"
            img="/mclaren.png"
             />
          <ProjectBox
            description="Projeto utilizando Router dom, com react e tailwindcss"
            videoUrl="/teste.mp4"
            title="CoffeeShop"
            img="/coffeshop.png"
            visit="https://coffee-shop-wheat.vercel.app/" />
          <ProjectBox
            description="landing page criada com objetivo de ser portfolio para eu conseguir clientes com trabalho freelancer, foi desenvolvido com styled-components e react. Essa página mostra meu potencial de captar clientes para vender produtos e serviços com uma bela interface e bastante interatividade."
            videoUrl="/studydev.mp4"
            title="StudyDev"
            img="/studydev.png"
            visit="https://react-course-theta.vercel.app/" />

        </div>
      </div>
    </div>
  )
}