import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import serv1 from "../../assets/org_frm_img01.png";
import serv2 from "../../assets/org_frm_img02.png";
import serv3 from "../../assets/org_frm_img03.png";
import serv4 from "../../assets/org_frm_img04.png";

const Services = () => {
  return (
    <section style={{ backgroundColor: "#f5f1f1", padding: "3rem 0" }}>
      <Container>
        <SectionTitle subtitle="WHAT WE DO">
          <span className="text-green">WELCOME</span> TO ORGANIC FARMING
        </SectionTitle>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <img src={serv1} alt="" />
              <h5 className="mt-3">FAT FREE MEAT</h5>
              <p className="text-muted">Agricultural mean crops livestock and livestock products</p>
              <Button variant="danger" className="btn-gr-red rounded-pill">
                Shop Now
              </Button>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <img src={serv2} alt="" />
              <h5 className="mt-3">FRESH VEGETABLES</h5>
              <p className="text-muted">Agricultural mean crops livestock and livestock products</p>
              <Button variant="danger" className="btn-gr-red rounded-pill">
                Shop Now
              </Button>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <img src={serv3} alt="" />
              <h5 className="mt-3">ORGANIC FRUITS</h5>
              <p className="text-muted">Agricultural mean crops livestock and livestock products</p>
              <Button variant="danger" className="btn-gr-red rounded-pill">
                Shop Now
              </Button>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="3">
            <div className="d-flex flex-column align-items-center bg-white p-3 mx-2 my-4 rounded">
              <img src={serv4} alt="" />
              <h5 className="mt-3">FRESH SALAD</h5>
              <p className="text-muted">Agricultural mean crops livestock and livestock products</p>
              <Button variant="danger" className="btn-gr-red rounded-pill">
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
