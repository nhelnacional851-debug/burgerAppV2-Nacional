import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartIcon() {
  const { cart } = useCart();

  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Link to="/cart" className="cart-icon">
      🛒
      {totalQty > 0 && <span className="cart-count">{totalQty}</span>}
    </Link>
  );
}
