import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({product}) => {

const {name, price, obraz} = product;
  return (
    <div className="product-card-container">
      <img src={obraz} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">cena {price}zł</span>
      </div>

      <Button buttonType='inverted'> Add to card</Button>
    </div>
  );
};

export default ProductCard;
