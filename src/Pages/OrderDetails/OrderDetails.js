import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import axios from 'axios';
import './OrderDetails.css';
import Navigation from '../Shared/Navigation/Navigation';


const OrderDetails = () => {
    const { toyId } = useParams();
    const [toy, setToy] = useState({});
    const { product_title, price, description, image_url } = toy;

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/placedOrder', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Order placed successfully!!');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });



    };

    useEffect(() => {
        fetch(`http://localhost:5000/toys/${toyId}`)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [])

    return (
        <div className="container-fluid border p-0">
            <Navigation></Navigation>
            <div className="our-toy-title d-flex align-items-center justify-content-center p-0">
                <h2 className='fw-bolder '>Order Details <hr className="w-75 m-auto" /></h2>

            </div>
            <div className="row py-5 p-5  mx-auto ">

                <div className="col-12 col-lg-7 col-md-6 col-sm-12 p-3">
                    <div className="text-start" >
                        <div className="card-body">
                            <h3 className="card-title ">Toy Name: <span className="text-primary">{product_title}</span></h3>
                            <p className="card-text fs-5 text-secondary">Product Description: {description}</p>
                            <h4 className="card-text fw-bolder">Price: ${price}</h4>

                        </div>
                        <img src={image_url} className="details-img img-fluid" alt="..." height="150" />
                    </div>
                </div>

                <div className="col-12 col-lg-5 col-md-6 col-sm-12 p-5 border-top shadow border-3 rounded border-warning">
                    <h2 className="register-title">Order Form</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("toy_name")} placeholder="Toy Name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="number" {...register("price")} placeholder="Toy Price" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input {...register("customer_name")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="number" {...register("phone")} placeholder="Your Contact Number" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="submit" value="Placed Order" className="btn btn-warning " />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default OrderDetails;