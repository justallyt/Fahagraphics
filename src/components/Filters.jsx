import { useEffect, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Filters = () => {
    const filtersWrap = useRef();

    useEffect(() => {
            if(filtersWrap){
                const all_filters = filtersWrap.current.querySelectorAll('.single-filter')
             
                all_filters.forEach(item => {
                          const filter_header = item.querySelector('.single-filter-header span')
                          const filter_body = item.querySelector('.single-filter-body')
                           
                          filter_header.addEventListener("click", () => {
                                if(filter_body){
                                        filter_body.classList.toggle('show')           
                                }
                          })
                })
            }
    })


  return (
    <div className="filters-wrapper">
              <div className="filters-wrapper-content">
                       <h3>Refine By</h3>
                       <div className="filters-row" ref={filtersWrap}>
                                 <div className="single-filter">
                                            <div className="single-filter-header">
                                                       <h4>Printing Inks</h4>
                                                      <span><AiOutlinePlus /></span>
                                           </div>
                                           <div className="single-filter-body">
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Offset Printing Inks</h5>
                                                                             <span><AiOutlinePlus /></span>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>UV Printing Inks</h5>
                                                                             <span><AiOutlinePlus /></span>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Solvent Printing Inks</h5>
                                                                             <span><AiOutlinePlus /></span>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Water Based Printing Inks</h5>
                                                                             <span><AiOutlinePlus /></span>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Varnishes</h5>
                                                                  </div>
                                                       </div>
                                           </div>
                                 </div>
                                 <div className="single-filter">
                                            <div className="single-filter-header">
                                                       <h4>Printing Ink Consumables</h4>
                                                      <span><AiOutlinePlus /></span>
                                           </div>
                                           <div className="single-filter-body">
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Printing Blankets</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Printing Plates</h5>
                                                                             <span><AiOutlinePlus /></span>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Lamination Films</h5>
                                                                  </div>
                                                       </div>
                                                       
                                           </div>
                                 </div>
                                 <div className="single-filter">
                                            <div className="single-filter-header">
                                                       <h4>Pressroom Chemicals</h4>
                                                      <span><AiOutlinePlus /></span>
                                           </div>
                                           <div className="single-filter-body">
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Press Washes</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Fountain Solutions</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Press Additives</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Plate Cleaners</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Specialty Washes</h5>
                                                                  </div>
                                                       </div>
                                           </div>
                                 </div>
                                 <div className="single-filter">
                                            <div className="single-filter-header">
                                                       <h4>Large Format</h4>
                                                      <span><AiOutlinePlus /></span>
                                           </div>
                                           <div className="single-filter-body">
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Banner Materials</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Vinyl</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Boards</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Stands</h5>
                                                                  </div>
                                                       </div>
                                                       <div className="sub-filter">
                                                                  <div className="sub-filter-header">
                                                                             <h5>Snapper Frames</h5>
                                                                  </div>
                                                       </div>
                                           </div>
                                 </div>
                                 <div className="single-filter">
                                            <div className="single-filter-header">
                                                       <h4>Paper</h4>
                                                      <span><AiOutlinePlus /></span>
                                           </div>
                                 </div>
                        </div>
              </div>
    </div>
  )
}

export default Filters