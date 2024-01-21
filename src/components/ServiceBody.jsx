import print1 from "../assets/support2.jpg"
import print2 from '../assets/support1.jpg'
import artwork3 from "../assets/color-matching3.jpg"
import color1 from "../assets/color-matching2.jpg"
import color2 from '../assets/color-matching1.jpg'
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
                                                        <p data-aos='fade-left'>In a dream world, all colors match. Color matching is easy as the ink gets added in the press, and the job is run without any complications in mere seconds. Yes, that’s the dream. Right there. </p>
                                                        <p data-aos='fade-left'>However, many variables affect color and ink and time is wasted trying to get the colors right. Achieving color accuracy goes beyond adjustments on press and it starts with us. Even with the most accurate color matching tools available, we believe that it’s important that our clients are aware that a perfect match might not always be possible and how much variation they can realistically expect in their prints.</p>
                                                        <p data-aos='fade-left'>This is due to the fact that quite a number of factors affect the final color of a print, from the substrate to the curing time and temperature.</p>
                                             </div>
                                   </div>

                                   <div className="service-body-moja">
                                              <div className="service-title">
                                                        <h1 data-aos='fade-down'>Customized Ink to your Press</h1>
                                                        <div className="service-title-row special">
                                                                   <img src={artwork3} alt="" data-aos='zoom-in-up' />
                                                        </div>
                                              </div>
                                             <div className="body-service-text">
                                                        <p data-aos='fade-left'>Because ink is such an important part of the printing process, all ink interactions must be examined. Hundreds of variables influence ink design, including target substrates, productivity and quality, drying conditions, and post-processing, among others. We as a company believes that a successful ink formulation necessitates a comprehensive system approach that takes into account all of these elements in order to fulfill the appropriate application performance and functionality at a reasonable price.</p>
                                                       
                                             </div>
                                   </div>

                                   <div className="service-body-moja">
                                               <div className="service-title">
                                                        <h1 data-aos='fade-down'>Personalized Technical Support</h1>
                                                        <div className="service-title-row">
                                                                   <img data-aos='zoom-in-right' src={print1} alt="" />
                                                                   <img data-aos='zoom-in-left' src={print2} alt="" />
                                                        </div>
                                              </div>
                                             <div className="body-service-text">
                                                        <p data-aos='fade-left'>You can always rely on us for the latest know-how and a wealth of experience from us. At the same time, we often do more than just resolving the immediate problem. We also show you ways of avoiding difficulties with a view to the future. In this way, quality problems, material rejects, bottlenecks and customer complaints can be significantly reduced.</p>
                                                        <p data-aos='fade-left'>Service is only as good as its accessibility. Our staff are therefore available at short notice – whether by telephone, e-mail or by an expert visiting your machine. And it goes without saying that you will have your own personal point of contact.</p>
                                             </div>
                                   </div>
                        </div>
              </div>
    </div>
  )
}

export default ServiceBody