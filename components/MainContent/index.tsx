export default function MainContent() {
  return (
    <div className="bg-white py-28">
      {/* Main Content Container */}
      <div className="flex flex-col justify-center px-20">
        {/* Main Heading */}
        <h1 className="text-[54px] text-slate-900 text-center font-bold leading-[61px]">
          Open-Source Web-OS for Managing{' '}
          <span className="text-teal-500">Development</span> Projects aligned
          with UN SDGs, Paris Agreement NDCs, SBTi and Sendai Frameworks
        </h1>
        {/* Sub Heading */}
        <h2 className="text-2xl text-slate-900 font-semibold text-center py-20 px-36">
          Empower Climate-Smart Development with Real-Time Data, AI, and GIS for
          Public and Private Sector Projects.
        </h2>
        {/* Get SusDev OS Form */}
        <form className="relative bg-zinc-100 rounded-full text-2xl leading-8 shadow-lg mx-auto p-2 h-[72px] w-[643px]">
          <input
            className="outline-none placeholder-gray-500 font-medium leading-7 text-slate-900 bg-zinc-100 rounded-full text-xl h-14 w-2/3 p-4"
            type="text"
            placeholder="Enter your email to join the wait list"
          />
          {/* Get Susdev OS Button */}
          <button
            className="absolute right-1 h-14 w-fit rounded-full font-medium bg-slate-900 text-xl text-white leading-6 mr-1 p-4"
            type="submit"
          >
            GET SUSDEV-OS
          </button>
        </form>
      </div>
    </div>
  );
}
