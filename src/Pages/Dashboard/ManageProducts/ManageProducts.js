import React from 'react';
import { Spinner } from 'react-bootstrap';
import useToys from '../../../Hooks/useToys';
import Product from '../Product/Product';

const ManageProducts = () => {
    const [toys, isLoadingToys] = useToys();
    if (isLoadingToys) {
        return <Spinner animation="border" />;
    }
    return (
        <div className="container-fluid p-0">
            <div className="our-toy-title d-flex align-items-center justify-content-center p-0">
                <h2 className='fw-bolder '>Manage All Products <hr className="w-75 m-auto" /></h2>

            </div>
            <div className="container p-3 ">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Title</th>
                            <th scope="col">Product Price</th>
                            <th scope="col">Product Image</th>
                            <th scope="col">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(product => <Product
                                key={product._id}
                                product={product}
                            ></Product>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageProducts;