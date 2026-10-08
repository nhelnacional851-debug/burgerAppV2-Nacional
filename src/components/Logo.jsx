import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <Link to="/" className="logo-icon">
      <img src={logo} alt="BurgerShop Logo" className="logo-img" />
    </Link>
  );
}
