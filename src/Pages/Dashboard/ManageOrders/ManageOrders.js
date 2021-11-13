import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Order from '../Order/Order';

const ManageOrders = () => {

    const [orders, setOrders] = useState([]);
    const [isLoadingToys, setIsLoadingToys] = useState(false);

    useEffect(() => {
        setIsLoadingToys(true)
        fetch('https://rocky-earth-51630.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
            .finally(() => setIsLoadingToys(false))
    }, [])


    if (isLoadingToys) {
        return <Spinner animation="border" />
    }
    return (
        <div className="container-fluid p-0">
            <div className="our-toy-title d-flex align-items-center justify-content-center p-0">
                <h2 className='fw-bolder '>Manage All Orders <hr className="w-75 m-auto" /></h2>

            </div>
            <div className="container p-3 ">
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}>

                    </Order>)
                }

            </div>
        </div>
    );
};

export default ManageOrders;