import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { FaPhone } from "react-icons/fa6"
import { LiaAngleDownSolid } from "react-icons/lia"
import { CgMenuRightAlt } from "react-icons/cg"
import Dropdown from "./Dropdown"
import { useContext, useState } from "react"
import { navContext } from "./navcontext"
import Dropdown2 from "./Dropdown2"
const Header = () => {
    const [dropdown, setDropdown] = useState(false)
   const [mobileStatus, setMobileStatus] = useContext(navContext);

   const openMobileMenu = () => setMobileStatus(!mobileStatus);
  return (
    <header>
               <div className="inner-row">
                           <div className="header-content">
                                       <div className="logo">
                                                 <NavLink to={'/'}>
                                                            <img src={logo} alt="Fahagraphics  Logo" />
                                                 </NavLink>
                                       </div>
                                       <nav>
                                                <ul>
                                                           <li><NavLink to={'/'}>Home</NavLink></li>
                                                           <li><NavLink to={'/about-us/'}>About Us</NavLink></li>
                                                           <li><NavLink to={'/services/'}>Services</NavLink></li>
                                                           <li onMouseOver={() => setDropdown(true)} onMouseOut={() => setDropdown(false)}><NavLink to={'/products/'} className={dropdown ? "active" : ''}>Products <span><LiaAngleDownSolid /></span></NavLink>
                                                                       <Dropdown status={dropdown}  />
                                                           </li>
                                                           <li><NavLink to={'/contact-us/'}>Contact Us</NavLink></li>
                                                </ul>
                                       </nav>
                                       <div className="header-btns">
                                                  <div className="action-btn">
                                                            <button><span><FaPhone /></span> +254 7201 16430</button>
                                                  </div>
                                                  <div className="menu-btn" onClick={openMobileMenu}>
                                                             <span><CgMenuRightAlt /></span>
                                                  </div>
                                       </div>
                           </div>
               </div>
    </header>
  )
}

export default Header