import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { useState } from "react";

const MobileDropdownMoja = ({ data }) => {
    const [active, setActive ] = useState(false)
  return (
    <div className="mobile-dropdown-moja">
             <div className="dropdown-header">
                        <h4>{data.header_text}</h4> 
                        <span onClick={() => setActive(!active)}><AiOutlinePlus /></span>
              </div>
             { data && data.submenu.length > 0 ? data.submenu.map(item =>
                      <div className={ active ? "dropdown-body active" : "dropdown-body"} key={item.id}>
                                       <NavLink to={item.link} className='cont-drop-title'>{item.subtext}</NavLink>
                                          <div className="subcategory-row" >
                                               { item.subcategories && item.subcategories.length > 0 && item.subcategories.map(subItem => 
                                                      <div className="subcategory" key={subItem.id}>
                                                             <h5>{subItem.title}</h5>
                                                             <ul>
                                                                       { subItem.prods && subItem.prods.length > 0 && subItem.prods.map(stuff => 
                                                                              <li key={stuff.id}><NavLink to={stuff.link}><span><HiOutlineArrowRight /></span>{stuff.name}</NavLink></li>
                                                                        )}
                                                             </ul>
                                                      </div>
                                                   )}
                                          </div>
                                         { item.subcategory && item.subcategory.length > 0 && item.subcategory.map(subItem => 
                                                <div className="subcategory" key={subItem.id}>
                                                            <ul>
                                                                   <li><NavLink to={'/ss'}><span><HiOutlineArrowRight /></span>Seigwerk Brands</NavLink></li>
                                                          </ul>
                                                </div>
                                            )}
                      </div>
                
                ) :   data && data.submenu2.length > 0 ?
                    <div className={ active ? "dropdown-body active" : "dropdown-body"}>
                                <div className="subcategory-row">
                                         { data && data.submenu2.length > 0 && data.submenu2.map(kitu => 
                                                 <div className="subcategory" key={kitu.id}>
                                                           <h5>{kitu.name}</h5>
                                                           <ul>
                                                                  {kitu.subcategories && kitu.subcategories.length > 0 && kitu.subcategories.map(val =>
                                                                          <li key={val.id}><NavLink to={val.link}><span><HiOutlineArrowRight /></span>{val.name}</NavLink></li>
                                                                    )}
                                                           </ul>
                                                 </div>
                                         )}
                                </div>
                      </div>
                      :
                   <div className={active ? "dropdown-body active" : "dropdown-body" }>
                                       <div className="subcategory">
                                                <ul>
                                                       { data && data.submenu3.length > 0 && data.submenu3.map(item => 
                                                               <li key={item.id}><NavLink to={item.link}>{item.name}</NavLink></li>
                                                        )}
                                                </ul>
                                       </div>
                             </div>
                }
    </div>
  )
}

export default MobileDropdownMoja