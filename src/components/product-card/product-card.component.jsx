import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, setShouldShowPopup } from "../../store/cart/cart.action";
import { selectCartCount, selectCartItems } from "../../store/cart/cart.selector";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, obraz, numer_znaku } = product;
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
    if(cartCount == 0) dispatch(setShouldShowPopup(true));
  }

  return (
    <div className="product-card-container">
      <img src={obraz} alt={`${name}`} />
      <div className="footer">
        <span className="numer-znaku">{numer_znaku}</span>
        <span className="name">{name}</span>
        <span className="price">cena {price}zł</span>
      </div>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        {" "}
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
