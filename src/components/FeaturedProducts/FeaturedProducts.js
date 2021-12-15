import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import loader from "../../assets/loader-crecent.svg";

const FeaturedProducts = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://agroveg.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <Container>
        <SectionTitle subtitle="OUR SHOP">
          OUR <span className="text-green">NEW PRODUCTS</span>
        </SectionTitle>
        <Row>
          {products.length ? (
            products.slice(0, 6).map((product) => (
              <Col key={product?._id} xs="12" sm="6" md="4">
                <ProductCard product={product}></ProductCard>
              </Col>
            ))
          ) : (
            <img style={{ width: "10rem", margin: "2rem auto 4rem" }} src={loader} alt="" />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
