import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import {
  selectCartItems,
  selectIsCartOpen,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import {
  CartDropdownContainter,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.styles.jsx";

const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const isCartOpen = useSelector(selectIsCartOpen);

  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        dispatch(setIsCartOpen(false));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  return (
    <CartDropdownContainter ref={dropdownRef}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Twój koszyk jest pusty.</EmptyMessage>
        )}
      </CartItems>
      <Button buttonType="inverted" onClick={goToCheckoutHandler}>
        DO KASY!
      </Button>
    </CartDropdownContainter>
  );
};

export default CartDropdown;
