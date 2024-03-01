// CardStack.tsx
import React from 'react';
import Card from './Card';

const CardStack: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardStack;
