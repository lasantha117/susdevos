

import Image from 'next/image';
import React from 'react';
import { Link } from 'react-aria-components';

interface Step4Props {
  onNext: () => void;
}
const ForgotPassword4: React.FC<Step4Props> = ({ onNext }) => {
  return (
    <div className="flex justify-center container p-32">
      <div className="relative flex flex-col gap-4 w-[360px]">
        <Image
          className="size-10 w-14 h-14 mx-auto"
          src="/Images/ForgetPassword/success.webp"
          width={300}
          height={300}
          alt="login"
        />
        <h1 className="text-3xl text-center font-semibold text-slate-950">
          Password Reset
        </h1>
        <p className="text-center text-base font-medium text-gray-500">
          Your password has been successfully reset. Click below to log in
          magically.
        </p>
        <button
          className="lg:mt-2 text-white bg-slate-950 hover:bg-slate-800 active:bg-slate-900 rounded-lg p-2 outline-none focus:ring-2 focus:ring-offset-1 transition"
          type="submit"
          
        >
          Continue
        </button>
        <Link
          href="/login"
          className="flex flex-row gap-2 items-center mx-auto mt-2 px-4 py-2 rounded-lg hover:bg-slate-200 text-slate-700 font-semibold hover:text-slate-900"
        >
          <Image
            className="size-5 w-fit h-fit"
            src="/Images/ForgetPassword/arrow-left.webp"
            width={300}
            height={300}
            alt="back"
          />
          Back to log in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword4;
