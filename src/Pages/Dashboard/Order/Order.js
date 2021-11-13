import axios from 'axios';
import React from 'react';

const Order = (props) => {
    const { _id, toy_name, price, customer_name } = props.order;
    const deleteOrderHandler = (id) => {
        const userConfirmation = window.confirm("Are you sure want to delete your order?");
        if (userConfirmation) {
            axios.delete(`https://rocky-earth-51630.herokuapp.com/orders/${id}`)
                .then(response => {
                    if (response.data.deletedCount) {
                        // setToys(toys);
                        alert("deleted order successfully");
                    }
                    else {
                        alert("order not deleted");
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }
        else {
            return;
        }


    }

    return (
        <div className="card mb-3 shadow border-0 border-top border-3 rounded-3 border-success">
            <div className="row g-0 justify-content-center align-items-center">

                <div className="col-md-10">
                    <div className="card-body text-start">
                        <h3 className="card-title">Customer: <span className="text-success">{customer_name}</span></h3>
                        <h5 className="card-title product-title">Product Name: <span className="text-warning">{toy_name}</span></h5>
                        <p className="card-text fw-bolder fs-5">Price: ${price}</p>

                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-danger" onClick={() => deleteOrderHandler(_id)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Order;