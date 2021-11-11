import React from 'react';
import { Spinner } from 'react-bootstrap';
import useToys from '../../../Hooks/useToys';
import Toy from '../../Toys/Toy/Toy';

const LatestToys = () => {
    const [toys, isLoadingToys] = useToys();
    const latest = toys.slice(1, 7);
    console.log(latest);
    if (isLoadingToys) {
        return <Spinner animation="border" />;
    }
    return (
        <div className="container-fluid py-5  ">
            <h2 className='fw-bolder'>Latest Toys</h2>
            <hr className="w-25 m-auto" />

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 container m-auto py-3">
                {
                    latest.map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    ></Toy>)
                }
            </div>
        </div>
    );
};

export default LatestToys;