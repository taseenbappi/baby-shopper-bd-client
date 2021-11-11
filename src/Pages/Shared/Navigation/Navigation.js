import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container fluid>
        <Navbar.Brand as={Link} to="/home" className="text-warning border rounded p-2">BABY Shopper BD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/toys">All Toys</Nav.Link>

          </Nav>
          <Nav>
            <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets">
              <button className="btn btn-warning">Sign In</button>
            </Nav.Link>
            <Nav.Link href="#deets">
              <button className="btn btn-light">Register</button>
            </Nav.Link>
            <Nav.Link href="#deets">
              <button className="btn btn-light">Sign Out</button>
            </Nav.Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;