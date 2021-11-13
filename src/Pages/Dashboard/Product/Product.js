import React from 'react';

const Product = (props) => {
    const { product_title, price, image_url } = props.product;

    return (
        <tr>
            <th scope="row">1</th>
            <td>{product_title}</td>
            <td>{price}</td>
            <td><img src={image_url} alt="" className="img-thumbnail" height="50" /></td>
            <td> <button className="btn btn-danger">X</button> </td>
        </tr>
    );
};

export default Product;