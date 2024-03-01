// Card.tsx
import React from 'react';

const Card: React.FC = () => {
  return (
<div className="bg-white shadow-md rounded-lg p-6 mb-4 lg:mb-0 mr-4 sm:mb-0 sm:mr-0 sm:w-1/2 lg:w-1/4">
      <img src="https://sambadenglish.com/wp-content/uploads/2020/11/Plan-A-Short-Vacation-to-These-Destinations-From-India-This-Festive-Season-750x430.png" alt="Example" className="w-full rounded-lg mb-4" />
      <h2 className="text-xl font-semibold mb-2">Travel Destination</h2>
      <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut turpis sit amet sapien consequat vulputate.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Action
      </button>
    </div>
  );
};

export default Card;
