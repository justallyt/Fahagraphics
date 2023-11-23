import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useEffect, useRef } from "react";
const MobileDropdown = ({ status }) => {
    const dropRef = useRef();

    useEffect(() => {
               if(dropRef){
                      const items = dropRef.current.querySelectorAll('.mobile-dropdown-moja');

                      for(let i = 0; i < items.length; i++){
                              items[i].querySelector('.dropdown-header span').addEventListener('click', () => {
                                       items[i].querySelector('.dropdown-body').classList.toggle('active') 
                              })
                      }
               }
    }, [])
  return (
    <div ref={dropRef}  className={status ? 'mobile-dropdown active' : 'mobile-dropdown'}>
                <div className="mobile-dropdown-moja">
                             <div className="dropdown-header">
                                       <h4>Printing Inks</h4>
                                       <span><AiOutlinePlus /></span>
                             </div>
                             <div className="dropdown-body">
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
                             </div>
                </div>
                <div className="mobile-dropdown-moja">
                             <div className="dropdown-header">
                                       <h4>Printing Ink Consumables</h4>
                                       <span><AiOutlinePlus /></span>
                             </div>
                             <div className="dropdown-body">
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
                             </div>
                </div>
                <div className="mobile-dropdown-moja">
                             <div className="dropdown-header">
                                       <h4>Pressroom Chemicals</h4>
                                       <span><AiOutlinePlus /></span>
                             </div>
                             <div className="dropdown-body">
                                       
                             </div>
                </div>
                <div className="mobile-dropdown-moja">
                             <div className="dropdown-header">
                                       <h4>Large Format</h4>
                                       <span><AiOutlinePlus /></span>
                             </div>
                             <div className="dropdown-body">
                                       
                             </div>
                </div>
                <div className="mobile-dropdown-moja">
                             <div className="dropdown-header">
                                       <h4>Paper</h4>
                                       <span><AiOutlinePlus /></span>
                             </div>
                             <div className="dropdown-body">
                                       
                             </div>
                </div>
    </div>
  )
}

export default MobileDropdown