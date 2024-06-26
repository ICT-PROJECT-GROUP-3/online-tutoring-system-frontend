// import RegularButton from '@/components/common/buttons/primary-button'
import React from 'react';

const Search = () => {
  return (
    <>
      <div className="flex flex-row justify-center mx-4 my-16">
        {/* This search field is for the subject */}
        <div className="">
          <div className="">
            <input
              type="text"
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
              stroke-width={5}
              stroke-linecap="round"
            />
          </svg>
        </div>

        {/* This search field is for the location */}
        <div className="">
          <div className="">
            <input
              type="text"
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
              stroke-width={5}
              stroke-linecap="round"
            />
          </svg>
        </div>

        {/* Turn this into abutton that searches both sides  - string  */}
        <div className="rounded-[5px] bg-[#d03434] p-2 w-auto">
          <p className="text-lg text-center text-[#fbf6e6]">search</p>
        </div>
      </div>
    </>
  );
};

export default Search;
