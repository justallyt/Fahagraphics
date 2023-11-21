import { useState } from "react"
import { NavLink } from "react-router-dom"

const Dropdown = ({ status }) => {
    const [active, setActive] = useState(0)

    const changeContainer = (i) => {
           setActive(i)
    }
    
  return (
    <div className={ status ? "dropdown active" : "dropdown active"}>
               <div className="dropdown-shifts">
                         <ul>
                                   <li className={active === 0 ? "active" : ""} onMouseOver={() => changeContainer(0)}>Printing Inks</li>
                                   <li className={active === 1 ? "active" : ""} onMouseOver={() => changeContainer(1)}>Printing Ink Consumables</li>
                                   <li className={active === 2 ? "active" : ""} onMouseOver={() => changeContainer(2)}>Pressroom Chemicals</li>
                                   <li className={active === 3 ? "active" : ""} onMouseOver={() => changeContainer(3)}>Large Format</li>
                                   <li className={active === 4 ? "active" : ""} onMouseOver={() => changeContainer(4)}>Paper</li>
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
                                                                                 <li><NavLink to={''}>VS3 Series</NavLink></li>
                                                                                 <li><NavLink to={''}>VS1 Series</NavLink></li>
                                                                                 <li><NavLink to={''}>FG Lion Series</NavLink></li>
                                                                                 <li><NavLink to={''}>FG3 Intensio Series</NavLink></li>
                                                                                 <li><NavLink to={''}>FG1 Intensio Series</NavLink></li>
                                                                      </ul>
                                                         </div>
                                                           <div className="subcategory">
                                                                       <h5>Web Offset Printing Inks</h5>
                                                                        <ul>
                                                                                   <li><NavLink to={''}>Web Coldset Series</NavLink></li>
                                                                        </ul>
                                                           </div>
                                               </div>
                               </div>     :
                             active   === 1 ?
                                  <div className="dropdown-cont-moja">
                                     <ul>
                                              <li><NavLink to={'/'}>Printing Blankets</NavLink></li>
                                              <li><NavLink to={'/'}>Printing Plates</NavLink></li>
                                              <li><NavLink to={'/'}>Lamination Films</NavLink></li>
                                     </ul>
                                </div>  :
                            active === 2 ?
                                  <div className="dropdown-cont-moja">
                                        <ul>
                                                 <li><NavLink to={'/'}>Press Washes</NavLink></li>
                                                 <li><NavLink to={'/'}>Fountain Solutions</NavLink></li>
                                                 <li><NavLink to={'/'}>Press Additives</NavLink></li>
                                                 <li><NavLink to={'/'}>Plate Cleaners</NavLink></li>
                                                 <li><NavLink to={'/'}>Specialty Washes</NavLink></li>
                                        </ul>
                                   </div>  : 
                            active === 3 ? 
                               <div className="dropdown-cont-moja">
                                      <ul>
                                               <li><NavLink to={'/'}>Banner Materials</NavLink></li>
                                               <li><NavLink to={'/'}>Vinyl</NavLink></li>
                                               <li><NavLink to={'/'}>Boards</NavLink></li>
                                               <li><NavLink to={'/'}>Stands</NavLink></li>
                                               <li><NavLink to={'/'}>Snapper Frame</NavLink></li>
                                      </ul>
                                 </div> :
                            
                            <div className="dropdown-cont-moja">
                                    <ul>
                                             <li><NavLink to={'/'}>Self Adhesive Vinyl Paper</NavLink></li>
                                             <li><NavLink to={'/'}>Art Paper Gloss</NavLink></li>
                                             <li><NavLink to={'/'}>Art Paper Matt</NavLink></li>
                                             <li><NavLink to={'/'}>NCR Paper</NavLink></li>
                                             <li><NavLink to={'/'}>Bond Paper</NavLink></li>
                                    </ul>
                               </div>
                          }
               </div>
    </div>
  )
}

export default Dropdown