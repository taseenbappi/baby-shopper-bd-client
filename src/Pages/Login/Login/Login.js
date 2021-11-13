import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { registerUserSignInHangler, isLoading, user, authError } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const location = useLocation();
    const myHistory = useHistory();
    if (isLoading) {
        return <Spinner animation="border" />
    }

    const onSubmit = data => {
        registerUserSignInHangler(data.email, data.password, location, myHistory);
        reset();

    };

    return (
        <div className="container-fluid p-0">
            <Navigation></Navigation>
            <div className="row py-5 p-5 container  ">

                <div className="col-12 col-lg-6 col-md-6 col-sm-12 p-3 border-top shadow border-3 rounded border-warning">

                    <h2 className="register-title">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" {...register("email")} placeholder="Email" className="form-control p-2 m-3 w-75 mx-auto bg-light" />
                        <input type="password" {...register("password")} placeholder="Password" className="form-control p-2 m-3 w-75 mx-auto bg-light" />
                        <input type="submit" value="Login" className="btn btn-warning " />
                    </form>
                    {/* error message show */}
                    {user.email && "Login Successfully!"}
                    {
                        authError?.includes('auth/email-already-in-use') && <p className="text-danger fw-bolder">"This email already exist!! Please Try another email"</p>
                    }
                    {
                        authError?.includes("auth/user-not-found") && <p className="text-danger fw-bolder">Your email not registered!</p>
                    }
                    {
                        authError?.includes("auth/wrong-password") && <p className="text-danger fw-bolder">Wrong password! Please type your correct password</p>
                    }

                    <Link to="/register" ><p className="p-3">New user? Please go for register here. </p></Link>
                </div>
                <div className="col-12 col-lg-6 col-md-6 col-sm-12">

                </div>

            </div >
        </div>
    );
};

export default Login;