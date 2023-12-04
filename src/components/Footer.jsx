import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { CgFacebook } from "react-icons/cg"
import { ImTwitter, ImLinkedin2 } from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
               <div className="inner-row">
                        <div className="footer-content">
                                    <div className="footer-column">
                                                <div className="footer-logo">
                                                         <img src={logo} alt="" />
                                                </div>
                                                <p>Atlantis ICD Business Park, Old Mombasa Road, Nairobi, Kenya</p>
                                                <p>Call Us:  +254 7201 16430</p>
                                                <p>Email: info@fahagraphics.com</p>
                                    </div>
                                    <div className="footer-column">
                                               <h3>Company</h3>
                                               <ul>
                                                          <li><NavLink to={'/'}>Home</NavLink></li>
                                                          <li><NavLink to={'/about-us'}>About</NavLink></li>
                                                          <li><NavLink to={'/services/'}>Services</NavLink></li>
                                                          <li><NavLink to={'/contact-us/'}>Contact Us</NavLink></li>
                                               </ul>
                                    </div>
                                    <div className="footer-column">
                                                <h3>Products</h3>
                                                <ul>
                                                          <li><NavLink to={'/product/printing-inks'}>Printing Inks</NavLink></li>
                                                          <li><NavLink to={'/product/printing-ink-consumables'}>Printing Ink Consumables</NavLink></li>
                                                          <li><NavLink to={'/product/pressroom-chemicals'}>Pressroom Chemicals</NavLink></li>
                                                          <li><NavLink to={'/product/large-format'}>Large Format</NavLink></li>
                                                          <li><NavLink to={'/product/paper'}>Paper</NavLink></li>
                                                </ul>
                                    </div>
                                    <div className="footer-column">
                                               <h3>Social Media</h3>
                                              <p>Follow us on social media to find out the latest updates about us</p>
                                              <div className="footer-social-links">
                                                        <ul>
                                                                  <li><NavLink to={'/'}><span><CgFacebook /></span></NavLink></li>
                                                                  <li><NavLink to={'/'}><span><ImTwitter /></span></NavLink></li>
                                                                  <li><NavLink to={'/'}><span><AiFillInstagram /></span></NavLink></li>
                                                                  <li><NavLink to={'/'}><span><ImLinkedin2 /></span></NavLink></li>
                                                        </ul>
                                              </div>
                                    </div>
                        </div>

                        <div className="copyright-section">
                                     <p>Fahagraphics &copy; { new Date().getFullYear() } All Rights Reserved</p>
                                     <div className="policy">
                                                 <NavLink to={'/'}>Privacy</NavLink>
                                     </div>
                        </div>
               </div>
    </footer>
  )
}

export default Footer