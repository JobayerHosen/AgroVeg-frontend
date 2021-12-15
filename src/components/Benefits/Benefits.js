import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import serv1 from "../../assets/org_frm_img01.png";
import serv2 from "../../assets/org_frm_img02.png";
import serv3 from "../../assets/org_frm_img03.png";
import serv4 from "../../assets/org_frm_img04.png";

const Benefits = () => {
  return (
    <section style={{ padding: "3rem 0" }}>
      <Container>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <i className="bi bi-truck text-green" style={{ fontSize: "3.5rem" }}></i>
              <h6 className="mt-0">Free Shipping On Over $ 50</h6>
              <p className="text-muted">Agricultural mean crops livestock</p>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <i className="bi bi-coin text-warning" style={{ fontSize: "3.5rem" }}></i>
              <h6 className="mt-0">Membership Discount</h6>
              <p className="text-muted">Only MemberAgricultural livestock</p>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <i className="bi bi-cash-coin text-danger" style={{ fontSize: "3.5rem" }}></i>
              <h6 className="mt-0">Money Return</h6>
              <p className="text-muted">30 days money back guarantee</p>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <i className="bi bi-headset text-green" style={{ fontSize: "3.5rem" }}></i>
              <h6 className="mt-0">Online Support</h6>
              <p className="text-muted">24/7 online support</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;
