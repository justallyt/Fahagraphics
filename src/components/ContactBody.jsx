import { BsPhoneVibrate, BsEnvelope, BsPinMap } from "react-icons/bs"
const ContactBody = () => {
  return (
    <div className="contact-body">
                     <div className="inner-row">
                               <div className="contact-body-content">
                                            <div className="contact-intro">
                                                           <h3>Have Any Questions?</h3>
                                                           <h1>Contact Us</h1>
                                            </div>

                                            <div className="contact-body-row">
                                                         <div className="contact-details">
                                                                     <h4>Contact Info</h4>
                                                                     <p className="intro">Fill up the form and our team will get back to you within 24 hours.</p>

                                                                     <div className="detail-moja">
                                                                                  <span><BsPhoneVibrate /></span>
                                                                                  <p>+254 720 116430</p>
                                                                     </div>
                                                                     <div className="detail-moja">
                                                                                <span><BsEnvelope /></span>
                                                                                <p>info@fahagraphics.co.ke</p>
                                                                     </div>
                                                                     <div className="detail-moja">
                                                                                  <span><BsPinMap /></span>
                                                                                  <p>Atlantis ICD Business Park, Old Mombasa Road, Nairobi, Kenya</p>
                                                                     </div>
                                                         </div>
                                                         <div className="contact-form">
                                                                    <form action="">
                                                                               <div className="form-row">
                                                                                           <label htmlFor="Name">Full Name <span>*</span></label>
                                                                                           <input type="text" className="form-control"  />
                                                                               </div>
                                                                               <div className="form-row split">
                                                                                           <div className="form-column">
                                                                                                     <label htmlFor="email">Email Address <span>*</span></label>
                                                                                                     <input type="email" name="" className="form-control" />
                                                                                           </div>
                                                                                           <div className="form-column">
                                                                                                     <label htmlFor="Phone">Contact No. <span>*</span></label>
                                                                                                     <input type="number" name="" className="form-control"  pattern="[0-9]+"/>
                                                                                           </div>
                                                                               </div>
                                                                               <div className="form-row">
                                                                                          <label htmlFor="Interest">Interest</label>
                                                                                          <select name="" className="form-control select">
                                                                                                      <option value="General Inquiry">General Inquiry</option>
                                                                                                      <option value="Printing Inks">Printing Inks</option>
                                                                                                      <option value="Printing Consumables">Printing Consumables</option>
                                                                                                      <option value="Pressroom Chemicals">Pressroom Chemicals</option>
                                                                                                      <option value="Paper">Paper</option>
                                                                                          </select>
                                                                               </div>
                                                                               <div className="form-row">
                                                                                            <label htmlFor="Message">Message <span>*</span></label>
                                                                                             <textarea name="" id="" cols="30" rows="10"></textarea>
                                                                               </div>

                                                                               <div className="form-btn">
                                                                                          <button type="submit">Send Message</button>
                                                                               </div>
                                                                    </form>
                                                         </div>
                                            </div>

                                            <div className="office-map-wrapper">
                                                     <h3>Visit Our Offices</h3>
                                                     <div className="office-map">
                                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.882002857159!2d36.882043!3d-1.3441153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0df6dd2d8809%3A0x8ae8ff2732fb1eab!2sAtlantis%20Business%20Park!5e0!3m2!1sen!2ske!4v1695903292331!5m2!1sen!2ske" width="600" height="450" allowFullScreen="" loading="lazy"  referrerPolicy="no-referrer-when-downgrade"></iframe>
                                                     </div>
                                            </div>
                               </div>
                     </div>
           </div>
  )
}

export default ContactBody