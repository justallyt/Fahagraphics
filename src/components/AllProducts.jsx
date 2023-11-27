import Filters from "./Filters"
import ProductsBody from "./ProductsBody"

const AllProducts = () => {
  return (
    <div className="all-products-section">
               <div className="inner-row">
                          <div className="products-section-row">
                                     <Filters />
                                     <ProductsBody />
                          </div>
               </div>
    </div>
  )
}

export default AllProducts