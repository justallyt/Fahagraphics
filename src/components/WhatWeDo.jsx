import { NavLink, useNavigate } from "react-router-dom"
import printingInk1 from '/products/printingInks/offset/sheetfed/vs3/image1.jpg'
import printingInk2 from '/products/printingInks/solventPrintingInks/image2.jpg'
import printingInk3 from '/products/printingInks/uv/flexo/image1.jpg'
import printingInk4 from '/products/printingInks/offset/sheetfed/fglion/image1.jpg'
import consumable1 from '/products/printconsumables/printingblankets/image1.jpg'
import consumable2 from '/products/printconsumables/printingplates/image2.jpg'
import consumable3 from '/products/printconsumables/lamination/image1.jpg'
import consumable4 from '/products/printconsumables/doctorblades/image3.jpg'
import chemical1 from '/products/pressroomchemicals/washes/image1.jpg'
import chemical2 from '/products/pressroomchemicals/additives/ink/image1.jpg'
import chemical3 from '/products/pressroomchemicals/fountains/image1.jpg'
import chemical4 from '/products/pressroomchemicals/platecleaners/image1.jpg'
import large1 from '/products/largeformat/bannermaterials/image1.jpg'
import large2 from '/products/largeformat/boards/acrylic/image1.jpg'
import large3 from '/products/largeformat/snapper/image2.jpg'
import large5 from '/products/largeformat/boards/aluco/image3.jpg'
import large6 from '/products/largeformat/boards/acrylic/image4.jpg'
import paper1 from '/products/paper/selfadhesive/image1.jpg'
const WhatWeDo = () => {
        const navigate = useNavigate();
  return (
    <div className="what-we-do">
               <div className="inner-row">
                         <div className="what-we-do-content">
                                     <div className="intro">
                                             <h1 data-aos='fade-down'>One Stop Shop for all your <span>Printing Needs</span></h1>
                                             <p  data-aos='zoom-in-up'>From inks to paper, print consumables to large format, we&apos;ve got every tool to make your printing dreams a reality.  We help you conquer deadlines with reliable printing ink solutions as you unleash your creativity with specialty options.</p>
                                     </div>

                                     <div className="what-we-do-row">
                                                 <div data-aos='zoom-in-right' className="product-column">
                                                            <div className="product-column-texts">
                                                                    <h4>Printing Inks</h4>
                                                                    <p>Browse through our collection of printing ink products which include: offset printing inks,uv printing inks, solvent printing inks, varnishes and many more. </p>
                                                                    <NavLink to={'/product/printing-inks'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos="zoom-in" className="product-column">
                                                            <div className="product-column-quad">
                                                                      <img onClick={() => navigate('/product/printing-inks')} src={printingInk1} alt="" />
                                                                      <img onClick={() => navigate('/product/printing-inks')} src={printingInk2} alt="" />
                                                                      <img onClick={() => navigate('/product/printing-inks')} src={printingInk3} alt="" />
                                                                      <img onClick={() => navigate('/product/printing-inks')} src={printingInk4} alt="" />
                                                            </div>

                                                 </div>
                                                 <div data-aos='zoom-in-left' className="product-column">
                                                        <div className="product-column-texts">
                                                                    <h4>Printing Ink Consumables</h4>
                                                                    <p>Browse through our collection of printing ink consumables products which include: printing plates, printing blankets, lamination films and doctor blades</p>
                                                                    <NavLink to={'/product/printing-ink-consumables'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos='zoom-in-right' className="product-column">
                                                              <div className="product-column-double">
                                                                           <div className="product-column-quad">
                                                                                     <img onClick={() => navigate('/product/printing-ink-consumables')} src={consumable1} alt="" />
                                                                                     <img onClick={() => navigate('/product/printing-ink-consumables')} src={consumable2} alt="" />
                                                                                     <img onClick={() => navigate('/product/printing-ink-consumables')}  src={consumable3} alt="" />
                                                                                     <img onClick={() => navigate('/product/printing-ink-consumables')} src={consumable4} alt="" />
                                                                           </div>
                                                                           <div className="product-column-single">
                                                                                      <img onClick={() => navigate('/product/pressroom-chemicals')}  src={chemical1} alt="" />
                                                                           </div>
                                                              </div>
                                                 </div>
                                                 <div data-aos='zoom-in' className="product-column">
                                                        <div className="product-column-texts">
                                                                    <h4>Pressroom Chemicals</h4>
                                                                    <p>Browse through our collection of pressroom chemicals which include: press washes, press additives, fountain solutions and plate cleaners.</p>
                                                                    <NavLink to={'/product/pressroom-chemicals'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos='zoom-in-left' className="product-column">
                                                               <div className="product-column-quad">
                                                                           <img onClick={() => navigate('/product/pressroom-chemicals')}    src={chemical2} alt="" />
                                                                            <img onClick={() => navigate('/product/pressroom-chemicals')}   src={chemical3} alt="" />
                                                                            <img onClick={() => navigate('/product/pressroom-chemicals')}   src={chemical4} alt="" />
                                                                            <img onClick={() => navigate('/product/large-format')}   src={large1} alt="" />
                                                               </div>
                                                 </div>
                                                 <div data-aos='zoom-in-up' className="product-column">
                                                           <div className="product-column-texts">
                                                                    <h4>Large Format</h4>
                                                                    <p>Browse through our collection of large format products which include: banner materials, boards, snapper frames and vinyls</p>
                                                                    <NavLink to={'/product/large-format'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                                 <div data-aos='zoom-in' className="product-column">
                                                              <div className="product-column-double">
                                                                       <div className="product-column-quad">
                                                                                  <img src={large2} alt="" onClick={() => navigate('/product/large-format')}  />
                                                                                  <img src={large3} alt="" onClick={() => navigate('/product/large-format')}  />
                                                                                  <img src={large6} alt=""onClick={() => navigate('/product/large-format')}  />
                                                                                  <img src={large5} alt="" onClick={() => navigate('/product/large-format')}  />
                                                                       </div>
                                                                       <img src={paper1} alt="" onClick={() => navigate('/product/paper')} />
                                                              </div>
                                                 </div>
                                                 <div data-aos='zoom-in-up' className="product-column">
                                                           <div className="product-column-texts">
                                                                    <h4>Papers</h4>
                                                                    <p>Browse through our collection of paper products which include: self adhesive paper, NCR paper and Ivory paper.</p>
                                                                    <NavLink to={'/product/paper'}>Explore</NavLink>
                                                            </div>
                                                 </div>
                                     </div>
                         </div>
               </div>
    </div>
  )
}

export default WhatWeDo