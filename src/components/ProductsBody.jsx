import { GoSearch } from "react-icons/go";
import { products } from "../data/products";
const ProductsBody = () => {
  return (
    <div className="products-body">
                <div className="products-body-content">
                             <div className="products-body-header">
                                          <h2>All Products</h2>
                                          <div className="search-bar-area">
                                                    <span><GoSearch /></span>
                                                    <input type="text" className="search-control" placeholder="Search products here" />
                                          </div>
                             </div>

                             <div className="products-row">
                                       { products.map(item => 
                                             <div className="product-moja" key={item.id}>
                                                       <div className="product-image">
                                                                <img src={item.main_image} alt="" />
                                                       </div>
                                                        <h3>{item.title}</h3>
                                             </div>
                                        
                                        )}
                             </div>
                </div>
    </div>
  )
}

export default ProductsBody