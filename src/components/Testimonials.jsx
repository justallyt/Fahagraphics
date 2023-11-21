import { BiSolidQuoteAltLeft } from "react-icons/bi"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay } from "swiper"
import { testimonials_data } from "../data/testimonials"
const Testimonials = () => {
  return (
    <div className="testimonials-section">
             <div className="inner-row">
                        <div className="testimonials-section-content">
                                    <div className="testimonials-intro" >
                                               <h1 data-aos='fade-right'>What <span>Our Customers</span> Say</h1>
                                               <p data-aos='zoom-in-up'>Excellent at producing high quality ink, flexo paper and visual mockups for several of our clients and here are what they say about us:</p>
                                    </div>
                                    <div className="testimonials-row"  data-aos='zoom-in-up'>
                                              <div className="testimonial-row-container">
                                                          <Swiper
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
                                                     </Swiper>
                                              </div>
                                    </div>
                        </div>
             </div>
    </div>
  )
}

export default Testimonials