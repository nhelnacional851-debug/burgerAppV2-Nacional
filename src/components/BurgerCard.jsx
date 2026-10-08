import { Link } from "react-router-dom";

export default function BurgerCard({ burger }) {
  return (
    <div className="burger-card">
      <div className="img-box">
        <img src={burger.image} alt={burger.name} />
      </div>

      <h3>{burger.name}</h3>
      <p>{burger.description}</p>
      <div className="price">₱{burger.price}</div>

      <Link className="view-btn" to={`/burger/${burger.id}`}>
        View
      </Link>
    </div>
  );
}
