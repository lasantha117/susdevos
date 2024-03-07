// Card.js
import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  content: string;
  image: string;
  button: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, content,image,button }) => {
  return (
    <div className="rounded-3xl /*border-4 border-black*/ border-solid  p-4 h-full  bg-gray-50">  
      <div className="relative rounded-full overflow-hidden h-20 w-20 bg-[#2AD2C9] bg-opacity-64">
        <Image 
          src={image} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-xl p-4" 
        />
      </div>
      <div className="p-4 h-80">
        <h1 className="pt-6 text-xl font-bold mb-2 h-28">{title}</h1>
        <p className="pt-6 text-slate-400 subpixel-antialiased mb-4">{content}</p>
      </div>
      <div className="flex justify-end items-end">
          <div  className="/*hover:bg-blue-700*/ h-12 w-12  flex items-center justify-center rounded-full">
              <Image 
                src="/Images/ButtonCard/CircledUpRight.png" 
                alt="Button Image"
                width={32}
                height={32}
                className="rounded-full" 
                layout="responsive"
              />
              {button}
          </div>
      </div>
    </div>
  );
};

export default Card;