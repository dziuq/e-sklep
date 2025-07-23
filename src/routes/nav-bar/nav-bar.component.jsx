import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";

import {
  NavBarContainer,
  LogoContainer,
  NavLink,
  NavLinks,
} from "./nav-bar.styles.jsx";

const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser)
  const isCartOpen = useSelector(selectIsCartOpen)

  return (
    <Fragment>
      <NavBarContainer>
        <LogoContainer to="/">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">OFERTA</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              {" "}
              WYLOGUJ{" "}
            </NavLink>
          ) : (
            <NavLink to="/auth">ZALOGUJ</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavBarContainer>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
