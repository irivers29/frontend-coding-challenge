// StarRating.js
import React, { useState } from 'react';

const StarRating = ({ initialValue, onChange }) => {
  const [rating, setRating] = useState(initialValue || 0);

  const handleClick = (newRating) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating); // Call the onChange function with the new rating
    }
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${rating >= star ? 'filled' : ''}`}
          onClick={() => handleClick(star)}
        >
          &#9733; {/* Unicode star character */}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
