import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Zdjęcie produktu</span>
        </div>
        <div className="header-block">
          <span>Nazwa produktu</span>
        </div>
        <div className="header-block">
          <span>Ilość</span>
        </div>
        <div className="header-block">
          <span>Cena za sztukę</span>
        </div>
        <div className="header-block">
          <span>Usuń</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
