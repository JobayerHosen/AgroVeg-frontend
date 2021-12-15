import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const { getCart, removeFromCart } = useCart();

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const checkOut = () => {
    const orderData = { uid: user?.uid, uName: user?.displayName, email: user?.email, products: getCart() };
    fetch("https://agroveg.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.uid) alert("order has been placed successfully!");
      })
      .catch((err) => alert(`Something went wrong: ${err}`));
  };

  return (
    <>
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Image </th>
              <th scope="col">Product</th>
              <th scope="col">Price </th>
              <th scope="col">Action </th>
            </tr>
          </thead>
          <tbody className="align-middle">
            {cart.map((product, index) => (
              <tr key={product?._id + index}>
                <td>
                  <img style={{ width: "2.5rem" }} className="rounded" src={product?.img} alt="" />
                </td>
                <td>{product?.name}</td>
                <td>{product?.price}</td>
                <td>
                  <Button onClick={() => handleRemoveFromCart(product?._id)} variant="danger">
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="paper">
        <Button variant="success" className="btn-green" onClick={checkOut}>
          Checkout
        </Button>
      </div>
    </>
  );
};

export default Cart;
