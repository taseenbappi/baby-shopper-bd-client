import React from 'react';
import './banner.css';
import img1 from "../../../images/discount/banner1.webp";
import img2 from "../../../images/discount/bannner3.webp";


const Banner = () => {
    return (
        <div className="container-fluid  bg-light">
            <div className="row  ">
                <div className="col-12 col-lg-8 col-md-7 col-sm-12 p-0">
                    <div className="banner d-flex justify-content-center align-items-center  flex-column">
                        <h1 className="banner-title">Pick The Best Toy For Your Kids!!</h1>

                        <button className="btn btn-warning">Explore Our Shop</button>

                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-5 col-sm-12  bg-light p-0">
                    <div className="p-2 banner-side1 py-5">
                        <h2 className="text-light">Kids toy</h2>
                        <h5 className="border bg-warning p-2 w-50 m-auto mb-2 rounded-pill border-5">Save up to 27%</h5>
                        <button className="btn btn-light">Explore</button>
                    </div>
                    <div className="p-2 banner-side2 py-5">
                        <h2 className="text-light">Discount</h2>
                        <h5 className="border bg-warning p-2 w-50 m-auto mb-2 rounded-pill border-5">Save up to 45%</h5>
                        <button className="btn btn-light">Explore</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;