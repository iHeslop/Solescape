import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductLoader from "./containers/ProductLoader/ProductLoader";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:id" element={<ProductLoader />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
