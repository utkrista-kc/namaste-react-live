const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/chef-food-restaurant-logo-editable-design-template-949091af7f6dc8b1fc80d8669faab4d6_screen.jpg?ts=1619030187"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      {<Title />}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
