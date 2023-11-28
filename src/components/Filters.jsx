import { filterData } from "../data/filter_data";
import SingleFilter from "./SingleFilter";
const Filters = () => {

  return (
    <div className="filters-wrapper">
              <div className="filters-wrapper-content">
                       <h3>Refine By</h3>
                       <div className="filters-row">
                               { filterData && filterData.map(filterMoja => 
                                      <SingleFilter key={filterMoja.id} data={filterMoja} />
                                )}
                        </div>
              </div>
    </div>
  )
}

export default Filters