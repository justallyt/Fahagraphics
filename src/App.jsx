import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import Aos from "aos"
import { useLocation } from "react-router-dom"
import { useEffect, useLayoutEffect } from "react"
import 'aos/dist/aos.css';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Products from "./pages/Products"
import SingleProduct from "./pages/SingleProduct"
import SingleProduct2 from "./pages/SingleProduct2"

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
                <Route path="/products/" element={<Products />} />
                <Route path="/contact-us/" element={<Contact />} />
                <Route path="/product/:name" element={<SingleProduct />} />
                <Route path='/product/:category/:name' element={<SingleProduct2 />} />
                <Route path="/product/:category/:name/:specific" element={<SingleProduct2 />} />
    </Routes>
  )
}

export default App
