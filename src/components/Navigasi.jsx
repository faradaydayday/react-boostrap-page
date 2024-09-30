import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import Icon32 from "../assets/Icon32.png";
function Navigasi() {
  return (
    <>
      <Navbar expand="md" className="bg-light bg-gradient">
        <Container>
          <Navbar.Brand>
            <img src={Icon32} width="35px" className="ms-5" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav n className="mx-auto me-5 nav-underline">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Core</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Alamat</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">About</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Any more</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigasi;
