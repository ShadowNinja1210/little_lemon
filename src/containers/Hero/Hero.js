import "./hero.css";
import food from "../../assets/restauranfood.png";

const Hero = () => {
  return (
    <div className="lemon__hero section__padding">
      <div className="lemon__hero-text">
        <div className="lemon__hero-text_head">
          <h1>Little Lemon</h1>
          <h4>Chicago</h4>
        </div>

        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="lemon__hero-image">
        <img src={food} alt="Food-1" />
      </div>
    </div>
  );
};

export default Hero;
