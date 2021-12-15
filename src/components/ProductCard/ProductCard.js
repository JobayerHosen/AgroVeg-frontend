import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";

const ProductCard = ({ product }) => {
  const { user } = useAuth();
  const { _id, name, price, rating, category, img } = product;
  const { addToCart } = useCart();

  return (
    <div className="d-flex flex-column align-items-center p-2 mx-2 border rounded my-3">
      <img style={{ maxHeight: "300px", objectFit: "cover" }} className="w-100" src={img} alt="product image" />
      <Button onClick={() => addToCart(product)} variant="outline-success" className="btn-green w-100 py-2 mb-3">
        Add to Cart
      </Button>
      <p className="text-warning">
        <i className="bi bi-star-fill me-2"></i>
        <i className="bi bi-star-fill me-2"></i>
        <i className="bi bi-star-fill me-2"></i>
        <i className="bi bi-star-fill me-2"></i>
        <i className="bi bi-star-fill me-2"></i>
      </p>
      <h4>{name}</h4>
      <p className="text-muted">Category: {category}</p>
      <h3 className="text-green">$ {price}</h3>
    </div>
  );
};

export default ProductCard;
