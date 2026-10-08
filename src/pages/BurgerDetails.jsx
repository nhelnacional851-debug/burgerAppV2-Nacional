import { useParams, useNavigate } from "react-router-dom";
import burgers from "../data/burgers";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function BurgerDetails() {
  const { id } = useParams();
  const burger = burgers.find((b) => b.id === Number(id));

  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="details">
      <div className="img-box">
        <img src={burger.image} alt={burger.name} />
      </div>

      <h2>{burger.name}</h2>
      <p>{burger.description}</p>

      <div className="price">₱{burger.price}</div>

      <div className="qty-box">
        <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>

      <button
        className="add-btn"
        onClick={() => {
          addToCart(burger, qty);
          navigate("/"); // go back home
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
