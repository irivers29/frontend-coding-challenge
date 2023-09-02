// Bookstore.js
import React, { useState } from 'react';
import BookList from './BookList';
import CountryFlag from './CountryFlag';
import StarRating from './StarReating';
import './BookStore.css'

const Bookstore = ({ bookstore, books, countries, authors }) => {
  const country_id = bookstore.relationships.countries.data.id;
  const foundData = countries.find((item) => item.id === country_id);

  // Calculate the scaling factor to fit the image within a 100px radius circle
  const scalingFactor = 100 / Math.min(bookstore.attributes.storeImageWidth, bookstore.attributes.storeImageHeight);

  // Apply the scaling factor to the image URL
  const scaledImageSrc = `${bookstore.attributes.storeImage}?w=${Math.floor(bookstore.attributes.storeImageWidth * scalingFactor)}&h=${Math.floor(bookstore.attributes.storeImageHeight * scalingFactor)}`;
  const establishmentDate = new Date(bookstore.attributes.establishmentDate).toLocaleDateString();

  const [rating, setRating] = useState(bookstore.attributes.rating);

    // Function to update the rating in the API
  const updateRating = (newRating) => {
      // Update the rating state locally
      setRating(newRating);
    };

  return (
    <div className="bookstore">
      {/* Bookstore image */}
      <div className='bookstore-frame'>
        <div className="image-frame">
            {/* Bookstore image */}
            <img src={scaledImageSrc} alt={bookstore.attributes.name} />
        </div>
        {/* Establishment date and website link */}
        <div className="bookstore-name">
            <p>{bookstore.attributes.name} </p>
        </div>

        {/* List of best-selling books */}
        <BookList bookstore={bookstore} books={books} authors={authors} />

          {/* Bookstore rating */}
        <div className="rating">
          {/* Display rating stars here */}
          <StarRating initialValue={rating} onChange={updateRating} />
        </div>

        {/* Establishment date and website link */}
        <div className="establishment">
            <p>{establishmentDate} - {bookstore.attributes.website.replace(/(^\w+:|^)\/\//, '')} </p>
        </div>

        {/* Bookstore country flag */}
        <CountryFlag countryCode={foundData} className='country-flag'/>
      </div>
    </div>
  );
};

export default Bookstore;
