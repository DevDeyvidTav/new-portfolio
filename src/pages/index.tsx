import { AboutMe } from "../components/About-me"
import { Header } from "../components/Header"
import { HomeComponent } from "../components/Home"
import { Projects } from "../components/Projects"
import { Services } from "../components/Services"

export default function Home() {
  return (
    <div>
      <Header/>
      <HomeComponent/>
      <Services/>
      <AboutMe/>
      <Projects/>
    </div>
  )
}
