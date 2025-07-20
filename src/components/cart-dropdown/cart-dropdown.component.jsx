import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {CartDropdownContainter, EmptyMessage, CartItems} from"./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainter>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Twój koszyk jest pusty.</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>DO KASY!</Button>
    </CartDropdownContainter>
  );
};

export default CartDropdown;
