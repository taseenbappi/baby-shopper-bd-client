import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/services/money-back-guarantee.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer container-fluid p-0">
            <div className="row align-items-center justify-content-center g-0">
                {/* footer segment */}
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">
                    {/* <img src={logo} alt="" className="p-3 bg-secondary rounded-pill" /> */}
                    <Navbar.Brand as={Link} to="/home" className="text-warning  p-2">Baby Shopper BD</Navbar.Brand>
                    <div>
                        <i className="fab fa-facebook  p-2  fs-4 text-primary"></i>
                        <i className="fab fa-linkedin  p-2 fs-4 text-primary"></i>
                        <i className="fab fa-instagram  p-2 fs-4 text-danger"></i>
                        <i className="fab fa-twitter  p-2 fs-4 text-info"></i>
                    </div>
                    <p className="text-secondary"> Developer: Taseenul Hoque Bappi</p>

                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12 p-3">

                    <p className="text-secondary">© 2021 All Rights Reserved </p>
                </div>
            </div>
        </div>

    );
};

export default Footer;