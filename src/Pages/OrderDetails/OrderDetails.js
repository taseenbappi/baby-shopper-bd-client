import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const OrderDetails = () => {
    const { toyId } = useParams();

    const [toy, setToy] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/toys/${toyId}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])

    return (
        <div>
            <p>Toy:{toy.product_title}</p>
        </div>
    );
};

export default OrderDetails;