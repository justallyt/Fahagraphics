import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import SubFilter from "./SubFilter";
import { productsContext } from "../context";

const SingleFilter = ({ data }) => {
  const [active, setActive] = useState(false)
  const [products, setProducts] = useContext(productsContext);
  const all_products = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []

  const filterByMainCategory = (txt) => {
          setActive(!active)
          const filtered = all_products.filter(item => item.main_category === txt);
          
          setProducts([{ title: txt, stuff: filtered}])
  }
  return (
    <div className="single-filter">
            <div className="single-filter-header" onClick={() => filterByMainCategory(data.header_text)}>
                       <h4>{data.header_text}</h4>
                      { data.subfilters && data.subfilters.length > 0 && <span><AiOutlinePlus /></span>}
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