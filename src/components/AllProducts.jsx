import { useEffect, useState } from "react"
import { products } from "../data/products"
import Filters from "./Filters"
import ProductsBody from "./ProductsBody"
import { productsContext } from "../context"
import { GiCog } from "react-icons/gi";

const AllProducts = () => {
  const [fgProducts, setFgProducts] = useState([{title: "All Products", stuff: products}])
  const [mobileFilter, setMobileFilter] = useState(false)
  useEffect(() => {
          localStorage.setItem('Products', JSON.stringify(products))
  }, [])

  return (
    <div className="all-products-section">
               <div className="inner-row">
                            <div className="filter-btn" onClick={() => setMobileFilter(!mobileFilter)}>
                                        <span><GiCog /></span>
                            </div>
                          <div className="products-section-row">
                                     <productsContext.Provider value={[fgProducts, setFgProducts]}>
                                               <Filters  status={mobileFilter} />
                                               <ProductsBody />
                                     </productsContext.Provider>
                          </div>
               </div>
    </div>
  )
}

export default AllProducts