import {Routes, Route} from "react-router-dom";
import AccountPage from "../Pages/AccountPage";
import LandingPage from "../Pages/LandingPage";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/createaccount" element={<AccountPage/>}/>
    </Routes>
  )
}

export default AllRoutes