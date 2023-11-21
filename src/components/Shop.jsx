import { NavLink } from "react-router-dom"
import shop from "../assets/shop.jpg"
const Shop = () => {
  return (
    <div className="shop-section">
             <div className="inner-row">
                        <div className="shop-section-content">
                                      <div className="shop-hook-and-image">
                                                <div className="shop-hook-description">
                                                           <div className="shop-hook-description-inner">
                                                                    <h4 data-aos='zoom-in-down'>Shop Products</h4>
                                                                     <h3 data-aos='fade-up'>Interested in our print products, Visit out shop in Nairobi CBD to browse the largest variety for your digital needs.</h3>
                                                                     <NavLink to={'/'} data-aos='zoom-in-up'>Contact Shop</NavLink>
                                                           </div>
                                                </div>
                                                <div className="shop-hook-image">
                                                          <img data-aos='zoom-in' src={shop} alt="" />
                                                          <div  className="back-overlay"></div>
                                                </div>
                                      </div>
                                      <div className="achievements">
                                                  <div className="achievements-description" data-aos='zoom-in-up'>
                                                              <h4>What We&apos;ve Achieved</h4>
                                                              <p>Over the decades we have maintained a successful track record of continuous growth and innovation delivering quality to all our customers.</p>
                                                  </div>
                                                  <div className="achievement-numbers">
                                                             <div className="achievement-moja"  data-aos='zoom-in-up'>
                                                                        <h1>10,000+</h1>
                                                                        <p>Print products Supplied</p>
                                                             </div>
                                                             <div className="achievement-moja"  data-aos='zoom-in-up'>
                                                                         <h1>20+</h1>
                                                                         <p>Combined years of Experience</p>
                                                             </div>
                                                             <div className="achievement-moja"  data-aos='zoom-in-up'>
                                                                          <h1>50+</h1>
                                                                          <p>Number of Ink Experts</p>
                                                             </div>
                                                  </div>
                                      </div>
                        </div>
             </div>
    </div>
  )
}

export default Shop