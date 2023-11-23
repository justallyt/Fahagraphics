import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { CgClose } from "react-icons/cg"
import { AiOutlinePlus } from "react-icons/ai";
import { useContext, useLayoutEffect, useRef, useState } from "react"
import { FaPhone } from "react-icons/fa6"
import { CgFacebook } from "react-icons/cg"
import { ImTwitter, ImLinkedin2 } from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai"
import { navContext } from "./navcontext"
import gsap from "gsap"
import MobileDropdown from "./MobileDropdown"
const MobileMenu = () => {
    const [dropdown, setDropdown] = useState(false)
    const [menuStatus, setMenuStatus] = useContext(navContext)
    const wrapperRef = useRef();
    const overlayRef = useRef();
    const linksWrap = useRef();
    const btnRef = useRef();
    const socialsRef = useRef();

    const closeMobileMenu = () => setMenuStatus(false);

    useLayoutEffect(() => {
            if(menuStatus){
                    wrapperRef.current.classList.add("active")

                    //let tl = gsap.timeline();

                  //   tl.to(overlayRef.current, {
                  //           y: 0,
                  //           clipPath: "circle(100% at center)",
                  //           duration: 0.5
                  //    })
                  //    tl.to(wrapperRef.current.querySelector(".logo"), {
                  //          x: 0,
                  //          duration: 0.5,
                  //          opacity: 1,
                  //    })
                  //    tl.to(wrapperRef.current.querySelector(".closebtn"), {
                  //            x: 0,
                  //            duration: 0.5,
                  //            opacity: 1
                  //    })
                  //    linksWrap.current.querySelectorAll(".list-item").forEach(item => {
                  //          tl.to(item, {
                  //                opacity: 1,
                  //                y: 0,
                  //                duration: 0.3
                  //          })
                  //    })
                  //    tl.to(btnRef.current, {
                  //         opacity: 1, 
                  //         y: 0,
                  //         duration: 0.5
                  //    })
                  //    socialsRef.current.querySelectorAll("li").forEach(item => {
                  //           tl.to(item, {
                  //                    opacity: 1,
                  //                    y: 0,
                  //                    duration: 0.4
                  //           })
                  //    })
            }

            if(!menuStatus && wrapperRef.current.classList.contains("active")){
                   let tl = gsap.timeline();

                   socialsRef.current.querySelectorAll("li").forEach(item => {
                        tl.to(item, {
                                opacity: 0,
                                y: '20px',
                                duration: 0.3
                        })
                   })
                   tl.to(btnRef.current, {
                         opacity: 0,
                         y: '20px',
                         duration: 0.3
                   })
                   linksWrap.current.querySelectorAll(".list-item").forEach(item =>{
                         tl.to(item, {
                                 opacity: 0,
                                 y: '20px',
                                 duration: 0.3
                         })
                   })
                   tl.to(wrapperRef.current.querySelector(".logo"), {
                         x: '-100%',
                         duration: 0.2,
                         opacity: 0
                   })
                   tl.to(wrapperRef.current.querySelector('.closebtn'), {
                          x: '100%',
                          opacity: 0,
                          duration: 0.2
                   })
                 tl.to(overlayRef.current, {
                       y: '-200px',
                       clipPath: 'circle(200px at top left)',
                       duration: 0.5
                 })

                 setTimeout(() => {
                      wrapperRef.current.classList.remove("active")
                 }, 4300)
            }
    }, [menuStatus])

    const handleParentDrop = () => {
            setDropdown(!dropdown)
    }
  return (
    <div className="mobile-menu-container" ref={wrapperRef}>
                <div className="mobile-container-overlay" ref={overlayRef}></div>
                <div className="mobile-content">
                            <div className="mobile-inner">
                                        <div className="mobile-header">
                                                    <NavLink to={'/'} className='logo'>
                                                               <img src={logo} alt="" />
                                                    </NavLink>
                                                    <span className="closebtn" onClick={closeMobileMenu}>
                                                                <CgClose />
                                                    </span>
                                        </div>
                                        <div className="mobile-nav"> 
                                                 <ul ref={linksWrap}>
                                                           <li className="list-item"><NavLink to={'/'}>Home</NavLink></li>
                                                           <li className="list-item"><NavLink to={'/about-us/'}>About Us</NavLink></li>
                                                           <li className="list-item"><NavLink to={'/services/'}>Services</NavLink></li>
                                                           <li className={dropdown ? "special list-item" : 'list-item'}><NavLink className={dropdown ? 'active' : ''} to={'#'}><span  onClick={handleParentDrop}>Products</span>  <span  onClick={handleParentDrop}><AiOutlinePlus /></span></NavLink>
                                                                     {/* <Dropdown status={dropdown} /> */}
                                                                     <MobileDropdown status={dropdown} />
                                                           </li>
                                                           <li className="list-item"><NavLink to={'/contact-us/'}>Contact Us</NavLink></li>
                                                 </ul>
                                        </div>

                                        <div className="action-btn">
                                                <button ref={btnRef}><span><FaPhone /></span> +254 7201 16430</button>
                                        </div>

                                        <div className="menu-links">
                                                         <ul ref={socialsRef}>
                                                                  <li><NavLink to={'/'}><span><CgFacebook /></span></NavLink></li>
                                                                  <li><NavLink to={'/'}><span><ImTwitter /></span></NavLink></li>
                                                                  <li><NavLink to={'/'}><span><AiFillInstagram /></span></NavLink></li>
                                                                  <li><NavLink to={'/'}><span><ImLinkedin2 /></span></NavLink></li>
                                                        </ul>
                                        </div>
                            </div>
                </div>
    </div>
  )
}

export default MobileMenu