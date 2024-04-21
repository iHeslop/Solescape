import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import LandingPage from "./pages/LandingPage/LandingPage";
import CartPage from "./pages/CartPage/CartPage";
import ProductPageLoader from "./containers/ProductPageLoader/ProductPageLoader";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContextProvider/CartContextProvider";

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
          </Routes>
          <Footer />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
