import React, { useState } from "react";
import "./headerstyle.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [show, setShow] = useState(true);

  const toggleMenu = () => {
    setShow((show) => !show);
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="" />
        <span>amazon</span>
      </div>
      <div className="right">
        <div className="bars" onClick={toggleMenu}>
          <GoThreeBars />
        </div>

        <ul className="menu" style={{ display: show ? "inherit" : "none" }}>
          <li>Collection</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>

        <input
          type="text"
          className="search"
          placeholder="Search"
          style={{ display: show ? "block" : "none" }}
        />

        <CgShoppingBag className="cart" />
      </div>
    </div>
  );
};

export default Header;
