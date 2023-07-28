import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  //! Nav Items
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Menu", link: "#menu" },
    { name: "Awards", link: "#awards" },
    { name: "Contact", link: "#contact" },
  ];

  //! Map
  const mainNavItem = navItems.map((item, index) => (
    <li key={index} className="p__opensans">
      <a href={item.link}>{item.name}</a>
    </li>
  ));
  const menuNavItem = navItems.map((item, index) => (
    <li key={index} className="font-semibold text-xl">
      <a href={item.link} onClick={() => setToggleMenu(false)}>
        {item.name}
      </a>
    </li>
  ));

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">{mainNavItem}</ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          style={{ cursor: "pointer" }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
              style={{ cursor: "pointer" }}
            />
            <ul className="app__navbar-smallscreen_links">{menuNavItem}</ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
