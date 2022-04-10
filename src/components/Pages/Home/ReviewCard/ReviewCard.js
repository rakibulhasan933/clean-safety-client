import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ single }) => {
    // console.log(single);
    const { name, photoURL, designation, comment } = single;
    return (
        <div className='review-card'>
            <div className="d-flex">
                <div className='user-photo'>
                    <img src={photoURL} alt="" />
                </div>
                <div className="user card-header">
                    <h6>- {name} </h6>
                    <small><i>( {designation} )</i></small>
                </div>
            </div>
            <p><i>"{comment}"</i> </p>

        </div>
    );
};

export default ReviewCard;