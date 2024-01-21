import Navbar from "../components/navigation/Navbar"
import "../css/about.css"
import aboutHero from '../assets/about-hero.png'
import AboutDescription from "../components/AboutDescription"
import { IoPlaySharp } from "react-icons/io5"
import Testimonials from "../components/Testimonials"
import Nudge from "../components/Nudge"
import Footer from "../components/Footer"
const About = () => {
  return (
    <>
           <div className="body-hero">
                     <Navbar />
                     <div className="body-hero-texts">
                                <div className="inner-row">
                                            <div className="body-texts-content">
                                                        <div className="body-texts-zenyewe">
                                                                  <h3 data-aos='fade-down'>About Us</h3>
                                                                   <h1 data-aos='fade-up'>We are the largest supplier of quality Printing Inks and Printing Consumables and Large Format Media in East Africa.</h1>
                                                        </div>
                                                        <div className="body-image">
                                                                   <img data-aos='zoom-in-up' src={aboutHero} alt="" />
                                                        </div>
                                            </div>
                                </div>

                                <div className="company-video">
                                            <div className="video-btn">
                                                     <span><IoPlaySharp /></span>
                                            </div>
                                </div>
                     </div>
           </div>
           <AboutDescription />
           <Testimonials />
           <Nudge />
           <Footer />
     </>
  )
}

export default About