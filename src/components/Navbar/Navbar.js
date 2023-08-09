import "./navbar.css";
import logo from "../../assets/Logo.svg";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { ReactComponent as User } from "../../assets/User.svg";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const isLoggedin = true;

const Loggedin = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="login-loggedin">
      <div className="login-loggedin_cart">
        <section className="login-loggedin_cart-icon">1</section>
        <Cart className="login-loggedin_cart-svg" />
      </div>
      <div className="login-loggedin_user" onClick={() => setIsMenu(!isMenu)}>
        <User className="login-loggedin_user-svg" />
        {isMenu && (
          <div className="lemon__navbar-menu_container scale-up-center">
            <div className="lemon__navbar-menu_container-links">
              <p>
                <a href="/home">My Account</a>
              </p>
              <p>
                <a href="#about">My Reservations</a>
              </p>
              <p>
                <a href="#highlights">Menu</a>
              </p>
              <p>Logout</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Menu = () => {
  return (
    <>
      <p>
        <a href="/home">Home</a>
      </p>
      <p>
        <a href="#about">About</a>
      </p>
      <p>
        <a href="#highlights">Menu</a>
      </p>
      <p>
        <a href="#footer">Contact</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="lemon__navbar section__padding">
      <Link to="/home">
        <img className="lemon__navbar-image" src={logo} alt="logo" />
      </Link>

      <div className="lemon__navbar-btn_links">
        <div className="lemon__navbar-links">
          <Menu />
        </div>
      </div>

      {isLoggedin ? <Loggedin /> : <button className="login-btn">Login</button>}

      <div className="lemon__navbar-menu">
        {toggleMenu ? <RiCloseLine color="#495e57" size={35} onClick={() => setToggleMenu(false)} /> : <RiMenu2Line color="#495e57" size={35} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="lemon__navbar-menu_container scale-up-center">
            <div className="lemon__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
