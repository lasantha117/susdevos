// components/Card/index.tsx
import React from 'react';

interface CardProps {
  cardData: {
    title: string;
    description: string;
    imageSrc: string;
  };
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { title, description, imageSrc } = cardData;

  return (
    <div className="bg-black shadow-md rounded-lg p-6 mb-4">
      <img src={imageSrc} alt={title} className="w-full rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Action
      </button>
    </div>
  );
};

export default Card;
