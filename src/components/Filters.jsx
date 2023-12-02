import { useContext } from "react";
import { filterData } from "../data/filter_data";
import SingleFilter from "./SingleFilter";
import { productsContext } from "../context";
const Filters = () => {
  const [data, setData] = useContext(productsContext)

  console.log(data)
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