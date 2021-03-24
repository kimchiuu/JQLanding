import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="text-4xl lg:text-2xl font-semibold text-gray-700">{primaryText}</p>
    <p className="font-semibold mb-6">{secondaryText}</p>
  </>
);

export default StatsBox;
