
const UVPrintingInks = ({ uv }) => {
  return (
    <div className="offset-printing-inks">
                  <h2>UV Printing Inks</h2>
                  <p>UV printing inks are special inks that have been formulated to dry and cure upon exposure to ultraviolet light sources inside the press. UV inks can be bolder and more vibrant than conventional offset inks because there is virtually no dry back. Once printed, sheets arrive in the delivery stacker immediately ready for the next operation. This results in a more efficient workflow and can often improve turnaround times, with cleaner lines and less chance of potential smudging.</p>

                  <div className="uv-inks-row">
                            { uv.map((item, index) => 
                                    <div className="uv-ink-moja" key={item.id}>
                                                 <div className="intro">
                                                             <span>{index === 0 ? 'a.' : 'b.'}) {item.title}</span>
                                                              { item.product_description.length > 0 ? 
                                                                      <>
                                                                            <p> {item.product_description[0]}</p>
                                                                            <p> {item.product_description[1]}</p>
                                                                      </>
                                                                :
                                                                    <p>{item.product_description[0]}</p>
                                                                }
                                                          
                                                 </div>
                                                 <div className="item-body">
                                                          { item.product_images && item.product_images.map(image => <img src={image} key={image} />)}
                                                  </div>
                                    </div>
                             )}
                  </div>
    </div>
  )
}

export default UVPrintingInks