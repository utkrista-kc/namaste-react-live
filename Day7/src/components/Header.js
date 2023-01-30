import { useState } from "react";
import Logo from "../assets/img/foodvilla.jpeg";
import { Link } from "react-router-dom";
import Login from "./Login";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      {<Title />}

      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <Link to="/">
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </Link>
      ) : (
        <Link to="/login">
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
