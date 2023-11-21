import shop from "../assets/storyImg.jpg"
import mission from "../assets/mission.jpg"
import reliability from "../assets/reliabilty.png"
import growth from "../assets/growth.png"
import customer from "../assets/customer.png"
import innovation from "../assets/innovation.png"
const AboutDescription = () => {
  return (
    <div className="about-row">
            <div className="inner-row">
                         <div className="about-row-content">
                                    <div className="conclusive-bar" data-aos='zoom-in-up'>
                                               <div className="bar-moja">
                                                           <h1>99%</h1>
                                                           <h5>Customer Loyalty</h5>
                                               </div>
                                               <div className="bar-moja">
                                                          <h1>6000+</h1>
                                                          <h5>Clients worldwide</h5>
                                               </div>
                                               <div className="bar-moja">
                                                        <h1>20+</h1>
                                                        <h5>Years in the markets</h5>
                                               </div>
                                               <div className="bar-moja">
                                                         <h1>150+</h1>
                                                         <h5>Specialized Analysts</h5>
                                               </div>
                                               <div className="bar-moja">
                                                          <h1>30+</h1>
                                                           <h5>Countries</h5>
                                               </div>
                                               <div className="bar-moja">
                                                          <h1>24/7</h1>
                                                          <h5>Availability</h5>
                                               </div>
                                    </div>

                                    <div className="story-row">
                                                <div className="story-texts">
                                                           <h3 data-aos='fade-down'>Our Story</h3>
                                                           <p data-aos='fade-up'>Fahagraphics Enterprises Limited was incorporated in 2006 by Mr. Fardeen Abdulla. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum qui dolores ab omnis est vero tempore magnam! Eius vel illum explicabo ullam blanditiis fuga dolorum voluptate ipsum praesentium quos sint provident, quisquam tempora accusamus perferendis. Ad at non ipsam neque!</p>
                                                           <p data-aos='fade-up'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora alias libero minima est aliquid perferendis impedit incidunt vero rem aspernatur accusantium accusamus labore pariatur, voluptatum illo expedita et qui aperiam, minus esse eius?</p>
                                                </div>
                                                <div className="shop-hook-image">
                                                          <img data-aos='zoom-in' src={shop} alt="" />
                                                          <div  className="back-overlay"></div>
                                                </div>
                                    </div>

                                    <div className="statements-row">
                                               <div className="statements-image">
                                                        <img data-aos='zoom-in' src={mission} alt="" />
                                               </div>
                                               <div className="statements-texts">
                                                         <div className="statements-inner">
                                                                    <h3 data-aos='fade-down'>Our Mission</h3>
                                                                     <p data-aos='fade-left'>Printing businesses has transformative powers, and we believe everyone should be able to take part. But outdated solutions and overwhelmed systems create uncertianty and risk.</p>
                                                                     <h2 data-aos='fade-left'>We therefore are on a mission to empower print businesses to realize their full potential by reliably and conveniently supplying them with quality products.</h2>
                                                                     <p data-aos='fade-left'>Additionaly we have a vision to continue growing and Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum, rem incidunt eum dolor aperiam voluptatibus culpa aspernatur quia itaque maiores explicabo voluptas impedit? Quod voluptatem, dolore tempore repudiandae quos error?</p>
                                                         </div>
                                               </div>
                                    </div>

                                    <div className="values-section">
                                                <div className="values-intro">
                                                           <h1 data-aos='zoom-in-down'>Our Values</h1>
                                                           <p data-aos='fade-up'>Our values speak for themselves. They unite us as a team and determine the way we work and serve our clients. They are what drives us and inspire us.</p>
                                                </div>
                                                <div className="values-row">
                                                          <div className="value-moja" data-aos='zoom-in-right'>
                                                                      <img src={reliability} alt="" />
                                                                      <h2>Reliability</h2>
                                                                      <p>We take great pride in our wide variety and  in delivering quality to our customers conveniently </p>
                                                          </div>
                                                          <div className="value-moja" data-aos='zoom-in'>
                                                                      <img src={growth} alt="" />
                                                                      <h2>Growth</h2>
                                                                      <p>We are always expanding and figuring out new ideological ways of serving our customers in better and efficient ways.</p>
                                                          </div>
                                                          <div className="value-moja" data-aos='zoom-in'>
                                                                      <img src={customer} alt="" />
                                                                      <h2>Customer Service</h2>
                                                                      <p>We place a large focus on how we relate with our clients as we engage with respect throughout the service process.</p>
                                                          </div>
                                                          <div className="value-moja" data-aos='zoom-in-left'>
                                                                      <img src={innovation} alt="" />
                                                                      <h2>Efficiency</h2>
                                                                      <p>We implement effective time management and ensure work-life balance in our team </p>
                                                          </div>
                                                </div>
                                    </div>
                         </div>
            </div>
    </div>
  )
}

export default AboutDescription