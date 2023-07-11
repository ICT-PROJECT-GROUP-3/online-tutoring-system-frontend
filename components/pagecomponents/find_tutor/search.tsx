import { useState } from 'react';

/**
 * Search component.
 *
 * @param {function} handleSearch - The function to handle search.
 * @returns {JSX.Element} The rendered Search component.
 */
const Search = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationTerm, setLocationTerm] = useState('');

  /**
   * Handle input change for search term.
   *
   * @param {Object} e - The event object.
   */
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  /**
   * Handle input change for location term.
   *
   * @param {Object} e - The event object.
   */
  const handleLocationChange = (e) => {
    setLocationTerm(e.target.value);
  };

  /**
   * Handle search button click.
   */
  const handleSearchClick = () => {
    handleSearch(searchTerm, locationTerm);
  };

  return (
    <>
      <div className="">
        {/* This search field is for the subject */}
        <form className="flex flex-row justify-center mx-4 mb-16">
          <div className="">
            <div className="">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search By Subject"
                className="flex items-center justify-center text-center rounded-[5px] bg-white box-border w-96 h-12 border-[1px] border-solid border-[#EAE8E4]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-12">
            <svg
              width={46}
              height={6}
              viewBox="0 0 46 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-10 h-2"
              preserveAspectRatio="none"
            >
              <path
                d="M3 3H43"
                stroke="white"
                strokeWidth={5}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* This search field is for the location */}
          <div className="">
            <div className="">
              <input
                type="text"
                value={locationTerm}
                onChange={(e) => setLocationTerm(e.target.value)}
                placeholder="Search By Location"
                className="flex items-center justify-center text-center rounded-[5px] bg-white box-border w-96 h-12 border-[1px] border-solid border-[#EAE8E4]"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-12">
            <svg
              width={46}
              height={6}
              viewBox="0 0 46 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative w-10 h-2"
              preserveAspectRatio="none"
            >
              <path
                d="M3 3H43"
                stroke="white"
                strokeWidth={5}
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Button to trigger search */}
          <button
            className="rounded-[5px] bg-[#d03434] p-2 w-auto"
            type="button"
            onClick={handleSearchClick}
          >
            <p className="text-lg text-center text-[#fbf6e6]"> Search </p>
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
