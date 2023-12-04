
const OffsetPrintingInks = ({ offset}) => {
  return (
             <div className="offset-printing-inks">
                        <h2>Offset Printing Inks</h2>
                        <p>Offset ink is a specific type of ink used in conjunction with offset printing presses, such as those used to produce letterpress or lithography prints. Such ink must be specially formulated to resist other chemicals it will come in contact with on the printing press. It is widely used for printing high-quality images and text on various substrates such as paper, cardboard, and certain plastics.</p>
                        <p>It is crucial that offset ink resist water-in-ink emulsification (e.g., repel rather than absorb water). It also should withstand degradation by the fountain solution that covers the non-printing areas of the engraved plate. Offset ink needs to be very rich in pigment so that its full color vibrancy is perceptible, even in minute quantity.</p>

                      <div className="sheetfed-offset-inks">
                                  <div className="intro">
                                            <span>a.) Sheetfed Offset Printing Inks </span>
                                             <p >These are used in printing books and journals in the printing sector , posters and publications in the advertisement and graphic sector, paper and folio labels and all kind of cardboard packages in the packaging sector.</p>
                                  </div>
                                 <div className="offset-row">
                                             { offset.filter(item => item.minicategory === 'Sheetfed Offset Printing Inks').reverse().map((item, index) => 
                                                        <div className="sheetfed-moja" key={item.id}>
                                                                <h4>{index + 1}. {item.title}</h4>
                                                                <div className="item-body">
                                                                        { item.product_images && item.product_images.map(image => <img src={image} key={image} />)}
                                                                 </div>
                                                       </div>
                                                                                                            
                                               )}
                                 </div>
                         </div>
                        <div className="web-offset">
                                 <div className="intro">
                                             <span>b.) Web Offset Printing Inks</span>
                                                <p>Coldset Offset printing is a process by which the ink dries gradually through evaporation and absorption into the paper. Majorly used by Newspaper Printers eg. Nation & Standard Media Group</p>
                                               <p>Coldset printing is most commonly used on uncoated paper stocks like newsprint. Since the ink is not set immediately, theres is always a little bit of residue that remains on the paper. Coldset is one of the more economical forms of printing that allows multiple webs to run concurrently, while using less expensive uncoated paper and energy to produce the product.</p>
                                 </div>
                                 <div className="offset-row">
                                             { offset.filter(item => item.minicategory === 'Web Offset Printing Inks').map((stuff , index)=>  
                                                    <div className="sheetfed-moja" key={stuff.id}>
                                                            <h4>{index + 1}. {stuff.title}</h4>
                                                             <div className="item-body">
                                                                       { stuff.product_images && stuff.product_images.map(image => <img src={image} key={image} />)}
                                                             </div>
                                                    </div>
                                               )}
                                   </div>
                          </div>
                </div>
  )
}

export default OffsetPrintingInks