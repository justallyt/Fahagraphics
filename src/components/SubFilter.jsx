import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const SubFilter = ({ data }) => {
    const [active, setActive] = useState(false)
    
  return (
      <div className="sub-filter" >
                <div className="sub-filter-header">
                          <h5>{data.subfilter_header_text}</h5>
                          { data.minifilters && data.minifilters.length > 0 && <span onClick={() => setActive(!active)}><AiOutlinePlus /></span>}
               </div>
               <div className={ active ? "sub-filter-body show" : "sub-filter-body" }>
                           { data.minifilters && data.minifilters.length > 0 &&  data.minifilters.map(minifilter => 
                            <div className="mini-filter" key={minifilter.id}>
                                        <div className="mini-filter-header">
                                                   <h4>{minifilter.mini_header_text}</h4>
                                        </div>
                             </div>
                            )}
                            
                </div>
    </div>
  )
}

export default SubFilter