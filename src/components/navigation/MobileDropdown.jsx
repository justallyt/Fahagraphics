
import { menuData } from "../../data/menu_data";
import MobileDropdownMoja from "./MobileDropdownMoja";

const MobileDropdown = ({ status }) => {
  return (
    <div  className={status ? 'mobile-dropdown active' : 'mobile-dropdown'}>
                { menuData && menuData.map(dropdownMoja => 
                        <MobileDropdownMoja key={dropdownMoja.id} data={dropdownMoja} />
                 )}
    </div>
  )
}

export default MobileDropdown