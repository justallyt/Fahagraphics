import shop from "../assets/storyImg2.jpg"
import mission from "../assets/pride-of-lions.jpg"
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
                                                        <h1>16+</h1>
                                                        <h5>Years in the market</h5>
                                               </div>
                                               <div className="bar-moja">
                                                         <h1>5+</h1>
                                                         <h5>Specialized Ink Experts</h5>
                                               </div>
                                               <div className="bar-moja">
                                                          <h1>20+</h1>
                                                           <h5>Countries</h5>
                                               </div>
                                               <div className="bar-moja">
                                                          <h1>8AM-5PM</h1>
                                                          <h5>Availability</h5>
                                               </div>
                                    </div>

                                    <div className="story-row">
                                                <div className="story-texts">
                                                           <h3 data-aos='fade-down'>Our Story</h3>
                                                           <p data-aos='fade-up'>Fahagraphics Enterprises Limited was incorporated in 2007 in Kenya as dealers and suppliers of printing inks, printing ink consumables and large format media products. Our products are presently being supplied to various market segments as follows: offset printing industry, web offset printing industry (newspaper printing & book publishers), gravure & flexo printing industry, large format digital printers and stationery shops.</p>
                                                           <p data-aos='fade-up'>We also pride ourselves as authorized distributors for the following companies:DAETWYLER, KINYO, SIEGWERK, ATECE and JANECKE+SCHNEEMANN.</p>
                                                           <p data-aos='fade-up'>Over the decades we have maintained a successful track record of continuous growth and innovation. As a family-led business, our key focus is to create valuable, long-lasting relationships with our clients, and provide you with the means to grow your business.</p>
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
                                                              
                                                                     <h2 data-aos='fade-left'>We aspire to be a “One Stop Print solution” Company for packaging, coating and large format customers both in Kenya and in the larger Eastern Africa market, with better services at the most competitive prices.</h2>
                                                                     <p data-aos='fade-left'>We aim to remain one of the most successful suppliers of printing inks and printing consumables in East African Market, through provision of the best-quality inks for the offset, liquid and solvent clients. We pride ourselves in utilization of state-of-the-art machineries in our premises, complimented with the most skilled and experienced industry professionals, with a huge investment and commitment to environmental preservation.</p>
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