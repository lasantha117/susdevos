import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  image: string;
  alt: string;
  button: boolean;
}

const SideNavigationBar: React.FC<CardProps> = ({
  title,
  image,
  alt,
  button,
}) => {
  // export default function SideNavigationBar() {
  return (
        // <div className="flex items-center justify-between gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
    <div className="flex items-center justify-between hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
      <div className="flex gap-5">
        <Image
          src={image}
          className="text-lg text-gray-600 group-hover:text-white"
          // onClick={}
          alt={alt}
          width={25}
          height={25}
        />

        <h3 className="text-left text-base text-gray-800 group-hover:text-white font-semibold">{title}</h3>
      </div>
      <div className="text-right hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
        <Image
          src="/Images/SideNavigationBar/actions.png"
          className="text-right text-2xl text-gray-600 group-hover:text-white "
          // onClick={}
          alt="Action Image"
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default SideNavigationBar;
