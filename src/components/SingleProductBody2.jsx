import { MdOutlineArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

const SingleProductBody2 = ({data, param}) => {
    const navigate = useNavigate();
    const firstly = data.filter(item => item.title.toLowerCase().replaceAll(" ", "-") === param);
    const new_data = data.filter(item => item.title.toLowerCase().replaceAll(" ", "-") !== param);
    new_data.unshift(firstly[0])  
  return (
    <div className="single-product-wrapper">
               <div className="inner-row">
                         <div className="single-product-content">
                                      <div className="breadcrumb">
                                                 <h2 onClick={() => navigate('/products/')}>Products</h2>
                                                 <span><MdOutlineArrowRight /></span> 
                                                 <h3 onClick={() => navigate(`/product/${data[0].main_category.replaceAll(" ", "-").toLowerCase()}`)}>{ data.length > 1 ? data[0].main_category : data[0].main_category}</h3>
                                                 <span><MdOutlineArrowRight /></span>
                                                 <h3>{data.length > 1 ? data[0].minicategory : data[0].subcategory}</h3>
                                       </div>

                                       <div className="single-product-row">
                                                     <div className="products-column">
                                                                 { data.length > 1 ?
                                                                       <div className="product-moja-row">
                                                                                <p className="product-desc">These are used in printing books and journals in the printing sector , posters and publications in the advertisement and graphic sector, paper and folio labels and all kind of cardboard packages in the packaging sector.</p>

                                                                                <div className="offset-row">
                                                                                       { new_data.filter(item => item.minicategory === 'Sheetfed Offset Printing Inks').map((item, index) => 
                                                                                                <div className="sheetfed-moja" key={item.id}>
                                                                                                        <h4>{index + 1}. {item.title}</h4>
                                                                                                        <div className="item-body">
                                                                                                                { item.product_images && item.product_images.map(image => <img src={image} key={image} />)}
                                                                                                         </div>
                                                                                               </div>
                                                                                         )}
                                                                            </div>
                                                                       </div>
                                                                  :
                                                                <div className="product-moja-row">
                                                                           { data[0].product_description && data[0].product_description.length > 2 ?
                                                                                  <div className="more">
                                                                                                 <p className="product-desc">{data[0].product_description[0]}</p>
                                                                                                 <ol type='a'>
                                                                                                          {data[0].product_description.slice(1).map(val => <li key={val.name}>
                                                                                                                  <span className="big">{val.name}</span>
                                                                                                                    <p>{val.text}</p>
                                                                                                          </li>)}
                                                                                                 </ol>
                                                                                       </div>
                                                                            :                                                             
                                                                                  data[0].product_description && data[0].product_description.map(item => <p className="product-desc" key={item}>{item}</p>)
                                                                            }
                                                                           
                                                                             <div className="item-body">
                                                                                                   { data[0].product_images && data[0].product_images.length > 0 && data[0].product_images.map(image => 
                                                                                        <img src={image} key={image} alt="" />
                                                                                     )}
                                                                             </div>
                                                                 </div>
                                                                }
                                                     </div>
                                                     <div className="form-column">
                                                          <div className="form-column-body">
                                                                       <div className="form-column-intro">
                                                                              <h3>Interested in {data[0].subcategory}</h3>
                                                                              <p>Fill in the form below and submit to get a quote from us.</p>
                                                                       </div>
                                                                        <form action="">
                                                                                    <div className="row-moja">
                                                                                             <label htmlFor="name">Full Name <span>*</span></label>
                                                                                                <input type="text" className="input-control" placeholder="Your name" />
                                                                                    </div>
                                                                                     <div className="row-moja">
                                                                                             <label htmlFor="email">Email Address <span>*</span></label>
                                                                                             <input type="email" placeholder="Your email" className="input-control" />
                                                                                      </div>
                                                                                      <div className="row-moja">
                                                                                                  <label htmlFor="phone">Phone Number <span>*</span></label>
                                                                                                  <input type="number" className="input-control" placeholder="Your phone contact" />
                                                                                      </div>
                                                                                     <div className="row-moja">
                                                                                                <label htmlFor="product">Product</label>
                                                                                                  <select className="input-control">
                                                                                                           <option value={data.length>1 ? data[0].minicategory : data[0].subcategory}>{data.length>1 ? data[0].minicategory : data[0].subcategory}</option>
                                                                                                          
                                                                                                 </select>
                                                                                      </div>
                                                                                     <div className="row-moja">
                                                                                                <label htmlFor="message">Extra Info on your inquiry</label>
                                                                                                <textarea placeholder="Any extra info on your inquiry"  cols="30" rows="10"></textarea>
                                                                                     </div>
                                                                                     <div className="row-btn">
                                                                                               <button type="submit">Send Inquiry what</button>
                                                                                     </div>
                                                                        </form>
                                                                </div>
                                                     </div>
                                       </div>
                         </div>
               </div>
    </div>
  )
}

export default SingleProductBody2