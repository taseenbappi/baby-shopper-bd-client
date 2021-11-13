import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        axios.post('https://rocky-earth-51630.herokuapp.com/toys', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Product added successfully!!');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });



    };
    return (
        <div className="container-fluid p-0">
            <div className="our-toy-title d-flex align-items-center justify-content-center p-0">
                <h2 className='fw-bolder '>Add A Product <hr className="w-75 m-auto" /></h2>

            </div>
            <div className="row  p-4  mx-auto ">

                <div className="col-12 col-lg-7 col-md-6 col-sm-12 p-3">

                </div>

                <div className="col-12 col-lg-5 col-md-6 col-sm-12 p-5 border-top shadow border-3 rounded border-warning">
                    <h2 className="register-title">Add A Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("product_title")} placeholder="Product Title" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="number" {...register("price")} placeholder="Price" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input {...register("description")} placeholder="Product short description" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input {...register("rating")} placeholder="Rating(0-5)" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input {...register("image_url")} placeholder="Image URL" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="submit" value="Add" className="btn btn-warning w-75" />
                    </form>

                </div>

            </div>

        </div>
    );
};

export default AddProduct;