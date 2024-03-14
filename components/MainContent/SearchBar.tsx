/**
 * This SearchBar component is used in the MainContent component.
 * It provides a search bar for tablet and web view, and separates
 * the search bar and the button for mobile view.
 */

const SearchBar = () => {
    return (
      <>
        {/* Search bar for tablet and web view */}
        <form className="relative bg-zinc-100 rounded-full shadow-lg mx-auto p-1 lg:p-4 lg:w-[85%] max-w-lg">
          <div className="hidden lg:flex lg:flex-row items-center">
            <input
              className="outline-none placeholder-gray-500 font-medium text-center text-slate-900 bg-zinc-100 rounded-full text-sm lg:text-lg h-12 lg:h-14 w-full lg:w-2/3 lg:p-4"
              type="email"
              placeholder="Enter your email to join the wait list"
            />
            {/* Get Susdev OS Button */}
            <button
              className="mt-3 lg:mt-0 lg:ml-2 lg:mr-0 lg:absolute lg:right-2 lg:top-2 px-4 lg:p-5 hover:bg-slate-800 lg:self-center block lg:w-fit rounded-full font-medium bg-slate-900 text-sm lg:text-lg text-white"
              type="submit"
            >
              GET SUSDEV-OS
            </button>
          </div>
        </form>
        {/* Separate search bar and button for mobile view */}
        <form className="block lg:hidden relative bg-zinc-100 rounded-full shadow-lg mx-auto p-1 lg:p-4 lg:w-[85%] max-w-lg">
          <input
            className="outline-none placeholder-gray-500 font-medium text-center text-slate-900 bg-zinc-100 rounded-full text-sm lg:text-lg h-12 lg:h-14 w-full lg:w-2/3 lg:p-4"
            type="email"
            placeholder="Enter your email to join the wait list"
          />
        </form>
        <div className="block lg:hidden mx-auto max-w-lg">
          <button
            className="w-full px-4 py-2 rounded-full font-medium bg-slate-900 text-sm lg:text-lg text-white hover:bg-slate-800"
            type="submit"
          >
            GET SUSDEV-OS
          </button>
        </div>
      </>
    );
  };
  
  export default SearchBar;
  