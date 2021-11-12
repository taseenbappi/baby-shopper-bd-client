import React from 'react';

const Order = (props) => {
    const { toy_name, price, customer_name } = props.order;

    return (
        <div className="card mb-3 shadow border-0 border-top border-3 rounded-3 border-success">
            <div className="row g-0 justify-content-center align-items-center">

                <div className="col-md-10">
                    <div className="card-body text-start">
                        <h3 className="card-title product-title ">Customer: <span className="text-warning">{customer_name}</span></h3>
                        <h5 className="card-title product-title">Product Name: <span className="text-warning">{toy_name}</span></h5>
                        <p className="card-text fw-bolder fs-5">Price: ${price}</p>

                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default Order;