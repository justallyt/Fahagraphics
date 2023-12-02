import { useContext, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { productsContext } from "../context";
const SubFilter = ({ data }) => {
    const [active, setActive] = useState(false)
    const [products, setProducts ] = useContext(productsContext)
    const all_products = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []

    const filterBySubCategory = (txt) => {
             setActive(!active)
             const filtered = all_products.filter(item => item.subcategory !== undefined).filter(kitu => kitu.subcategory === txt)
        
             setProducts([{ title: filtered[0].main_category, stuff: filtered}])
    }
  return (
      <div className="sub-filter" >
                <div className="sub-filter-header" onClick={() => filterBySubCategory(data.subfilter_header_text)}>
                          <h5>{data.subfilter_header_text}</h5>
                          {/* { data.minifilters && data.minifilters.length > 0 && <span onClick={() => setActive(!active)}><AiOutlinePlus /></span>} */}
               </div>
               {/* <div className={ active ? "sub-filter-body show" : "sub-filter-body" }>
                           { data.minifilters && data.minifilters.length > 0 &&  data.minifilters.map(minifilter => 
                            <div className="mini-filter" key={minifilter.id}>
                                        <div className="mini-filter-header">
                                                   <h4>{minifilter.mini_header_text}</h4>
                                        </div>
                             </div>
                            )}
                            
                </div> */}
    </div>
  )
}

export default SubFilter