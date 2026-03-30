import Banner from "./component/Banner"
import CallToAction from "./component/CallToAction"
import Footer from "./component/Footer"
import GetStarted from "./component/GetStarted"
import NavBar from "./component/NavBar"
import Pricing from "./component/Pricing"
import StatsSection from "./component/StatsSection"

function App() {
  

  return (
    <>
     <NavBar></NavBar>
     <Banner></Banner>
     <StatsSection></StatsSection>

     <GetStarted></GetStarted>
     <Pricing></Pricing>
     <CallToAction></CallToAction>
    <Footer></Footer>
    </>
  )
}

export default App
