import { useState } from "react";
import Logo from "../assets/img/foodvilla.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img className="h-24 p-2" src={Logo} alt="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-white-50 shadow-lg">
      {<Title />}
      <div className="nav-items flex mr-32 pr-8">
        <ul className="flex  py-10">
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact</li>
          </Link>
          <li className="px-4">Cart</li>
          <Link to="/instamart">
            <li className="px-4">Instamart</li>
          </Link>
        </ul>
        <h2 className="py-10 px-4">{isOnline ? "✅" : "🔴"}</h2>
        {isLoggedIn ? (
          <button
            className="p-3 pb-8 my-8 h-8 bg-purple-500 text-white  rounded-md  hover:bg-violet-600"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-2 px-3 pb-8 my-8 h-8 bg-purple-500 text-white  rounded-md  hover:bg-violet-600"
            onClick={() => setIsLoggedIn(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
