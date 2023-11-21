import Navbar from "../components/navigation/Navbar"
import "../css/services.css"
import serviceHero from "../assets/servicehero.jpg"
import ServiceBody from "../components/ServiceBody"
import Footer from "../components/Footer"
const Services = () => {
  return (
    <>
           <Navbar />
           <div className="services-hero">
                       <div className="inner-row">
                                <div className="services-hero-content">
                                          <h1 data-aos='fade-down'>What We Do</h1>
                                          <p data-aos='fade-up'>Our work centers around real customer needs. We develop actionable insights through data-driven research and market analysis.</p>

                                          <div className="services-image">
                                                       <img data-aos='zoom-in-up' src={serviceHero} alt="" />
                                          </div>
                                </div>
                       </div>
           </div>
           <ServiceBody />
           <Footer />
    </>
  )
}

export default Services