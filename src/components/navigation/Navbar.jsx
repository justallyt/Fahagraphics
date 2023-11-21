import { useState } from "react"
import { navContext } from "./navcontext"
import Header from "./Header"
import MobileMenu from "./MobileMenu"
const Navbar = () => {
    const [status, setStatus] = useState(false)
  return (
    <navContext.Provider value={[status, setStatus]}>
               <Header />
               <MobileMenu />
    </navContext.Provider>
  )
}

export default Navbar