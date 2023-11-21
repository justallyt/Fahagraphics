import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import Nudge from "../components/Nudge"
import ServicesSection from "../components/ServicesSection"
import Shop from "../components/Shop"
import Testimonials from "../components/Testimonials"
import WhatWeDo from "../components/WhatWeDo"
import Navbar from "../components/navigation/Navbar"
import '../css/home.css'

const Home = () => {
  return (
       <>
              <div className="landing">
                      <Navbar />
                    <HeroSection />
             </div>
             <AboutSection />
            <WhatWeDo />
            <Shop />
            <ServicesSection />
            <Testimonials />
            <Nudge />
            <Footer />
       </>
  )
}

export default Home