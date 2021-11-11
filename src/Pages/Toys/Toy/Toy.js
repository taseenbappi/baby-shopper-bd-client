import React from 'react';
import './Toy.css';
const Toy = (props) => {
    const { product_title, price, description, rating, image_url } = props.toy;

    return (

        <div className="col">
            <div className="card h-100">
                <img src={image_url} className="card-img-top img-fluid toy-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product_title}</h5>
                    <p className="card-text">{description}</p>
                    <h6>Price: ${price}</h6>

                </div>
                <div className='p-2'><button className="btn btn-warning p-2 w-100">Buy Now</button></div>
            </div>
        </div>


    );
};

export default Toy;