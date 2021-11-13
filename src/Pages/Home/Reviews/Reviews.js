import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const [isLoadingToys, setIsLoadingToys] = useState(false);

    useEffect(() => {
        setIsLoadingToys(true)
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data))
            .finally(() => setIsLoadingToys(false))
    }, [])

    if (isLoadingToys) {
        return <Spinner animation="border" />
    }
    return (
        <div className="container-fluid py-5">
            <h1 className="product-title text-uppercase py-5">Customer <span className="text-warning">Reviews</span> <hr className="w-25  m-auto" /></h1>
            <div className="row row-cols-1 row-cols-md-3 g-2 container mx-auto">
                {
                    reviews.map(review => <ReviewsCard
                        key={review._id}
                        review={review}
                    ></ReviewsCard>)
                }

            </div>
        </div>
    );
};

export default Reviews;