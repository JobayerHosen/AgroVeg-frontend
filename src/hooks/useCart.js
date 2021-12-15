import React from "react";

const useCart = () => {
  const addToCart = (pdt) => {
    const orderData = { ...pdt };
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    cartData.push(orderData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("Product Added to Cart");
  };

  const getCart = () => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  };

  const removeFromCart = (id) => {
    const cart = getCart();
    const newCart = cart.filter((item) => item._id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return {
    addToCart,
    getCart,
    removeFromCart,
  };
};

export default useCart;
