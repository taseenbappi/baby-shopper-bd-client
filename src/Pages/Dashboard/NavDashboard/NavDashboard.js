import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const NavDashboard = ({ url }) => {
    const { logOut } = useAuth();

    return (
        <Navbar bg="dark" variant="dark" expand={false}>
            <Container fluid>
                <Navbar.Brand >Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Baby Shopper BD</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/home" className="dashboard-item" >Home</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/pay`} className="dashboard-item" >Pay</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/myOrder`} className="dashboard-item" >My Order</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/review`} className="dashboard-item" >Review</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/manageOrder`} className="dashboard-item" >Manage All Order</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/addProduct`} className="dashboard-item" >Add A Product</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/makeAdmin`} className="dashboard-item" >Make Admin</Nav.Link>
                            <Nav.Link as={Link} to={`${url}/manageProduct`} className="dashboard-item" >Manage Products</Nav.Link>
                            <Nav.Link onClick={logOut}><button className="btn btn-warning">Log Out</button></Nav.Link>


                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavDashboard;