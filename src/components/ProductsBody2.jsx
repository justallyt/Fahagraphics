import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productsContext } from "../context";
import { BsBoxArrowInRight } from "react-icons/bs";

const ProductsBody2 = () => {
    const [productsData, setProductsData] = useContext(productsContext);
    // const all_products = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []
    const shuffled = productsData[0].stuff.filter(group => group.main_category === productsData[0].category)
    const navigate = useNavigate();
  return (
    <div className="products-wrapper">
               <div className="inner-row">
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
                                        ) : <p>No products found for your selection</p>}
                         </div>
               </div>
     </div>
  )
}

export default ProductsBody2