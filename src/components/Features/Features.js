import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import feat1 from "../../assets/features_icon01.png";
import feat2 from "../../assets/features_icon02.png";
import feat3 from "../../assets/features_icon03.png";

const Features = () => {
  return (
    <section>
      <Container>
        <Row className="align-items-end">
          <Col sm="12" md="4" className="py-5">
            <div className="d-flex flex-column align-items-center py-4">
              <img style={{ height: "auto", width: "250px" }} className="mb-3" src={feat1} alt="" />
              <h5>BEST QUALITY PRODUCTS</h5>
              <p className="text-muted">
                Agriculture was the key development in the rise of sedentary human civilization, whereby farming
                domesticated species
              </p>
            </div>
          </Col>
          <Col sm="12" md="4" className="py-5">
            <div className="d-flex flex-column align-items-center py-4">
              <img style={{ maxHeight: "auto", width: "250px" }} className="mb-3" src={feat2} alt="" />
              <h5>SPECIFICALLY FARMING</h5>
              <p className="text-muted">
                Agriculture was the key development in the rise of sedentary human civilization, whereby farming
                domesticated species
              </p>
            </div>
          </Col>
          <Col sm="12" md="4" className="py-5">
            <div className="d-flex flex-column align-items-center py-4">
              <img style={{ maxHeight: "auto", width: "250px" }} className="mb-3" src={feat3} alt="" />
              <h5>ORGANIC FARM IMPORTANT?</h5>
              <p className="text-muted">
                Agriculture was the key development in the rise of sedentary human civilization, whereby farming
                domesticated species
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
