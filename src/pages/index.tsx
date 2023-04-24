import { AboutMe } from "../components/About-me"
import { Contacts } from "../components/Contacts"
import { Header } from "../components/header-pc/Header"
import { HomeComponent } from "../components/Home"
import { Projects } from "../components/Projects/Projects"
import { Services } from "../components/Services"
import { ChakraProvider } from '@chakra-ui/react'
import { HeaderMob } from "../components/HeaderMob"
import { DrawerProvider } from "../context/DrawerContext"
import { useState } from "react"
import { Footer } from "../components/Footer"


export default function Home() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  return (
      <div className="w-screen overflow-hidden lg:w-screen max-w-full ">
        <ChakraProvider>
        <DrawerProvider value={{openDrawer,setOpenDrawer}}>
          <Header />
          <HeaderMob />
          <HomeComponent />
          <Services />
          <AboutMe />
          <Projects />
          <Contacts />
          <Footer />
        </DrawerProvider>
        </ChakraProvider>
      </div>


  )
}
