export default function MainContent() {
  return (
    <div className="bg-white py-20 lg:py-28 mx-auto">
      {/* Main Content Container */}
      <div className="flex flex-col justify-center px-12 lg:px-20">
        {/* Main Heading */}
        <h1 className="text-2xl lg:text-[54px] text-slate-900 text-center font-bold leading-7 lg:leading-[61px]">
          Open-Source Web-OS for Managing{' '}
          <span className="text-teal-500">Development</span> Projects aligned
          with UN SDGs, Paris Agreement NDCs, SBTi and Sendai Frameworks
        </h1>
        {/* Sub Heading */}
        <h2 className="text-md lg:text-2xl text-slate-900 font-semibold text-center py-10 lg:py-20 px-8 lg:px-36">
          Empower Climate-Smart Development with Real-Time Data, AI, and GIS for
          Public and Private Sector Projects.
        </h2>
        {/* Get SusDev OS Form */}
        <form className="relative bg-zinc-100 rounded-full text-md lg:text-2xl lg:leading-8 shadow-lg mx-auto p-1.5 lg:p-2 h-10 w-64 lg:h-[72px] lg:w-[643px]">
          <input
            className="outline-none placeholder-gray-500  font-medium text-center text-slate-900 bg-zinc-100 rounded-full text-sm lg:text-xl lg:h-14 w-full lg:w-2/3 lg:p-4"
            type="text"
            placeholder="Enter your email to join the wait list"
          />
          {/* Get Susdev OS Button */}
          <button
            className="block lg:inline-block mx-auto lg:mx-0 lg:absolute lg:right-1 h-8 lg:h-14 w-fit rounded-full font-medium bg-slate-900 text-sm lg:text-xl text-white mt-5 lg:mt-0 lg:mr-1 px-2 lg:p-4"
            type="submit"
          >
            GET SUSDEV-OS
          </button>
        </form>
      </div>
    </div>
  );
}
