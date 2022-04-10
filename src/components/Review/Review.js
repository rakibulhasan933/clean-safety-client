import React from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Review.css';


const reviewData = [
    {
        _id: 0,
        name: "Rakibul",
        photoURL: "https://i.ibb.co/GWDpDmY/IMG-3724.jpg",
        designation: "Web Developer",
        comment: "good services your team"
    },
    {
        _id: 1,
        name: "Hasan",
        photoURL: "https://i.ibb.co/GWDpDmY/IMG-3724.jpg",
        designation: "Web Developer",
        comment: "good services your team"
    },
    {
        _id: 2,
        name: "Rakib",
        photoURL: "https://i.ibb.co/GWDpDmY/IMG-3724.jpg",
        designation: "Web Developer",
        comment: "good services your team"
    },
    {
        _id: 3,
        name: "Rakib",
        photoURL: "https://i.ibb.co/GWDpDmY/IMG-3724.jpg",
        designation: "Web Developer",
        comment: "good services your team"
    },
    {
        _id: 4,
        name: "Rakib",
        photoURL: "https://i.ibb.co/GWDpDmY/IMG-3724.jpg",
        designation: "Web Developer",
        comment: "good services your team"
    }
];

const Review = () => {
    return (
        <section className='review-container'>
            <h1 className='text-center py-5'>Happy <span>Customers</span>, Happy Homes</h1>
            <div className="review-card-container pb-5">
                {
                    reviewData.map(single => <ReviewCard key={single._id} single={single} ></ReviewCard>)
                }
            </div>
        </section>
    );
};

export default Review;