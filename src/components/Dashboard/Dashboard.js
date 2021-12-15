import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Navigation/Navigation";

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navigation></Navigation>
      <Container>
        <div className="paper mt-5 text-start">
          <div className="paper-top">
            <h3 className="border-bottom pb-3">
              <i className="bi bi-ui-checks-grid"></i> Dashboard
            </h3>
          </div>
          <div className="paper-body pb-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column fs-bold">
                    <Nav.Item>
                      <Nav.Link className="py-1 d-flex justify-content-between align-items-center " eventKey="first">
                        All Users <i style={{ opacity: "0.4" }} className="bi bi-people fs-1 text-success"></i>
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link className="py-1 d-flex justify-content-between align-items-center" eventKey="second">
                        All Orders <i style={{ opacity: "0.4" }} className="bi bi-bag-check fs-1 text-success"></i>
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <AllUsers></AllUsers>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <AllOrders></AllOrders>
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

export default Dashboard;

const AllUsers = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  console.log(user);

  useEffect(() => {
    fetch("https://agroveg.herokuapp.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Avatar </th>
            <th scope="col">Name </th>
            <th scope="col">Email </th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {users.map((usr) => (
            <tr key={usr?._id}>
              <td>
                <img style={{ width: "2.5rem" }} className="rounded" src={usr?.photoURL} alt="" />
              </td>
              <td>{usr?.displayName}</td>
              <td>{usr?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const AllOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://agroveg.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"># </th>
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">order id</th>
            <th scope="col">Items </th>
            <th scope="col">Items </th>
          </tr>
        </thead>
        <tbody className="align-middle">
          {orders.map((order, index) => (
            <tr key={order?._id + index}>
              <td>{index + 1}</td>
              <td>{order?.uName}</td>
              <td>{order?.email}</td>
              <td>{order?._id}</td>
              <td>{order?.products?.length}</td>
              <td>
                {order?.products.map((item) => (
                  <li>{item.name} </li>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
