import React from 'react';
import delivery from '../../../images/services/delivery.png';
import support from '../../../images/services/support.png';
import moneyback from '../../../images/services/money-back-guarantee.png';
import saving from '../../../images/services/greate-saving.png';


const OurService = () => {
    return (
        <div className='container py-5'>

            <div className="row  bg-warning p-1">
                <div className="col-12 col-lg-3 col-md-6 col-sm-12  bg-light border-end border-warning  ">
                    <img src={delivery} alt="" className="img-fluid" />
                    <h4>Free Delivery</h4>
                    <p>For all oders over $100</p>
                </div>
                <div className="col-12 col-lg-3 col-md-6 col-sm-12  bg-light border-end border-warning ">
                    <img src={support} alt="" className="img-fluid" />
                    <h4>90 Days Return</h4>
                    <p>If goods have problems</p>
                </div>
                <div className="col-12 col-lg-3 col-md-6 col-sm-12  bg-light border-end border-warning ">
                    <img src={saving} alt="" className="img-fluid" />
                    <h4>Secure Payment</h4>
                    <p>100% secure payment</p>
                </div>
                <div className="col-12 col-lg-3 col-md-6 col-sm-12  bg-light border-end border-warning ">
                    <img src={moneyback} alt="" className="img-fluid" />
                    <h4>24/7 SUPPORT</h4>
                    <p>Dedicated support</p>
                </div>

            </div>
        </div>
    );
};

export default OurService;