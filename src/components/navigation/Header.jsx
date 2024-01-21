import { NavLink, useLocation} from "react-router-dom"
import logo from "../../assets/logo.png"
import { FaPhone } from "react-icons/fa6"
import { LiaAngleDownSolid } from "react-icons/lia"
import { CgMenuRightAlt } from "react-icons/cg"
import Dropdown from "./Dropdown"
import { useContext, useState } from "react"
import { navContext } from "./navcontext"
const Header = () => {
    const [dropdown, setDropdown] = useState(false)
   const [mobileStatus, setMobileStatus] = useContext(navContext);
   const { pathname } = useLocation();
   const path = pathname.slice(1, 8);
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
                                                <ul className="main-list">
                                                           <li className="main-list-item"><NavLink to={'/'} className='menu-item'>Home</NavLink></li>
                                                           <li className="main-list-item"><NavLink to={'/about-us/'} className='menu-item'>About Us</NavLink></li>
                                                           <li className="main-list-item"><NavLink to={'/services/'} className='menu-item'>Services</NavLink></li>
                                                           <li className="main-list-item" onMouseOver={() => setDropdown(true)} onMouseOut={() => setDropdown(false)}><NavLink to={'/products/'} className={path === 'product' || dropdown ? "menu-item active" : 'menu-item'}>Products <span className={dropdown ? "drop active" : "drop"}><LiaAngleDownSolid /></span></NavLink>
                                                                       <Dropdown status={dropdown}  />
                                                           </li>
                                                           <li className="main-list-item"><NavLink to={'/contact-us/'} className='menu-item'>Contact Us</NavLink></li>
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