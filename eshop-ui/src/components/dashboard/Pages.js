import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";

const Pages = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
    </Routes>
)

export default Pages