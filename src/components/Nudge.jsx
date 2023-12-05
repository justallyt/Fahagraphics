import { NavLink } from "react-router-dom"

const Nudge = () => {
  return (
    <div className="nudge-section">
                <div className="inner-row">
                          <div className="nudge-section-content">
                                    <h1 data-aos='zoom-in-right'>Take your Print Business to the Next Level</h1>
                                    <div className="explain-texts">
                                                <div className="explain-inner">
                                                         <p data-aos='zoom-in-left'>We go above and beyond to deliver quality, bringing the exact precision to revatilize your printing business.</p>
                                                          <NavLink to={'/contact-us/'} data-aos='zoom-in-left'>Let&apos;s Talk</NavLink>
                                                </div>
                                    </div>
                          </div>
                </div>
    </div>
  )
}

export default Nudge