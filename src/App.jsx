import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductPageLoader from "./containers/ProductPageLoader/ProductPageLoader";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContextProvider/CartContextProvider";
import BrandPageLoader from "./containers/BrandPageLoader/BrandPageLoader";
import LatestPageLoader from "./containers/LatestPageLoader/LatestPageLoader";
import SearchPageLoader from "./containers/SearchPageLoader/SearchPageLoader";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPageLoader />} />
            <Route path="/brand/:id" element={<BrandPageLoader />} />
            <Route path="/latest" element={<LatestPageLoader />} />
            <Route path="/search/:id" element={<SearchPageLoader />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
