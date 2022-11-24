import { AboutMe } from "../components/About-me"
import { Contacts } from "../components/Contacts"
import { Header } from "../components/Header"
import { HomeComponent } from "../components/Home"
import { Projects } from "../components/Projects"
import { Services } from "../components/Services"
import { ChakraProvider } from '@chakra-ui/react'
import { HeaderMob } from "../components/HeaderMob"
import { DrawerProvider } from "../context/DrawerContext"
import { useState } from "react"
import { Footer } from "../components/Footer"


export default function Home() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  return (
    <ChakraProvider>
      <div className="w-[800px] lg:w-screen md:max-w-full ">
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
      </div>
    </ChakraProvider>

  )
}
