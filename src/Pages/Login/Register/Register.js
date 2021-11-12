import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Register.css';


const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { registerHangler, authError, isLoading } = useAuth();

    if (isLoading) {
        return <Spinner animation="border" />
    }
    const onSubmit = data => {
        registerHangler(data.displayName, data.email, data.password);
        reset();

    };


    return (

        <div className="row py-5 p-5 container  ">
            <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3 border-top shadow border-3 rounded border-warning">
                <h2 className="register-title">User Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("displayName")} placeholder="Your name" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />
                    <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />
                    <input type="password" {...register("password")} placeholder="Password" className="form-control p-2 m-3 w-75 mx-auto bg-light" required />
                    <input type="submit" value="Register" className="btn btn-warning " />
                </form>
                <p className="text-danger fw-bolder">{authError?.includes('auth/email-already-in-use') ? "This email already exist!! Please Try another email" : ""}</p>

                <Link to="/login" ><p className="p-3">Already register? Please Login Here </p></Link>
            </div>
            <div className="col-12 col-lg-6 col-md-6 col-sm-12">

            </div>

        </div>


    );
};

export default Register;