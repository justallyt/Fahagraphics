// import { BiSolidQuoteAltLeft } from "react-icons/bi"
// import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
// import { Autoplay } from "swiper"
// import { testimonials_data } from "../data/testimonials"
const Testimonials = () => {
  return (
    <div className="testimonials-section">
             <div className="inner-row">
                        <div className="testimonials-section-content">
                                    <div className="testimonials-intro" >
                                               <h1 data-aos='fade-right'>Message From <span>Our Founder</span> </h1>
                
                                    </div>
                                    <div className="testimonials-row"  data-aos='zoom-in-up'>
                                               <p className="ceo-message">
                                                           We as a company believe that we are competing against ourselves. We know that the heart and soul of a company is creativity and innovation. <br></br>
                                               </p>
                                               <p>We also appreciate the tireless effort from all our Stakeholders, business partners, customers and our employees who have always been there for us and were it not for them, the company would not be able to sustain the volatility of its commercial activities. I truly hope that the company will continue to get more positive support and trust in the future.</p>
                                              <div className="testimonial-row-container">
                                                          {/* <Swiper
                                                                  spaceBetween={20}
                                                                  slidesPerView={1}
                                                                  
                                                                  loop={true}
                                                                  autoplay={{
                                                                          delay: 3000,
                                                                          disableOnInteraction: false
                                                                  }}
                                                                modules={[Autoplay]}
                                                               breakpoints={{
                                                                     768: {
                                                                            slidesPerView: 2
                                                                     }
                                                               }}
                                                       >
                                                   { testimonials_data.map(item => 
                                                            <SwiperSlide key={item.id}>
                                                                    <div className="testimonial-moja">
                                                                             <span className="icon"><BiSolidQuoteAltLeft /></span>
                                                                           <p>{item.saying}</p>
                                                                           <div className="client">
                                                                                     <h4>{item.client}</h4>
                                                                                     <span>{item.position}</span>
                                                                           </div>
                                                                 </div>
                                                            </SwiperSlide>
                                                        )}
                                                     </Swiper> */}
                                              </div>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default Testimonials