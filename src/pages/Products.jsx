import AllProducts from "../components/AllProducts"
import Navbar from "../components/navigation/Navbar"
import "../css/products.css"
import Footer from "../components/Footer"
const Products = () => {
  return (
    <>
          <div className="products-hero">
                   <Navbar />
                   <div className="products-hero-content">
                             <div className="inner-row">
                                        <div className="products-hero-texts">
                                                     <h1>Our Products</h1>
                                                     <p>For all your ink and printing needs, we got you covered! Our extensive range of premium quality products can offer you options to get the results you want, even for the most discerning clientele.</p>
                                        </div>
                             </div>
                   </div>
          </div>
          <AllProducts />
          <Footer />
    </>
  )
}

export default Products