import SingleProductBody from "../components/SingleProductBody"
import Navbar from "../components/navigation/Navbar"
import { useParams } from "react-router-dom"
import { products } from "../data/products";
import Footer from "../components/Footer";
const SingleProduct = () => {
  const { name } = useParams();
  const prods = products.filter(item => item.url_param === name);
  
  return (
    <>
             <Navbar />
             <SingleProductBody data={prods}  />
             <Footer />
    </>
  )
}

export default SingleProduct