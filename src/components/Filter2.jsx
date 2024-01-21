import { useContext } from "react"
import { filterData } from "../data/filter_data"
import { productsContext } from "../context"

const Filter2 = () => {
    const [productsData, setProductsData] = useContext(productsContext)
    const all_products = localStorage.getItem('Products') ? JSON.parse(localStorage.getItem('Products')) : []

    const switchActive = (val) => {
        const filtered = all_products.filter(item => item.main_category === val);

        setProductsData([{
                category: val,
                stuff: filtered
        }])
    }
    
  return (
    <div className="filter-options">
                <ul>
                            { filterData && filterData.map(filter => 
                                    <li 
                                    className={productsData[0].category === filter.header_text ? 'active' : ''} 
                                    key={filter.id}
                                    onClick={() => switchActive(filter.header_text)}
                                    >{filter.header_text}</li>)}
                </ul>
    </div>
  )
}

export default Filter2