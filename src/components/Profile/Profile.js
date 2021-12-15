import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Cart from "../Cart/Cart";
import MyOrders from "../MyOrders/MyOrders";
import Navigation from "../Navigation/Navigation";

const Profile = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navigation></Navigation>
      <Container>
        <div className="paper mt-5 text-start">
          <div className="paper-top">
            <h3 className="border-bottom pb-3">
              <i className="bi bi-person-fill"></i> My Profile
            </h3>
          </div>
          <div className="paper-body pb-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column fs-bold">
                    <Nav.Item>
                      <Nav.Link eventKey="first">General</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Cart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">My Orders</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Manage Account</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <General></General>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Cart></Cart>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <MyOrders></MyOrders>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h1>...</h1>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;

const General = () => {
  const { user } = useAuth();

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <tbody>
          <tr>
            <th scope="col">Avatar: </th>
            <td>
              <img style={{ width: "5rem" }} className="rounded-circle" src={user?.photoURL} alt="user avatar" />
            </td>
          </tr>
          <tr>
            <th scope="col">Name: </th>
            <td>{user?.displayName}</td>
          </tr>
          <tr>
            <th scope="col">Email: </th>
            <td>{user?.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
