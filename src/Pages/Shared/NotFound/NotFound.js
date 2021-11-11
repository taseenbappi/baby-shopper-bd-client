import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">

            <Link to="/home"><button className="btn btn-primary mt-5 text-white" >Go back home</button></Link>

        </div>
    );
};

export default NotFound;