'use client';

import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleMenu = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <nav className="flex h-20 w-screen bg-white pl-4 lg:pl-40">
        <div className="flex bg-teal-500 rounded-full justify-center my-6 h-fit min-w-fit">
          <h1 className="text-lg justfiy-center font-semibold mx-2">
            SusDev OS
          </h1>
        </div>

        {/* mobile view */}

        <button
          onClick={toggleMenu}
          className="flex absolute right-0 lg:hidden  text-teal-500 my-8 mr-0"
        >
          <svg
            className="block h-5 w-5 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>

        {isOpen && (
          <div className="flex lg:hidden mr-0 mb-4 h-fit w-48 mx-auto md:min-w-64 md:h-fit bg-white rounded-b-xl mt-16 shadow-lg">
            <div className="grid grid-cols-1 gap-4 mb-10 mx-auto md:mx-auto md:min-h-fit md:min-w-fit">
              <h2 className="text-xs md:text-sm font-semibold mt-10">
                <a href="">👋 get@susdevos.com</a>
              </h2>
              <button
                className={
                  'text-xs h-8 w-20 md:text-sm md:h-12 md:w-32 mx-auto border-solid border-1 outline outline-2 outline-slate-900 text-slate-900 rounded-lg bg-white hover:bg-slate-200'
                }
              >
                Sign In
              </button>
              <button
                className={
                  'text-xs h-8 w-20 md:text-sm md:h-12 md:w-32 mx-auto border-solid border-1 rounded-lg bg-slate-900 text-white hover:bg-slate-800'
                }
              >
                Register
              </button>
            </div>
          </div>
        )}

        {/* mobile view */}

        <div className="hidden lg:flex absolute right-0 mr-4 lg:mr-24">
          <h2 className="text-lg font-semibold justify-center my-6 mr-6">
            <a href="">👋 get@susdevos.com</a>
          </h2>
          <div className="grid grid-cols-2 gap-2 my-4  mr-0">
            <button
              className={
                'h-12 w-32 border-solid border-1 outline outline-2 outline-slate-900 text-slate-900 rounded-lg hover:bg-slate-100'
              }
            >
              Sign In
            </button>
            <button
              className={
                'h-12 w-32 border-solid border-1 rounded-lg bg-slate-900 text-white hover:bg-slate-800'
              }
            >
              Register
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
