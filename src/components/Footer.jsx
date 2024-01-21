import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { CgFacebook } from "react-icons/cg"
import { ImTwitter } from "react-icons/im"
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
                                                <p>Email: info@fahagraphics.co.ke</p>
                                    </div>
                                    <div className="footer-column">
                                               <h3>Company</h3>
                                               <ul>
                                                          <li><Link to={'/'}>Home</Link></li>
                                                          <li><Link to={'/about-us/'}>About</Link></li>
                                                          <li><Link to={'/services/'}>Services</Link></li>
                                                          <li><Link to={'/contact-us/'}>Contact Us</Link></li>
                                               </ul>
                                    </div>
                                    <div className="footer-column">
                                                <h3>Products</h3>
                                                <ul>
                                                          <li><Link to={'/product/printing-inks'}>Printing Inks</Link></li>
                                                          <li><Link to={'/product/printing-ink-consumables'}>Printing Ink Consumables</Link></li>
                                                          <li><Link to={'/product/pressroom-chemicals'}>Pressroom Chemicals</Link></li>
                                                          <li><Link to={'/product/large-format'}>Large Format</Link></li>
                                                          <li><Link to={'/product/paper'}>Paper</Link></li>
                                                </ul>
                                    </div>
                                    <div className="footer-column">
                                               <h3>Social Media</h3>
                                              <p>Follow us on social media to find out the latest updates about us</p>
                                              <div className="footer-social-links">
                                                        <ul>
                                                                  <li><Link to={'https://web.facebook.com/fahagraphicsenterprises'} target="_blank"><span><CgFacebook /></span></Link></li>
                                                                  <li><Link to={'https://twitter.com/FahaGraphics'} target="_blank"><span><ImTwitter /></span></Link></li>
                                                                  <li><Link to={'https://www.instagram.com/fahagraphics/'} target="_blank"><span><AiFillInstagram /></span></Link></li>
                                                                  {/* <li><Link to={'/'}><span><ImLinkedin2 /></span></Link></li> */}
                                                        </ul>
                                              </div>
                                    </div>
                        </div>

                        <div className="copyright-section">
                                     <p>Fahagraphics &copy; { new Date().getFullYear() } All Rights Reserved</p>
                                     <div className="policy">
                                                 <Link to={'/'}>Privacy</Link>
                                     </div>
                        </div>
               </div>
    </footer>
  )
}

export default Footer