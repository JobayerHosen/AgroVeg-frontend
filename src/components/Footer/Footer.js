import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f0f0f0", padding: "2rem 0 0" }}>
      <Container>
        <Row className="py-4">
          <Col xs="12" sm="12" lg="4">
            <div className="d-flex flex-column align-items-start">
              <NavLink to="/">
                <h1 className="logo">AgroVeg</h1>
              </NavLink>
              <p className="text-muted pe-4 fs-bold text-start">
                Organic farming is an alternative agriultural system which originated early in the 20th century in
                reaction to rapidly changing farming practices.
              </p>
            </div>
          </Col>
          <Col xs="12" sm="6" md="3">
            <div className="d-flex flex-column align-items-start">
              <h5>CUSTOMER SERVICE</h5>
              <NavLink to="/" className="text-muted mb-2">
                Help Center
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Returns
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Product Recalls
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Accessibility
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Contact Us
              </NavLink>
            </div>
          </Col>
          <Col xs="12" sm="6" md="2">
            <div className="d-flex flex-column align-items-start">
              <h5>POLICY</h5>
              <NavLink to="/" className="text-muted mb-2">
                Return Policy
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Terms Of Use
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Security
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Privacy
              </NavLink>
              <NavLink to="/" className="text-muted mb-2">
                Store Pickup
              </NavLink>
            </div>
          </Col>
          <Col xs="12" sm="12" md="3">
            <div className="d-flex flex-column align-items-start">
              <h5>STORE INFORMATION</h5>
              <p className="text-muted mb-2">
                <i className="bi bi-geo-alt-fill"></i> Address : W898 RTower Stat, Suite 56 Brockland, CA 9622 United
                States
              </p>
              <p className="text-muted mb-2">
                <i className="bi bi-telephone-fill"></i> Phone : 458-965-3224
              </p>
              <p className="text-muted mb-2">
                <i className="bi bi-envelope-open-fill"></i> Email : info@exemple.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary text-white py-3">
        <p className="fw-bold m-0">Copyright &copy; 2020 AgroVeg All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
