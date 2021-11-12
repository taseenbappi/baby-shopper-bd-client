import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('http://localhost:5000/reviews', data)
            .then(function (response) {
                if (response.data.insertedId) {
                    alert('Review added successfully!!');
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
                <h2 className='fw-bolder '>Send Your Review <hr className="w-75 m-auto" /></h2>

            </div>
            <div className="row  p-4  mx-auto ">

                <div className="col-12 col-lg-7 col-md-6 col-sm-12 p-3">

                </div>

                <div className="col-12 col-lg-5 col-md-6 col-sm-12 p-5 border-top shadow border-3 rounded border-warning">
                    <h2 className="register-title">Add A Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <textarea {...register("comment")} placeholder="Leave your comment" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input {...register("rating")} placeholder="Rating(0-5)" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input {...register("image_url")} placeholder="Your Image URL" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />

                        <input type="submit" value="Add" className="btn btn-warning w-75" />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Review;