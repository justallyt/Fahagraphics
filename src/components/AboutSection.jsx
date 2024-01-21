import logo1 from "../assets/sigwerk.jpg"
import logo2 from '../assets/Daetwyler_Logo.svg'
import logo3 from "../assets/Kinyo-cat.jpg"
import logo4 from "../assets/atece-logo.jpg"
//import logo5 from '../assets/kmi.png'
import logo6 from "../assets/js.png"
//import logo7 from "../assets/xingraphics.gif"
// import logo5 from "../assets/vanson.jpg"
import quality from "../assets/quality.png"
import variety from "../assets/variety.png"
import customer from "../assets/customer-engagement.png"
import technical from "../assets/technical-expertise.png"
import { NavLink, Link } from "react-router-dom"
import aboutImg from "../assets/about-img2.jpg"
const AboutSection = () => {
  return (
    <section className="home-about">
              <div className="inner-row">
                      <div className="home-about-content">
                                    <div className="partnerships">
                                              <h3 data-aos='fade-down'>Trusted Partners</h3>
                                              <div className="partnership-logos">
                                                         <Link data-aos='zoom-in-up' to={'https://www.siegwerk.com/en/home.html'} target="_blank">
                                                                     <img  src={logo1} alt="" className="convert" />
                                                         </Link>
                                                          <Link data-aos='zoom-in-up'  to={'https://www.daetwyler.com/'} target="_blank">
                                                                   <img   src={logo2} alt="" className="convert" />
                                                          </Link>
                                                          {/* <Link to={''} target="_blank">
                                                                     <img  data-aos='zoom-in-up'  src={logo5} alt="" />
                                                          </Link> */}
                                                         <Link data-aos='zoom-in-up' to={'https://kinyova.com/'}  target="_blank">
                                                                  <div  className="image-overlay"></div>
                                                                  <img    src={logo3} alt="" className="convert" />
                                                         </Link>
                                                          <Link data-aos='zoom-in-up' to={'https://www.atece.com/'} target="_blank">
                                                                <img   src={logo4} alt="" className="convert" />          
                                                          </Link>   
                                                          <Link data-aos='zoom-in-up' to={'https://www.js-druckfarben.de/en/'} target="_blank">
                                                                    <img src={logo6}  alt="" className="convert" />
                                                            </Link>        
                                                            {/* <Link to={'https://www.js-druckfarben.de/en/'} target="_blank">
                                                                    <img src={logo7} data-aos='zoom-in-up' alt="" />
                                                            </Link>                          */}
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
                                                                      <p>Our unmatched blend of decades-refined experience and cutting-edge technical ingenuity ensures we remain the unchallenged leaders in our field.</p>
                                                            </div>
                                                            <div  data-aos='zoom-in-up' className="reason-moja">
                                                                      <div className="icon-part">
                                                                               <img src={quality} alt="" />
                                                                      </div>
                                                                      <h3>High Quality Ink Products</h3>
                                                                      <p>Our high-quality ink products breathe life into your creations, ensuring every print pops with unmatched brilliance.</p>
                                                            </div>
                                                            <div data-aos='zoom-in-up' className="reason-moja">
                                                                      <div className="icon-part">
                                                                               <img src={variety} alt="" />
                                                                      </div>
                                                                      <h3>Competitive pricing & Product Quality Consistency</h3>
                                                                      <p>We guarantee the sweet spot between affordability and high quality-high strength printing products.</p>
                                                            </div>
                                                            <div data-aos='zoom-in-up' className="reason-moja">
                                                                      <div className="icon-part">
                                                                               <img src={customer} alt="" />
                                                                      </div>
                                                                      <h3>Excellent Customer Engagement</h3>
                                                                      <p>Our positive customer feedback speak volumes about our dedication to building genuine connections with every customer.</p>
                                                            </div>
                                               </div>
                                    </div>

                                    <div className="about-description">
                                               <div className="texts-side">
                                                           <div className="texts-side-inner">
                                                                        <h3 data-aos='fade-down'>Who We Are</h3>
                                                                         <h1 data-aos='zoom-in-up'>Redefining  Print Supply Experience through <span className="pinkish">Reliable</span>, <span className="blueish">Quality</span> <span className="dark-yellow">Print Solutions</span></h1>
                                                                         
                                                                         <p data-aos='fade-up'>Fahagraphics is the largest print solutions company in Kenya priding itself with a wide variety of quality inks, print consumables and large format media products, that it provides to its customers conveniently and affordably. We are trusted by publishers and large corporates as our products are used to produce millions of printable items including magazines, brochures, books, billboards and marketing materials.</p>
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