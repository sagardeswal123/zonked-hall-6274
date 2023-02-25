import {Routes, Route} from "react-router-dom";
import AccountPage from "../Pages/AccountPage";
import LandingPage from "../Pages/LandingPage";
import Product from "../Pages/Product";
import SingleProduct from "../Pages/SingleProduct";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/createaccount" element={<AccountPage/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  )
}

export default AllRoutes