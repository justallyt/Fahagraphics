import { MdOutlineArrowRight } from "react-icons/md";

const SingleProductBody = ({ data }) => {
    console.log(data);  
  return (
    <div className="single-product-wrapper">
               <div className="inner-row">
                           <div className="single-product-content">
                                       <div className="breadcrumb">
                                                 <h2>Products</h2>
                                                 <span><MdOutlineArrowRight /></span>
                                                 <h3>{data[0].main_category}</h3>
                                       </div>
                           </div>
               </div>
    </div>
  )
}

export default SingleProductBody