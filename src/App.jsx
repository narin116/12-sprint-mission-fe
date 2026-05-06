import Navigation from "./commons/Navigation";
import Footer from "./commons/Footer";
import Products from "./pages/products/Products";
import "./App.css";
import "./reset.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import ProductsLayout from "./layouts/ProductsLayout";
import LandingLayout from "./layouts/LandingLayout";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";

const App = () => {
  //여기에서, Router 설정을 해준다.
  //여기에서 공통영역인 Navigation, footer영역 로드하고, 가운데에 Products 넣기
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingLayout />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/items" element={<ProductsLayout />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="/auth">
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
