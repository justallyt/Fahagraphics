import { NavLink } from "react-router-dom"
// import hero1 from "../assets/hero1.png"
// import hero3 from "../assets/hero3.png"
// import hero4 from "../assets/hero4.png"
import { HiMiniArrowLongRight } from "react-icons/hi2"
import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"
const HeroSection = () => {
   const heading = useRef()
   const copy  = useRef()
   const btn = useRef()
   
  useLayoutEffect(() => {
            let tl = gsap.timeline()

            tl.to(heading.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7
            })
            tl.to(copy.current, {
                  opacity: 1,
                  y: 0,
                 duration: 1
            })
            tl.to(btn.current, {
                  opacity: 1,
                  y: 0,
                  duration: 1
            })
  }, [])
  return (
    <section className="hero">
              <div className="inner-row">
                         {/* <div className="hero-bg">
                                      <img src={hero3} alt="" />
                                      <div className="dark-shade"></div>
                         </div> */}
                        <div className="hero-content">
                                  <div className="hero-texts">
                                           <div className="hero-texts-inner">
                                                     <h1 ref={heading}>The Largest <span>Print Supply Solution</span> in Kenya.</h1>
                                                      <p ref={copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quidem quas excepturi consequuntur tempora reprehenderit quam fugiat odio accusantium quisquam.</p>
                                                     <NavLink to={'/'} ref={btn}>Explore <span><HiMiniArrowLongRight /></span></NavLink>
                                           </div>
                                  </div>
                                  {/* <div className="hero-images">
                                            <img ref={lion} src={hero1} alt="" />
                                  </div> */}
                        </div>
                        {/* <div className="hero-paints">
                                   <img src={hero4} alt="" />
                                   <div className="dark-shade"></div>
                        </div> */}
              </div>
    </section>
  )
}

export default HeroSection