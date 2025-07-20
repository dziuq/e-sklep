import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {useNavigate } from "react-router-dom";
import "./hero-section.styles.scss";

const HeroSection = () => {
  const navigate = useNavigate("/shop");

  const goToShopHandler = () => {
    navigate("/shop");
  };

  return (
    <div className="hero-section-container">
      <div className="image-container">
        <img src='/images/hero-znak.png' alt={`${name}`} />
      </div>
      <div className="text-container">
        <h1 className="main-text">
            NAJLEPSZE ZNAKI DROGOWE W POLSCE
        </h1>
        <h2 className="secondary-text">
            szybka dostawa, gwarancja jakości
             </h2>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={goToShopHandler}>
          ZOBACZ OFERTĘ{" "}
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
