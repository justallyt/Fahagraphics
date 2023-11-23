import { useState } from "react"
import { NavLink } from "react-router-dom"
import { HiOutlineArrowRight } from "react-icons/hi2";

const Dropdown = ({ status }) => {
    const [active, setActive] = useState(0)

    const changeContainer = (i) => {
           setActive(i)
    }
    
  return (
    <div className={ status ? "dropdown active" : "dropdown active"}>
               <div className="dropdown-shifts">
                         <ul>
                                   <li className={active === 0 ? "dropdown-list-item active" : "dropdown-list-item"} onMouseOver={() => changeContainer(0)}>Printing Inks</li>
                                   <li className={active === 1 ? "dropdown-list-item active" : "dropdown-list-item"} onMouseOver={() => changeContainer(1)}>Printing Ink Consumables</li>
                                   <li className={active === 2 ? "dropdown-list-item active" : "dropdown-list-item"} onMouseOver={() => changeContainer(2)}>Pressroom Chemicals</li>
                                   <li className={active === 3 ? "dropdown-list-item active" : "dropdown-list-item"} onMouseOver={() => changeContainer(3)}>Large Format</li>
                                   <li className={active === 4 ? "dropdown-list-item active" : "dropdown-list-item"} onMouseOver={() => changeContainer(4)}>Paper</li>
                         </ul>
               </div>
               
               <div className="dropdown-containers">
                          { active === 0 ? 
                                  <div className="dropdown-cont-moja">
                                               <NavLink to={'/offset-printing'} className="cont-drop-title">Offset Printing Inks</NavLink>
                                               <div className="subcategory-row">
                                                         <div className="subcategory">
                                                                     <h5>Sheetfed Offset Printing Inks</h5>
                                                                      <ul>
                                                                                 <li><NavLink to={'/vs3'}><span><HiOutlineArrowRight /></span> VS3 Series</NavLink></li>
                                                                                 <li><NavLink to={'/vs1'}><span><HiOutlineArrowRight /></span> VS1 Series</NavLink></li>
                                                                                 <li><NavLink to={'fg-lion'}><span><HiOutlineArrowRight /></span> FG Lion Series</NavLink></li>
                                                                                 <li><NavLink to={'/fg3'}> <span><HiOutlineArrowRight /></span> FG3 Intensio Series</NavLink></li>
                                                                                 <li><NavLink to={'/fg1'}><span><HiOutlineArrowRight /></span> FG1 Intensio Series</NavLink></li>
                                                                      </ul>
                                                         </div>
                                                           <div className="subcategory">
                                                                       <h5>Web Offset Printing Inks</h5>
                                                                        <ul>
                                                                                   <li><NavLink to={'/web'}><span><HiOutlineArrowRight /></span> Web Coldset Series</NavLink></li>
                                                                        </ul>
                                                           </div>
                                               </div>
                                               <NavLink to={'/uv-printing-inks'} className="cont-drop-title">UV Printing Inks</NavLink>
                                               <div className="subcategory-row">
                                                         <div className="subcategory">
                                                                     <h5>UV Offset Inks</h5>
                                                                      <ul>
                                                                                 <li><NavLink to={'/process-colors'}><span><HiOutlineArrowRight /></span> Process Colors</NavLink></li>
                                                                                 <li><NavLink to={'/spot-colors'}><span><HiOutlineArrowRight /></span> Spot Colors</NavLink></li>
                                                                                 
                                                                      </ul>
                                                         </div>
                                                           <div className="subcategory">
                                                                       <h5>UV Flexo Inks</h5>
                                                                        <ul>
                                                                                   <li><NavLink to={'/flex-process-colors'}><span><HiOutlineArrowRight /></span> Process Colors</NavLink></li>
                                                                                   <li><NavLink to={'/flex-spot-colors'}><span><HiOutlineArrowRight /></span> Spot Colors</NavLink></li>
                                                                        </ul>
                                                           </div>
                                               </div>
                                               <NavLink to={'/solvent-printing-inks'} className="cont-drop-title">Solvent Printing Inks</NavLink>
                                               <div className="subcategory">
                                                            <ul>
                                                                   <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>Seigwerk Brands</NavLink></li>
                                                          </ul>
                                                </div>
                                                <NavLink to={'/waterbased-printing-inks'} className="cont-drop-title">Waterbased Printing Inks</NavLink>
                                               <div className="subcategory">
                                                          <ul>
                                                                   <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>Seigwerk Brands</NavLink></li>
                                                          </ul>
                                                </div>
                                                <NavLink to={'/varnishes'} className="cont-drop-title last">Varnishes</NavLink>
                               </div>     :
                             active   === 1 ?
                                  <div className="dropdown-cont-moja">
                                             <NavLink to={'/printing-blankets'} className='cont-drop-title'>Printing Blankets</NavLink>
                                              <div className="subcategory">
                                                        <ul>
                                                                <li><NavLink to={'/dsfd'}><span><HiOutlineArrowRight /></span> Kinyo Printing Blankets</NavLink></li>
                                                        </ul>
                                              </div>

                                              <NavLink to={'/printing-plates'} className='cont-drop-title'>Printing Plates</NavLink>
                                              <div className="subcategory-row">
                                                         <div className="subcategory">
                                                                   <h5>Sheetfed Offset Printing plate</h5>
                                                                   <ul>
                                                                            <li><NavLink to={'/dlfsj'}><span><HiOutlineArrowRight /></span> CTP Plates</NavLink></li>
                                                                            <li><NavLink to={'/dlfjas'}><span><HiOutlineArrowRight /></span> CTCP Plates</NavLink></li>
                                                                   </ul>
                                                         </div>
                                                         <div className="subcategory">
                                                                   <h5>Web Offset Printing plate</h5>
                                                                   <ul>
                                                                            <li><NavLink to={'/dfshf'}><span><HiOutlineArrowRight /></span> CTP Plates</NavLink></li>
                                                                            <li><NavLink to={'/dlfjs'}><span><HiOutlineArrowRight /></span> CTCP Plates</NavLink></li>
                                                                   </ul>
                                                         </div>
                                              </div>

                                              <NavLink to={'/printing-plates'} className='cont-drop-title'>Lamination Films</NavLink>
                                              <div className="subcategory">
                                                      <ul>
                                                               <li><NavLink to={'/dfshf'}><span><HiOutlineArrowRight /></span> Hot Lamination Thermal Roll Films - Gloss</NavLink></li>
                                                               <li><NavLink to={'/dlfjs'}><span><HiOutlineArrowRight /></span> Hot Lamination Thermal Roll Films - Matt</NavLink></li>
                                                      </ul>
                                           </div>
                                </div>  :
                            active === 2 ?
                                  <div className="dropdown-cont-moja">
                                             <div className="subcategory-row">
                                                      <div className="subcategory">
                                                                <h5>Press Washes</h5>
                                                                <ul>
                                                                           <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>Atece Galaxy Wash</NavLink></li>
                                                                </ul>
                                                     </div>
                                                        <div className="subcategory">
                                                                   <h5>Fountain Solutions</h5>
                                                                   <ul>
                                                                              <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>Atece Galaxy Fountain Solution</NavLink></li>
                                                                              <li><NavLink to={'/shds'}><span><HiOutlineArrowRight /></span>Atece Galaxy Web Fountain Solution</NavLink></li>
                                                                   </ul>
                                                        </div>
                                                        <div className="subcategory">
                                                                   <h5>Press Additives</h5>
                                                                   <ul>
                                                                              <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>Ink Reducer</NavLink></li>
                                                                              <li><NavLink to={'/shds'}><span><HiOutlineArrowRight /></span>Spray Powder</NavLink></li>
                                                                              <li><NavLink to={'/shds'}><span><HiOutlineArrowRight /></span>Blanket Repair Kit</NavLink></li>
                                                                   </ul>
                                                        </div>
                                                        <div className="subcategory">
                                                                   <h5>Plate Cleaners</h5>
                                                                   <ul>
                                                                              <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>Atece Galaxy Plate Cleaner</NavLink></li>
                                                                              <li><NavLink to={'/shds'}><span><HiOutlineArrowRight /></span>Atece Galaxy Plate Gum</NavLink></li>
                                                                   </ul>
                                                        </div>
                                                        <div className="subcategory">
                                                                   <h5>Specialty Washes</h5>
                                                                   <ul>
                                                                              <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>UV Roller Wash</NavLink></li>
                                                                 
                                                                   </ul>
                                                        </div>
                                             </div>
                                   </div>  : 
                            active === 3 ? 
                               <div className="dropdown-cont-moja">
                                          <div className="subcategory-row">
                                                  <div className="subcategory">
                                                               <h5>Banner Materials</h5>
                                                               <ul>
                                                                       <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Black and White Banner</NavLink></li>
                                                                       <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Honeycomb Banner</NavLink></li>
                                                                       <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Frontlit White Banner</NavLink></li>
                                                              </ul>
                                                  </div>     
                                                   <div className="subcategory">
                                                              <h5>Vinyl</h5>
                                                               <ul>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> White Vinyl</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Clear Vinyl</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> One Way Vision</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Reflective Vinyl</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Grey Back Pet</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Honeycomb Vinyl</NavLink></li>
                                                               </ul>
                                                   </div>

                                                  <div className="subcategory">
                                                                 <h5>Boards</h5>
                                                                 <ul>
                                                                    <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Corex Boards</NavLink></li>
                                                                    <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Forex Boards</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Aluco Bond Panels</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Acryllic Sheet</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> ABS Boards</NavLink></li>
                                                               </ul>
                                                  </div>

                                                  <div className="subcategory">
                                                                 <h5>Stands</h5>
                                                                 <ul>
                                                                    <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Telescopic Portable Banner Stands</NavLink></li>
                                                                    <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Broadbase Banner Stands</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Door Frame</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> X Stand</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Media Banner</NavLink></li>
                                                               </ul>
                                               </div>
                                               <div className="subcategory">
                                                                 <h5>Snapper Frame</h5>
                                                                 <ul>
                                                                    <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Snapper Frame A0</NavLink></li>
                                                                    <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Snapper Frame A1</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Snapper Frame A2</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Snapper Frame A3</NavLink></li>
                                                                        <li><NavLink to={'/sd'}><span><HiOutlineArrowRight /></span> Snapper Frame A4</NavLink></li>
                                                               </ul>
                                               </div>
                                          </div>
                                           

                                 </div> :
                            
                            <div className="dropdown-cont-moja">
                                           <div className="subcategory">
                                                  <h5>Paper</h5>
                                                  <ul>
                                                          <li><NavLink to={'/'}>Self Adhesive Vinyl Paper</NavLink></li>
                                                          <li><NavLink to={'/'}>Art Paper Gloss</NavLink></li>
                                                          <li><NavLink to={'/'}>Art Paper Matt</NavLink></li>
                                                          <li><NavLink to={'/'}>NCR Paper</NavLink></li>
                                                          <li><NavLink to={'/'}>Bond Paper</NavLink></li>
                                                 </ul>
                                           </div>
                               </div>
                          }
               </div>
    </div>
  )
}

export default Dropdown