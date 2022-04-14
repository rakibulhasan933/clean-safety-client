import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({ single }) => {
    // console.log(single);
    const { name, imageURL, position, comments } = single;
    return (
        <div className='review-card'>
            <div className="d-flex">
                <div>
                    <img className='profile-pic' src={imageURL} alt="" />
                </div>
                <div className="user card-header">
                    <h6>- {name} </h6>
                    <small><i>( {position} )</i></small>
                </div>
            </div>
            <p><i>"{comments}"</i> </p>

        </div>
    );
};

export default ReviewCard;