import axios from 'axios';
import React from 'react';
import './Product.css';

const Product = (props) => {
    const { _id, product_title, price, image_url } = props.product;
    const deleteProductHandler = (id) => {

        axios.delete(`http://localhost:5000/toys/${id}`)
            .then(response => {
                console.log(response)
                if (response.data.deletedCount) {
                    // setToys(toys);
                    alert("deleted product successfully");
                }
                else {
                    alert("product not deleted");
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <tr className="justify-content-center align-items-center ">
            {/* <th scope="row">{}</th> */}
            <td className="product-title fs-4">{product_title}</td>
            <td className="fw-bolder">${price}</td>
            <td><img src={image_url} alt="" className="thumbnail" height="80" /></td>
            <td> <button className="btn btn-danger" onClick={() => deleteProductHandler(_id)}>X</button> </td>
        </tr>
    );
};

export default Product;