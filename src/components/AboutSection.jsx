import logo1 from "../assets/sigwerk.jpg"
import logo2 from '../assets/daetwyler.jpg'
import logo3 from "../assets/kinyo.jpg"
import logo4 from "../assets/atece.png"
// import logo5 from "../assets/vanson.jpg"
import quality from "../assets/quality.png"
import variety from "../assets/variety.png"
import customer from "../assets/customer-engagement.png"
import technical from "../assets/technical-expertise.png"
import { NavLink } from "react-router-dom"
import aboutImg from "../assets/about-img.jpg"
const AboutSection = () => {
  return (
    <section className="home-about">
              <div className="inner-row">
                      <div className="home-about-content">
                                    <div className="partnerships">
                                              <h3 data-aos='fade-down'>Trusted Partners</h3>
                                              <div className="partnership-logos">
                                                          <img data-aos='zoom-in-up' src={logo1} alt="" />
                                                          {/* <img  data-aos='zoom-in-up'  src={logo5} alt="" /> */}
                                                          <img  data-aos='zoom-in-up'  src={logo2} alt="" />
                                                          <img  data-aos='zoom-in-up'  src={logo3} alt="" />
                                                          <img  data-aos='zoom-in-up'  src={logo4} alt="" />                                             
                                              </div>
                                    </div>

                                    <div className="why-section">
                                               <h1 data-aos='zoom-in-up'><span className="blueish">Find Out</span> Why We are <span className="pinkish">The Best</span> Option in <span className="dark-yellow">The Market</span></h1>

                                               <div className="reasons-row">
                                                            <div data-aos='zoom-in-up' className="reason-moja">
                                                                      <div className="icon-part">
                                                                               <img src={technical} alt="" />
                                                                      </div>
                                                                      <h3>Unrivaled Technical Expertise and Experience</h3>
                                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus voluptatem nisi eveniet quam.</p>
                                                            </div>
                                                            <div  data-aos='zoom-in-up' className="reason-moja">
                                                                      <div className="icon-part">
                                                                               <img src={quality} alt="" />
                                                                      </div>
                                                                      <h3>High Quality Ink Products</h3>
                                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus voluptatem nisi eveniet quam.</p>
                                                            </div>
                                                            <div data-aos='zoom-in-up' className="reason-moja">
                                                                      <div className="icon-part">
                                                                               <img src={variety} alt="" />
                                                                      </div>
                                                                      <h3>Wide Variety and Exotic Ink Stock</h3>
                                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus voluptatem nisi eveniet quam.</p>
                                                            </div>
                                                            <div data-aos='zoom-in-up' className="reason-moja">
                                                                      <div className="icon-part">
                                                                               <img src={customer} alt="" />
                                                                      </div>
                                                                      <h3>Excellent Customer Engagement</h3>
                                                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatibus voluptatem nisi eveniet quam.</p>
                                                            </div>
                                               </div>
                                    </div>

                                    <div className="about-description">
                                               <div className="texts-side">
                                                           <div className="texts-side-inner">
                                                                        <h3 data-aos='fade-down'>Who We Are</h3>
                                                                         <h1 data-aos='zoom-in-up'>Redefining <span>Print Supply Experience</span> in Kenya</h1>
                                                                         <p data-aos='fade-up'>Fahagraphics is the largest print solutions company in Kenya priding itself with a wide variety of quality ink and large print products that it provides to its customers conveniently and affordably. Trusted by publishers and large corporates, our products are used to produce millions of magazines, brochures and marketing materials.</p>
                                                                         {/* <p> Over the decades we have maintained a successful track record of continuous growth and innovation. As a family-led business, our key focus is to create valuable, long-lasting relationships with our clients, and provide you with the means to grow your business.</p> */}
                                                                         <NavLink  data-aos='zoom-in-up'  to={'/about-us/'}>Read More</NavLink>
                                                           </div>
                                               </div>
                                               <div className="images-side">
                                                            <div  data-aos='zoom-in-up' className="simple-card"></div>
                                                            <img data-aos='zoom-in'  src={aboutImg} alt="" />
                                                            <div  data-aos='zoom-in-up' className="simpler-triangle"></div>
                                               </div>
                                    </div>
                      </div>
              </div>
              
    </section>
  )
}

export default AboutSection