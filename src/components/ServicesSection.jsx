import color1 from "../assets/color-matching1.jpg"
import color2 from '../assets/color-matching2.jpg'
import color3 from "../assets/color-match-3.jpg"
import print1 from "../assets/support1.jpg"
import print2 from '../assets/support1.jpg'
import print3 from "../assets/prints3.jpg"
import artwork1 from "../assets/customized1.jpg"
import artwork2 from '../assets/color-matching3.jpg'
import artwork3 from "../assets/support2.jpg"
import { NavLink } from "react-router-dom"

const ServicesSection = () => {
  return (
    <div className="services-section">
               <div className="inner-row">
                           <div className="services-section-content">
                                   <div className="services-intro">
                                              <h1 data-aos='zoom-in-down'>Services We Offer for Your Business</h1>
                                   </div>
                                   <div className="services-row">
                                               <div className="service-moja" data-aos='zoom-in'>
                                                         <div className="service-moja-texts">
                                                                   <h3>Colour Matching</h3>
                                                                   <p>In a dream world, all colors match. Color matching is easy as the ink gets added in the press, and the job is run without any complications in mere seconds. Yes, that’s the dream. Right there.</p>
                                                                   <NavLink to={'/services/'}>Read more</NavLink>
                                                         </div>
                                                         <div className="service-images">
                                                                    <div className="image-moja">
                                                                               <img src={color2} alt="" />
                                                                    </div>
                                                                    <div className="image-moja">
                                                                               <img src={color1} alt="" />
                                                                    </div>
                                                                    <div className="image-moja">
                                                                               <img src={color3} alt="" />
                                                                    </div>
                                                         </div>
                                               </div>
                                               <div className="service-moja" data-aos='fade-right'>
                                                           <div className="service-moja-texts">
                                                                     <h3>Customized Ink to your Press</h3>
                                                                     <p>We as a company believe that a successful ink formulation necessitates a comprehensive system approach that takes into account all of these elements in order to fulfill the appropriate application performance and functionality at a reasonable price.</p>
                                                                    <NavLink to={'/services/'}>Read more</NavLink>
                                                           </div>

                                                           <div className="service-images">
                                                                    <div className="image-moja">
                                                                               <img src={artwork3} alt="" />
                                                                    </div>
                                                                    <div className="image-moja">
                                                                               <img src={artwork2} alt="" />
                                                                    </div>
                                                                    <div className="image-moja">
                                                                               <img src={artwork1} alt="" />
                                                                    </div>
                                                            </div>
                                               </div>
                                               <div className="service-moja" data-aos='fade-left'>
                                                          <div className="service-moja-texts">
                                                                    <h3>Personalized Technical Support</h3>
                                                                    <p>Service is only as good as its accessibility. Our staff are therefore available at short notice – whether by telephone, e-mail or by an expert visiting your machine. And it goes without saying that you will have your own personal point of contact.</p>
                                                                    <NavLink to={'/services/'}>Read more</NavLink>
                                                          </div>
                                                          <div className="service-images">
                                                                    <div className="image-moja">
                                                                               <img src={print1} alt="" />
                                                                    </div>
                                                                    <div className="image-moja">
                                                                               <img src={print2} alt="" />
                                                                    </div>
                                                                    <div className="image-moja">
                                                                               <img src={print3} alt="" />
                                                                    </div>
                                                            </div>
                                               </div>
                                   </div>
                           </div>
               </div>
    </div>
  )
}

export default ServicesSection