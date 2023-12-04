import { GoSearch } from "react-icons/go";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { productsContext } from "../context";
const ProductsBody = () => { 
  const [productsData, setProductsData] = useContext(productsContext)
  const all_products = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []
  const shuffled = productsData[0].stuff.sort(() => Math.random() - 0.45);
  const navigate = useNavigate();
  const searchProducts = (e) =>{
         if(e.target.value === ''){
                setProductsData([{ title: 'All Products', stuff: all_products}]);
         }else{
              const filteredData = productsData[0].stuff.filter(item => (
                      item.title.toLowerCase().includes(e.target.value.toString().toLowerCase())
              ))
          
              setProductsData([{title: "All Products", stuff: filteredData}])
         }
  }
  return (
    <div className="products-body">
                <div className="products-body-content">
                             <div className="products-body-header">
                                          <h2>{productsData[0].title}</h2>
                                          <div className="search-bar-area">
                                                    <span><GoSearch /></span>
                                                    <input type="text" className="search-control" placeholder="Search products here" onChange={(e) => searchProducts(e)} />
                                          </div>
                             </div>

                             <div className="products-row">
                                       { shuffled.length > 0 ? shuffled.map(item => 
                                             <div className="product-moja" key={item.id} onClick={() => navigate(item.link)}>
                                                       <div className="product-image">
                                                                <img src={item.main_image} alt="" /> 
                                                       </div>
                                                        <h3>{item.title}</h3>
                                                        <div className="categories">
                                                                 <span>{item.main_category}</span>
                                                                 { item.subcategory && <span>{item.subcategory}</span>}
                                                        </div>
                                                        <Link to={item.link}>Inquire <span><BsBoxArrowInRight /></span></Link>
                                             </div>               
                                        ) : <p>No products found</p>}
                             </div>
                </div>
    </div>
  )
}

export default ProductsBody