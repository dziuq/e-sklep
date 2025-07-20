import Button, {BUTTON_TYPE_CLASSES}from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import "./product-card.styles.scss";

const ProductCard = ({product}) => {

const {name, price, obraz} = product;
const { addItemToCart} = useContext(CartContext);
const addProductToCart = () => addItemToCart(product)

  return (
    <div className="product-card-container">
      <img src={obraz} alt={`${name}`}/>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">cena {price}zł</span>
      </div>

      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick ={addProductToCart}> Add to card</Button>
    </div>
  );
};

export default ProductCard;
