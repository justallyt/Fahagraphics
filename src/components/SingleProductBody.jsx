import { MdOutlineArrowRight } from "react-icons/md";
import OffsetPrintingInks from "./OffsetPrintingInks";
import UVPrintingInks from "./UVPrintingInks";

const SingleProductBody = ({ data }) => {
   let new_data = data.filter(item => item.main_category !== 'Printing Inks')
   let special_data = data.filter(item => item.main_category === 'Printing Inks')
   let other_special_data = special_data.filter(item => item.subcategory !== 'Offset Printing Inks' && item.subcategory !== 'UV Printing Inks')
   let offset = special_data.filter(item => item.subcategory === 'Offset Printing Inks')
   let uv = special_data.filter(item => item.subcategory === 'UV Printing Inks')
  console.log(uv); 
  return (
    <div className="single-product-wrapper">
               <div className="inner-row">
                           <div className="single-product-content">
                                       <div className="breadcrumb">
                                                 <h2>Products</h2>
                                                 <span><MdOutlineArrowRight /></span> 
                                                 <h3>{ special_data.length > 0 ? special_data[0].main_category : new_data[0].main_category}</h3>
                                       </div>

                                       { special_data.length > 0 ? 
                                                <div className="single-product-row">
                                                            <div className="products-column">
                                                                       <OffsetPrintingInks  offset={offset}/>
                                                                       <UVPrintingInks uv={uv} />
                                                                       { other_special_data.map((item) => 
                                                                                 <div className="product-moja-row" key={item.id}>
                                                                                            <h2>{ item.title}</h2>
                                                                                            <p className="product-desc">{item.product_description && item.product_description[0]}</p>
                                                                                            <div className="item-body">
                                                                                                   { item.product_images && item.product_images.length > 0 && item.product_images.map(image => 
                                                                                                <img src={image} key={image} alt="" />
                                                                                                 )}
                                                                                       </div>
                                                                                 </div>
                                                                       )}
                                                            </div>
                                                           <div className="form-column">
                                                                 <div className="form-column-body">
                                                                       <div className="form-column-intro">
                                                                              <h3>Interested in any {special_data[0].main_category} Products</h3>
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
                                                                                                <label htmlFor="product">Select Product</label>
                                                                                                  <select className="input-control">
                                                                                                           <option value="">Select</option>
                                                                                                           { special_data && special_data.length > 0 && [...new Set(special_data.map(val => (val.subcategory)))].map(item => 
                                                                                                                 <option key={item} value=    {item.subcategory}>{item}</option>
                                                                                                               )}
                                                                                                 </select>
                                                                                      </div>
                                                                                     <div className="row-moja">
                                                                                                <label htmlFor="message">Extra Info on your inquiry</label>
                                                                                                <textarea placeholder="Any extra info on your inquiry"  cols="30" rows="10"></textarea>
                                                                                     </div>
                                                                                     <div className="row-btn">
                                                                                               <button type="submit">Send Inquiry</button>
                                                                                     </div>
                                                                        </form>
                                                                </div>
                                                         </div>
                                                </div>
                                           :
                                           <div className="single-product-row">
                                               <div className="products-column">
                                                      { new_data && new_data.length > 0 && new_data.map((item, index) => 
                                                                 <div className="product-moja-row" key={item.id}>
                                                                              <h2>{index + 1}. {item.title}</h2>
                                                                               {item.product_description && item.product_description.length > 1 ?
                                                                                       <div className="more">
                                                                                                 <p className="product-desc">{item.product_description[0]}</p>
                                                                                                 <ol type='a'>
                                                                                                          {item.product_description.slice(1).map(val => <li key={val.name}>
                                                                                                                  <span className="big">{val.name}</span>
                                                                                                                    <p>{val.text}</p>
                                                                                                          </li>)}
                                                                                                 </ol>
                                                                                       </div>
                                                                                       :
                                                                                       <p className="product-desc">{item.product_description && item.product_description[0]}</p>
                                                                                }
                                                                              <div className="item-body">
                                                                                        { item.product_images && item.product_images.length > 0 && item.product_images.map(image => 
                                                                                                <img src={image} key={image} alt="" />
                                                                                        )}
                                                                              </div>
                                                                 </div>
                                                        )}
                                           </div>
                                           <div className="form-column">
                                                      <div className="form-column-body">
                                                             <div className="form-column-intro">
                                                                    <h3>Interested in any {new_data[0].main_category} Products</h3>
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
                                                                                    <label htmlFor="product">Select Product</label>
                                                                                      <select className="input-control">
                                                                                                <option value="">Select</option>
                                                                                                { new_data && new_data.length > 0 && [...new Set(new_data.map(val => (val.subcategory)))].map(item => 
                                                                                                     <option key={item} value=    {item.subcategory}>{item}</option>
                                                                                                    )}
                                                                                      </select>
                                                                          </div>
                                                                          <div className="row-moja">
                                                                                     <label htmlFor="message">Extra Info on your inquiry</label>
                                                                                     <textarea placeholder="Any extra info on your inquiry"  cols="30" rows="10"></textarea>
                                                                          </div>
                                                                          <div className="row-btn">
                                                                                    <button type="submit">Send Inquiry</button>
                                                                          </div>
                                                              </form>
                                                      </div>
                                           </div>
                               </div>  
                                           }
                           </div>
               </div>
    </div>
  )
}

export default SingleProductBody