import React from 'react';
import Image from 'next/image';


const LogOutButton: React.FC = ({ }) => {
// export default function SideNavigationBar() {
  return (
    <div className="flex items-center justify-between gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <Image
                    src="/Images/SideNavigationBar/avatar.png"
                    className="text-2xl text-gray-600 group-hover:text-white "
                    // onClick={}
                    alt="Button Image"
                    width={20}
                    height={20}
                    />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
                <Image
                    src="/Images/SideNavigationBar/logOutButton.png"
                    className="text-2xl text-gray-600 group-hover:text-white "
                    // onClick={}
                    alt="Button Image"
                    width={20}
                    height={20}
                    />
              </div>
  );
}

export default LogOutButton;