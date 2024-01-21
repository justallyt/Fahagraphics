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
                                                      <h1 ref={heading}><span className="blueish">Unleash</span> your Vibrant world with  <span className="pinkish">Premium</span> Printing <span className="dark-yellow">Ink Supplies</span> and <span className="dark-yellow">Consumables</span></h1>
                                                   
                                                      <p ref={copy}>
                                                               Welcome to the realm of vivid colors and boundless creativity! We&apos;re your one-stop shop for premium printing ink supplies, fueling the artistic endeavors of individuals and businesses alike.
                                                        </p>
                                                     <NavLink to={'/products/'} ref={btn}>Explore <span><HiMiniArrowLongRight /></span></NavLink>
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