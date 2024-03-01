import React from 'react';
import { Button } from 'react-aria-components';

interface CardProps {
  cardData: {
    imgSrc: string;
    content: string;
    cardCn: string;
    pCn: string;
    buttonCn: string;
  };
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { imgSrc, content, cardCn, pCn, buttonCn } = cardData;

  return (
    <div>
      <div className="flex mb-10 justify-center mx-2 mt-0 lg:mt-24">
        <div className={cardCn}>
          <img className="size-8 sm:max-w-14 sm:max-h-14 lg:max-w-24 lg:max-h-24 ml-4 lg:ml-6 mt-6 lg:mt-8" src={imgSrc} alt="logo" />
          <p className={pCn}>
            {content}
          </p>
          <Button className={buttonCn}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
