import { Header } from "../components/Header"
import { HomeComponent } from "../components/Home"
import { Services } from "../components/Services"

export default function Home() {
  return (
    <div>
      <Header/>
      <HomeComponent/>
      <Services/>
    </div>
  )
}
