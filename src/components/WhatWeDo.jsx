import { NavLink } from "react-router-dom"
import inks from "../assets/printing-inks.jpg"
import consumables from "../assets/consumables.jpg"
import pressroom from "../assets/pressroom.jpg"
import vinyl from "../assets/vinyl.jpg"
import printingInk1 from '/products/printingInks/offset/sheetfed/vs3/image1.jpg'
import printingInk2 from '/products/printingInks/solventPrintingInks/image2.jpg'
import printingInk3 from '/products/printingInks/uv/flexo/image1.jpg'
import printingInk4 from '/products/printingInks/offset/sheetfed/fglion/image1.jpg'
import consumable1 from '/products/printconsumables/printingblankets/image1.jpg'
import consumable2 from '/products/printconsumables/printingplates/image2.jpg'
import consumable3 from '/products/printconsumables/lamination/image1.jpg'
import consumable4 from '/products/printconsumables/doctorblades/image3.jpg'
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
                                                                    <NavLink to={'/product/printing-inks'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos="zoom-in" className="product-column">
                                                            <div className="product-column-quad">
                                                                      <img src={printingInk1} alt="" />
                                                                      <img src={printingInk2} alt="" />
                                                                      <img src={printingInk3} alt="" />
                                                                      <img src={printingInk4} alt="" />
                                                            </div>

                                                 </div>
                                                 <div data-aos='zoom-in-left' className="product-column">
                                                        <div className="product-column-texts">
                                                                    <h4>Printing Ink Consumables</h4>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio quae sit maxime, veniam nostrum quasi dicta harum dolor similique!</p>
                                                                    <NavLink to={'/product/printing-ink-consumables'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos='zoom-in-right' className="product-column">
                                                              <div className="product-column-double">
                                                                           <div className="product-column-quad">
                                                                                     <img src={consumable1} alt="" />
                                                                                     <img src={consumable2} alt="" />
                                                                                     <img src={consumable3} alt="" />
                                                                                     <img src={consumable4} alt="" />
                                                                           </div>
                                                                           <div className="product-column-quad">
                                                                                      <img src={printingInk1} alt="" />
                                                                                       <img src={printingInk2} alt="" />
                                                                                       <img src={printingInk3} alt="" />
                                                                                       <img src={printingInk4} alt="" />
                                                                           </div>
                                                              </div>
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