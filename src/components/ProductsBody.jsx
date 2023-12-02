import { GoSearch } from "react-icons/go";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../context";
const ProductsBody = () => { 
  const [productsData, setProductsData] = useContext(productsContext)
  const all_products = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []
  
  const shuffled = productsData.sort(() => Math.random() - 0.45);

  const searchProducts = (e) =>{
         if(e.target.value === ''){
                setProductsData(all_products);
         }else{
              const filteredData = productsData.filter(item => (
                      item.title.toLowerCase().includes(e.target.value.toString().toLowerCase())
              ))
              setProductsData(filteredData)
         }
  }
  return (
    <div className="products-body">
                <div className="products-body-content">
                             <div className="products-body-header">
                                          <h2>All Products</h2>
                                          <div className="search-bar-area">
                                                    <span><GoSearch /></span>
                                                    <input type="text" className="search-control" placeholder="Search products here" onChange={(e) => searchProducts(e)} />
                                          </div>
                             </div>

                             <div className="products-row">
                                       { shuffled.length > 0 ? shuffled.map(item => 
                                             <div className="product-moja" key={item.id}>
                                                       <div className="product-image">
                                                                <img src={item.main_image} alt="" /> 
                                                       </div>
                                                        <h3>{item.title}</h3>
                                                        <div className="categories">
                                                                 <span>{item.main_category}</span>
                                                                 { item.subcategory && <span>{item.subcategory}</span>}
                                                        </div>
                                                        <Link to={'/'}>Inquire <span><BsBoxArrowInRight /></span></Link>
                                             </div>               
                                        ) : <p>No products found</p>}
                             </div>
                </div>
    </div>
  )
}

export default ProductsBody