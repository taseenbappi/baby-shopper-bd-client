import React from 'react';
import about from '../../../images/about/about.webp';

const About = () => {
    return (
        <div className="container-fluid  py-5 bg-light">

            <div className="row">
                <div className="col-12 col-lg-7 col-md-6 col-sm-12">
                    <img src={about} alt="" className="img-fluid p-3" />
                </div>
                <div className="col-12 col-lg-5 col-md-6 col-sm-12 bg-light p-3 text-start">
                    <h2 className="text-Warning">ABOUT</h2>
                    <p>BABY SHOPPER BD - THE BIGGEST ONLINE BABY SHOP IN DHAKA, BANGLADESH.</p>
                    <p>Baby shopper BD aspires to be the largest online based store for all things baby related in Bangladesh, like a one stop baby shop for your little one with not one but numerous brands in a variety of ranges.Our main goal here at Baby Shopper BD is to make life a tad bit easier and more comfortable for mothers across the country and of course for the children.</p>

                </div>
            </div>
        </div>
    );
};

export default About;