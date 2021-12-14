import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";
import Navigation from "../Navigation/Navigation";

const ManageUsers = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Navigation></Navigation>
      <Container>
        <div className="paper mt-5 text-start">
          <div className="paper-top">
            <h3 className="border-bottom pb-3">
              <i className="bi bi-people-fill"></i> Manage Users
            </h3>
          </div>
          <div className="paper-body pb-3">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column fs-bold">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Users</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Manage Users</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <AllUsers></AllUsers>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
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

export default ManageUsers;

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