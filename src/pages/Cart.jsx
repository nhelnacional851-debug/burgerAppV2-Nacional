import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>

      {cart.length === 0 && <p>No items yet.</p>}

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} className="cart-img" />

          <div className="cart-info">
            <p className="cart-name">{item.name}</p>
            <p className="cart-qty">Qty: {item.qty}</p>
          </div>

          <p className="cart-price">₱{item.price * item.qty}</p>
        </div>
      ))}

      {cart.length > 0 && <h3>Total: ₱{total}</h3>}
    </div>
  );
}
