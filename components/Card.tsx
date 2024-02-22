import React from 'react'
import Image from 'next/image';
import { Button } from 'react-aria-components';

interface CardProps{
    title: string;
    content: string;
    className?: string;
}

const Card:React.FC<CardProps> = ({ title, content,className }) =>{
  return (
    <div>
      <div className="min-w-[300] shadow-lg ">
        <div className="px-6 py-4 rounded-xl border-solid border-2 border-cyan-900 ">
          <Image className="min-w-1 min-h-1 mt-4 mb-4" src="" alt="logo"/>
          <div className="mr-12 font-bold text-xl mb-4 mt-4">{title}</div>
          <p className="mx-0 text-gray-700 text-base mb-20">
          {content}
          </p>
          <Button className='size-10 border-black rounded-full border-solid border-2 mb-4 mr-4'>UR</Button>
        </div>
      </div>
    </div>
  );
}
export default Card;
