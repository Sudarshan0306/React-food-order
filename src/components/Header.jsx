import React from "react";
import imgLogo from "../assets/logo.jpg";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = (cartCtx.items || []).reduce((totalNumbersOfItems, item) => {
    return totalNumbersOfItems + item.quantity;
  }, 0);

  return (
    <header id="main-header">
      <div id="title">
        <img src={imgLogo} alt="logo" />
        <h1>React Food!</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems}) </Button>
      </nav>
    </header>
  );
};

export default Header;
