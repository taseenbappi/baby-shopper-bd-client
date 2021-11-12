import React from 'react';
import './banner.css';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="container-fluid  bg-light p-0">
            <div className="banner d-flex justify-content-center align-items-center  flex-column">
                <h1 className="banner-title">Pick The Best Toy For Your Kids!!</h1>

                <Link to="/toys"><button className="btn btn-warning">Explore Our Toys</button></Link>

            </div>
        </div>
    );
};

export default Banner;