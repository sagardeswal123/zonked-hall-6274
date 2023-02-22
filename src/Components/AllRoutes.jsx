import {Routes, Route} from "react-router-dom";
import LandingPage from "../Pages/LandingPage";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
    </Routes>
  )
}

export default AllRoutes