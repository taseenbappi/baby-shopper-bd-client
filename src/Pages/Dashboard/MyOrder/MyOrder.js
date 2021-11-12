import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Order from '../Order/Order';

const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    const [isLoadingToys, setIsLoadingToys] = useState(false);

    useEffect(() => {
        setIsLoadingToys(true)
        fetch(`http://localhost:5000/placedOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .finally(() => setIsLoadingToys(false))
    }, [])
    console.log(user);
    console.log(orders);

    if (isLoadingToys) {
        return <Spinner animation="border" />
    }
    return (
        <div className="container-fluid p-0">
            <div className="our-toy-title d-flex align-items-center justify-content-center p-0">
                <h2 className='fw-bolder '>My Order <hr className="w-75 m-auto" /></h2>

            </div>
            <div className="container p-3 ">

                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrder;