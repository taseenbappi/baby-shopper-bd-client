import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useToys from '../../../Hooks/useToys';
import Toy from '../Toy/Toy';
import './Toys.css';

const Toys = () => {
    const [toys, isLoadingToys] = useToys();
    if (isLoadingToys) {
        return <Spinner animation="border" />;
    }
    return (

        <div className="container-fluid py-3 bg-light ">
            <div className="our-toy-title d-flex align-items-center justify-content-center p-0">
                <h2 className='fw-bolder '>Our Toys <hr className="w-75 m-auto" /></h2>

            </div>



            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container m-auto py-3">
                {
                    toys.map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    ></Toy>)
                }
            </div>
        </div>
    );
};

export default Toys;