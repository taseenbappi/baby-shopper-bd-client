import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
  const { user, logOut } = useAuth();
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
            {user.email &&
              <Nav.Link as={Link} to="/dashboard" className="text-light">Dashboard</Nav.Link>
            }
            {user.email &&
              <Nav.Link className="text-warning">{user.displayName}</Nav.Link>
            }
            <Nav.Link as={Link} to="/register">
              <button className="btn btn-warning">Register</button>
            </Nav.Link>
            {
              user.email ?
                (<Nav.Link >
                  <button className="btn btn-light" onClick={logOut}>Sign Out</button>
                </Nav.Link>)
                :
                (<Nav.Link as={Link} to="/login">
                  <button className="btn btn-light">Sign In</button>
                </Nav.Link>)
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;