import SingleProductBody2 from "../components/SingleProductBody2"
import Navbar from "../components/navigation/Navbar"
import { useParams } from "react-router-dom"
import { products } from "../data/products";
import Footer from "../components/Footer"

const SingleProduct2 = () => {
    const { category, name, specific } = useParams();
    const prods = products.filter(item => item.subcategory.toLowerCase() === name.replaceAll('-', ' ') && item.url_param === category)
    const prods2 = products.filter(item => item.minicategory && item.minicategory.toLowerCase() === name.replaceAll("-", " ") && item.url_param === category)

    const data = prods.length > 0 ? prods : prods2

  return (
    <>
          <Navbar />
          <SingleProductBody2 data={data} param={specific} />
          <Footer />
    </>
  )
}

export default SingleProduct2