import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid px-2 px-lg-4">
      <Navbar
        className="header rounded-2 bg-white  my-4"
        bg="white"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            className="ps-0 ps-lg-4 fw-bold fs-3"
            onClick={() => navigate("/")}
          >
            DevRel Hack
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            className="bg-white w-100 justify-content-between"
            id="navbarScroll"
          >
            <Nav
              className="me-auto  my-2 my-lg-0 mx-3 mx-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                onClick={() => navigate("/")}
                href="#action1"
                className={
                  window.location.pathname === "/" ? "fw-bold text-black" : ""
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => navigate("/users")}
                className={
                  window.location.pathname === "/users"
                    ? "fw-bold text-black"
                    : ""
                }
              >
                Users
              </Nav.Link>

              <Form className="d-flex">
                <Form.Control
                  disabled
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success" disabled>
                  Search
                </Button>
              </Form>
            </Nav>
            <img
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
              className="rounded-circle d-none d-lg-block me-4"
              width="60px"
              height="60px"
              alt=""
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Header;
