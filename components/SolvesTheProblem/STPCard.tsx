import Image from 'next/image';
import React from 'react';


interface CardProps {
  cardData: {
    imgSrc: string;
   pCn1: string;
    content1: string;
   
    
  };
}

const Card: React.FC<CardProps> = ({ cardData }) => {
  const { imgSrc, content1, pCn1} = cardData;

  return (
    <div className="grid sm:grid-cols-2 gap-4">
  
  <div className="mt-4 sm:ml-32 ">
     <Image 
            className="rounded-2xl sm:align-middle sm:w-auto "
            src={imgSrc}
            alt="logo"
            width={586}
            height={550}
          />
 
    
    </div>

   

    <div className="justify-center bg-slate-500 lg:mr-40 lg:mt-64 md:mr-32 md:mt-36 sm:mr-32 sm:mt-36">
      <h1 className="font-bold lg:text-4xl md:text-2xl sm:text-1xl text-center">
        The Problem
      </h1>
        <p
            className={`lg:text-3xl md:text-1xl sm:text-1xl text-center${pCn1} w-full mt-4 text-center`}
          >
            {content1}
          </p>
    </div>
  
</div>
    
  )
}

export default Card;