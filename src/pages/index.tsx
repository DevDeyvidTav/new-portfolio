import { AboutMe } from "../components/About-me"
import { Contacts } from "../components/Contacts"
import { Header } from "../components/header-pc/Header"
import { HomeComponent } from "../components/Home"
import { Services } from "../components/Services"
import { ChakraProvider } from '@chakra-ui/react'
import { HeaderMob } from "../components/HeaderMob"
import { DrawerProvider } from "../context/DrawerContext"
import { useState } from "react"
import { Footer } from "../components/Footer"
import { TimeLine } from "../components/time-line"


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
          <TimeLine />
          <Contacts />
          <Footer />
        </DrawerProvider>
        </ChakraProvider>
      </div>


  )
}
