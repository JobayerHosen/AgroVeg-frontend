import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import bg from "../../assets/breadcrumb_bg01.jpg";
import Navigation from "../Navigation/Navigation";
import ProductCard from "../ProductCard/ProductCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import loader from "../../assets/loader-crecent.svg";

const Shop = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://agroveg.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      <div className="">
        <img src={bg} alt="" />
      </div>
      <Container>
        <div>
          <SectionTitle>
            OUR ORGANIC <span className="text-green"> PRODUCTS</span>
          </SectionTitle>

          <Row>
            {products.length ? (
              products.map((product) => (
                <Col key={product?._id} xs="12" sm="6" md="4">
                  <ProductCard product={product}></ProductCard>
                </Col>
              ))
            ) : (
              <img style={{ width: "10rem", margin: "2rem auto 4rem" }} src={loader} alt="" />
            )}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
