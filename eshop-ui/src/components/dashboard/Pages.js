import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Products from "../../pages/Products/Products";
import Product from "../../pages/Product";
import Signup from "../../pages/Signup";
import Cart from "../../pages/Cart/Cart";

const Pages = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<Product />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/cart" element={<Cart />}/>
    </Routes>
)

export default Pages