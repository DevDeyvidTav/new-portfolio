import { AboutMe } from "../components/About-me"
import { Contacts } from "../components/Contacts"
import { Header } from "../components/Header"
import { HomeComponent } from "../components/Home"
import { Projects } from "../components/Projects"
import { Services } from "../components/Services"
import { ChakraProvider } from '@chakra-ui/react'


export default function Home() {
  return (
    <ChakraProvider>
      <div className="w-[700px] md:w-screen md:max-w-full ">
        <Header />
        <HomeComponent />
        <Services />
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
    </ChakraProvider>

  )
}
