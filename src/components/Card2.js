import React from 'react';

const Card = ({ backgroundImage, titleText, descriptionText }) => {
  return (
    <div
      className="w-full max-w-sm bg-cover bg-center rounded-lg shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-black bg-opacity-50 p-6 rounded-lg">
        <h2 className="text-white text-2xl font-bold mb-4">{titleText}</h2>
        <p className="text-white text-base">{descriptionText}</p>
      </div>
    </div>
  );
};

export default Card;
