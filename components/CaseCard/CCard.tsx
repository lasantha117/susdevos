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
      <div className="flex mb-10 justify-center">
        <div
          className={`sm:px-4 sm:py-2 min-w-48 max-w-52 min-h-52 sm:max-w-64 sm:max-h-fit md:m-w-64 md:max-h-fit rounded-2xl lg:px-6 md:py-4  lg:min-w-96 lg:max-h-fit lg:rounded-3xl border-solid mt-2 ${cardCn}`}>
          
          <img
            className="sm:w-14 sm:h-32 lg:w-[550px] lg:h-[384px] ml-4 lg:ml-6 lg:mt-6"
            src={imgSrc}
            alt="logo"
          />
          
          <p
            className={`mx-4 mt-4 text-xs lg:mx-6 lg:mt-8 font-medium lg:text-2xl lg:mb-5 ${pCn}`}
          >
            {content}
          </p>

          <Button
            className={`bg-white flex-none w-32 h-10 mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${buttonCn}`}>
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
