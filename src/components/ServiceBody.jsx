import print1 from "../assets/prints1.jpg"
import print2 from '../assets/prints2.jpg'
import artwork3 from "../assets/artwork3.jpg"
import color1 from "../assets/color-match-2.jpg"
import color2 from '../assets/color-match.jpg'
const ServiceBody = () => {
  return (
    <div className="service-section">
              <div className="inner-row">
                        <div className="service-section-content">
                                   <div className="service-body-moja">
                                              <div className="service-title">
                                                        <h1 data-aos="fade-down">Color Matching</h1>
                                                        <div className="service-title-row">
                                                                   <img data-aos='zoom-in-right' src={color1} alt="" />
                                                                   <img data-aos='zoom-in-left' src={color2} alt="" />
                                                        </div>
                                              </div>
                                             <div className="body-service-text">
                                                        <p data-aos='fade-left'>Ink has changed the world of marketing. It’s difficult to imagine well known branded products without their clearly identified colours. In a world of rapid change, colour is a one glance identifier for your product and eye catcher until it creates its own niche. At Fahagraphics the objective is not only to match the precise colour required but also to be innovative and pro-active in offering alternative solutions, not only in ink but ideas.</p>
                                                        <p data-aos='fade-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni debitis nostrum sunt ex odio cumque perferendis, voluptatem pariatur? Dignissimos voluptas deserunt ea illo cupiditate doloribus quos at pariatur, maiores omnis!</p>
                                             </div>
                                   </div>

                                   <div className="service-body-moja">
                                              <div className="service-title">
                                                        <h1 data-aos='fade-down'>Artworks &  Mockups</h1>
                                                        <div className="service-title-row special">
                                                                   <img src={artwork3} alt="" data-aos='zoom-in-up' />
                                                        </div>
                                              </div>
                                             <div className="body-service-text">
                                                        <p data-aos='fade-left'>Ink has changed the world of marketing. It’s difficult to imagine well known branded products without their clearly identified colours. In a world of rapid change, colour is a one glance identifier for your product and eye catcher until it creates its own niche. At Fahagraphics the objective is not only to match the precise colour required but also to be innovative and pro-active in offering alternative solutions, not only in ink but ideas.</p>
                                                        <p data-aos='fade-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni debitis nostrum sunt ex odio cumque perferendis, voluptatem pariatur? Dignissimos voluptas deserunt ea illo cupiditate doloribus quos at pariatur, maiores omnis!</p>
                                             </div>
                                   </div>

                                   <div className="service-body-moja">
                                               <div className="service-title">
                                                        <h1 data-aos='fade-down'>Print Supply</h1>
                                                        <div className="service-title-row">
                                                                   <img data-aos='zoom-in-right' src={print1} alt="" />
                                                                   <img data-aos='zoom-in-left' src={print2} alt="" />
                                                        </div>
                                              </div>
                                             <div className="body-service-text">
                                                        <p data-aos='fade-left'>Ink has changed the world of marketing. It’s difficult to imagine well known branded products without their clearly identified colours. In a world of rapid change, colour is a one glance identifier for your product and eye catcher until it creates its own niche. At Fahagraphics the objective is not only to match the precise colour required but also to be innovative and pro-active in offering alternative solutions, not only in ink but ideas.</p>
                                                        <p data-aos='fade-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni debitis nostrum sunt ex odio cumque perferendis, voluptatem pariatur? Dignissimos voluptas deserunt ea illo cupiditate doloribus quos at pariatur, maiores omnis!</p>
                                             </div>
                                   </div>
                        </div>
              </div>
    </div>
  )
}

export default ServiceBody