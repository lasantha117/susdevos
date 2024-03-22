import React from 'react';

export default function TextBanner() {
  return (
    <div className="bg-teal-500 min-h-64 lg:h-[305px] w-full">
      <div className="flex flex-col py-14  lg:py-12 mx-auto">
        {/* Heading */}
        <h1 className="lg:h-[60px] lg:w-[698px] text-center font-semibold lg:font-medium text-2xl lg:text-5xl text-slate-900 mx-auto">
          Access climate financing
        </h1>
        {/* content */}
        <p className="mt-5 lg:h-[108px] lg:w-[729px] font-medium text-lg lg:text-2xl leading-6 lg:leading-9 text-center text-slate-900 mx-10 lg:mx-auto">
          Get access to climate finance by ensuring your sustainability records
          are tangible and reliable, SusDev OS enables just that as data is
          audit ready and easily usable with offsetting and finance services.
        </p>
      </div>
    </div>
  );
}
