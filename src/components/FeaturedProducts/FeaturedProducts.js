import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";

const FeaturedProducts = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("./data.json")
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
          {products.slice(0, 6).map((product) => (
            <Col key={product?.id} xs="12" sm="6" md="4">
              <ProductCard product={product}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedProducts;
