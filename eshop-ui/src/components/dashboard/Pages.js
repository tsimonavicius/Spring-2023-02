import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products";
import Product from "../../pages/Product";

const Pages = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Product />}/>
    </Routes>
)

export default Pages