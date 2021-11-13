import React from 'react';
import Rating from 'react-rating';
import './ReviewCard.css';

const ReviewsCard = (props) => {
    const { name, comment, rating, image_url } = props.review;
    return (
        <div className="col">
            <div className="card h-100 mx-auto p-3 bg-light">
                <img src={image_url} className="img-thumbnail p-2 review-img mx-auto rounded-circle" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{comment}</p>

                    <Rating
                        initialRating={rating}
                        fullSymbol={<i className="fas fa-star text-warning"></i>}
                        emptySymbol={<i className="far fa-star text-warning"></i>}
                        readonly
                    />


                </div>
            </div>
        </div>


    );
};

export default ReviewsCard;