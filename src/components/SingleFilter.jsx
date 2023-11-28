import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import SubFilter from "./SubFilter";

const SingleFilter = ({ data }) => {
  const [active, setActive] = useState(false)

  return (
    <div className="single-filter">
            <div className="single-filter-header">
                       <h4>{data.header_text}</h4>
                      { data.subfilters && data.subfilters.length > 0 && <span onClick={() => setActive(!active)}><AiOutlinePlus /></span>}
            </div>
           <div className={ active ? "single-filter-body show" : "single-filter-body"}>
                     { data.subfilters && data.subfilters.length > 0 && data.subfilters.map(subfilter => 
                             <SubFilter key={subfilter.id} data={subfilter} />
                        )}
           </div>
</div>
  )
}

export default SingleFilter