import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "./Banner.css";
import bannerImg from "../../assets/banner_img01.png";

const Banner = () => {
  return (
    <div className="banner mb-5">
      <Container>
        <Row className="flex-column-reverse flex-lg-row">
          <Col xs="12" lg="6">
            <div className="banner-left">
              <h1 className="banner-title">AGRICULTURE IS THE SCIENCE PLANTS</h1>
              <p className="fw-bold">You are one step from making real money</p>
              <Button variant="warning rounded-pill">Shop Now</Button>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <div className="banner-right">
              <div className="bg-wrapper">
                <img src={bannerImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
