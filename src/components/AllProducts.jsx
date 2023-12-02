import { useEffect, useState } from "react"
import { products } from "../data/products"
import Filters from "./Filters"
import ProductsBody from "./ProductsBody"
import { productsContext } from "../context"
const AllProducts = () => {
  const [fgProducts, setFgProducts] = useState(products)
  useEffect(() => {
          localStorage.setItem('Products', JSON.stringify(products))
  }, [])
  return (
    <div className="all-products-section">
               <div className="inner-row">
                          <div className="products-section-row">
                                     <productsContext.Provider value={[fgProducts, setFgProducts]}>
                                               <Filters />
                                               <ProductsBody />
                                     </productsContext.Provider>
                          </div>
               </div>
    </div>
  )
}

export default AllProducts