import color1 from "../assets/color-match-2.jpg"
import color2 from '../assets/color-match.jpg'
import color3 from "../assets/color-match-3.jpg"
import print1 from "../assets/prints1.jpg"
import print2 from '../assets/prints2.jpg'
import print3 from "../assets/prints3.jpg"
import artwork1 from "../assets/artwork.jpg"
import artwork2 from '../assets/artwork2.jpg'
import artwork3 from "../assets/artwork3.jpg"
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
                                                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora voluptatem aperiam porro, repudiandae enim ullam nostrum velit quaerat labore suscipit nulla? Corporis aperiam architecto facilis, quam repudiandae obcaecati quos aut quas ea debitis aliquid et illum labore ex eius. Animi, maxime impedit consectetur.</p>
                                                                   <NavLink to={'/'}>Contact Us</NavLink>
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
                                                                     <h3>Artwork & Mockups</h3>
                                                                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur quos eveniet maiores fugiat qui sed dolor, aliquam tenetur, non deserunt aut magni. </p>
                                                                    <NavLink to={'/'}>Contact Us</NavLink>
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
                                                                    <h3>Print Support</h3>
                                                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem fugiat minima quam totam reiciendis excepturi adipisci eligendi, dolore maiores id?</p>
                                                                    <NavLink to={'/'}>Contact Us</NavLink>
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