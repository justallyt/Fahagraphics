import { NavLink } from "react-router-dom"
import inks from "../assets/printing-inks.jpg"
import consumables from "../assets/consumables.jpg"
import pressroom from "../assets/pressroom.jpg"
import vinyl from "../assets/vinyl.jpg"
const WhatWeDo = () => {
  return (
    <div className="what-we-do">
               <div className="inner-row">
                         <div className="what-we-do-content">
                                     <div className="intro">
                                             <h1 data-aos='fade-down'>One Stop Shop for all your <span>Printing Needs</span></h1>
                                             <p  data-aos='zoom-in-up'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum fuga maxime possimus doloribus, sit voluptatem nam delectus modi voluptatum quam sequi. Nemo nisi quibusdam dolore quos possimus obcaecati libero animi?</p>
                                     </div>

                                     <div className="what-we-do-row">
                                                 <div data-aos='zoom-in-right' className="product-column">
                                                            <div className="product-column-texts">
                                                                    <h4>Printing Inks</h4>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio quae sit maxime, veniam nostrum quasi dicta harum dolor similique!</p>
                                                                    <NavLink to={'/'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos="zoom-in" className="product-column">
                                                         <img src={inks} alt="" />
                                                 </div>
                                                 <div data-aos='zoom-in-left' className="product-column">
                                                        <div className="product-column-texts">
                                                                    <h4>Printing Ink Consumables</h4>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio quae sit maxime, veniam nostrum quasi dicta harum dolor similique!</p>
                                                                    <NavLink to={'/'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos='zoom-in-right' className="product-column">
                                                              <img src={consumables} alt="" />
                                                 </div>
                                                 <div data-aos='zoom-in' className="product-column">
                                                        <div className="product-column-texts">
                                                                    <h4>Pressroom Chemicals</h4>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio quae sit maxime, veniam nostrum quasi dicta harum dolor similique!</p>
                                                                    <NavLink to={'/'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos='zoom-in-left' className="product-column">
                                                             <img src={pressroom} alt="" />
                                                 </div>
                                                 <div data-aos='zoom-in-up' className="product-column">
                                                           <div className="product-column-texts">
                                                                    <h4>Large Format</h4>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio quae sit maxime, veniam nostrum quasi dicta harum dolor similique!</p>
                                                                    <NavLink to={'/'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos='zoom-in' className="product-column">
                                                              <img src={vinyl} alt="" />
                                                 </div>
                                                 <div data-aos='zoom-in-up' className="product-column">
                                                           <div className="product-column-texts">
                                                                    <h4>Papers</h4>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio quae sit maxime, veniam nostrum quasi dicta harum dolor similique!</p>
                                                                    <NavLink to={'/'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                     </div>
                         </div>
               </div>
    </div>
  )
}

export default WhatWeDo