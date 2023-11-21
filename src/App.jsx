import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Aos from "aos"
import { useLocation } from "react-router-dom"
import { useEffect, useLayoutEffect } from "react"
import 'aos/dist/aos.css';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
function App() {
  const location = useLocation()

  const alwaysOnTopPage = () =>{
       window.scrollTo(0, 0);
  }
  useEffect(()=>{
         alwaysOnTopPage()
  },[location])

  useLayoutEffect(()=>{
      Aos.init({
           duration: 1500,
           once: true,
     })
  }, [])
  return (
    <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us/" element={<About />} />
                <Route path="/services/" element={<Services />} />
                <Route path="/contact-us/" element={<Contact />} />
    </Routes>
  )
}

export default App
