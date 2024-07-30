import React from 'react'
import './StarRating.css'; 
const StarRating = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
  
    return (
      <div>
        {[...Array(totalStars)].map((star, index) => (
          <span key={index} className={`star ${index < filledStars ? 'filled' : ''}`}>
            &#9733;
          </span>
        ))}
      </div>
    );
  };
  
  export default StarRating;
