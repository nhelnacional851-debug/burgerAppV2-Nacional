import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BurgerDetails from "./pages/BurgerDetails";
import Cart from "./pages/Cart";
import CartIcon from "./components/CartIcon";
import Logo from "./components/Logo";

export default function App() {
  return (
    <BrowserRouter>
      <Logo />
      <CartIcon />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/burger/:id" element={<BurgerDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
