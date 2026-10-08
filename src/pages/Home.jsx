import { useState } from "react";
import burgers from "../data/burgers";
import BurgerCard from "../components/BurgerCard";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? burgers : burgers.slice(0, 8);

  return (
    <div className="home">
      <h1 className="logo">BURGER SHOP</h1>

      <ImageSlider />

      <div className="burger-grid">
        {visible.map((b) => (
          <BurgerCard key={b.id} burger={b} />
        ))}
      </div>

      {!showAll && (
        <button className="view-all" onClick={() => setShowAll(true)}>
          View All
        </button>
      )}
    </div>
  );
}
