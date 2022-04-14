import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';


const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);
    return (
        <section className='review-container'>
            <h1 className='text-center py-5'>Happy <span>Customers</span>, Happy Homes</h1>
            <div className="review-card-container pb-5">
                {
                    review.map(single => <ReviewCard key={single._id} single={single} ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;