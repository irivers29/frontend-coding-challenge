// CountryFlag.js
import React, { useState, useEffect } from 'react';

const CountryFlag = ({ countryCode }) => {
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    {/* Fetch the url of the flag */}
    const fetchFlag = async () => {
      try {
        const country_key = countryCode["attributes"]["code"]
        const url = `https://restcountries.com/v3.1/alpha/${country_key}`;
        const response = await fetch(url);
        if (!response.ok) {
          console.error('Failed to fetch country flag:', response.status, response.statusText);
          return;
        }
        const data = await response.json();
        if (data[0].flags && data[0].flags.png) {
          setFlagUrl(data[0].flags.png);
        }
      } catch (error) {
      }
    };

    fetchFlag();
  }, [countryCode]);

  return (
    <div className="country-flag">
      {/* Display the country flag image */}
      <img src={flagUrl} alt="Country Flag" />
    </div>
  );
};

export default CountryFlag;
