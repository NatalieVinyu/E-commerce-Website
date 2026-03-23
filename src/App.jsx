import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import CartPage from ".//pages/CartPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CartPage" element={<CartPage />} />
      <Route path="/product" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  );
}
