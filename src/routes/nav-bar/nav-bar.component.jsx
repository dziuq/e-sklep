import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import './nav-bar.styles.scss'

import { ReactComponent as Logo} from '../../assets/logo-unistop.svg'

const NavBar = () => {
  return (
    <Fragment>
      <div className="nav-bar">
        <Link className="logo-container" to="/">
          <Logo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
