import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import { UserContext } from "../../contexts/user.context";
import { useContext } from "react";
import "./nav-bar.styles.scss";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo-unistop.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
