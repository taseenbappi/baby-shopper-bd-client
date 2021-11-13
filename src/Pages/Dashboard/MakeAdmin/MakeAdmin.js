import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        // update request for admin role
        axios.put('https://rocky-earth-51630.herokuapp.com/users/admin', data)
            .then(response => {
                if (response.data.modifiedCount) {
                    alert("Admin added successfully");
                    reset();
                }
                else {
                    alert("try register email");
                }
            })
            .catch(error => {

                console.error('There was an error!', error);
            });
        reset();

    };
    return (
        <div className="container-fluid p-0">
            <div className="our-toy-title d-flex align-items-center justify-content-center p-0">
                <h2 className='fw-bolder '>Make an Admin<hr className="w-75 m-auto" /></h2>
            </div>
            <div className="row py-5 p-5 container  ">

                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3 border-top shadow border-3 rounded border-warning">

                    <h2 className="register-title">Admin Form</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3 w-75 mx-auto bg-light" />

                        <input type="submit" value="Add Admin" className="btn btn-warning " />
                    </form>

                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12">

                </div>

            </div >
        </div>
    );
};

export default MakeAdmin;