import Link from "next/link";
import React from 'react'

export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-4 mb-4 flex justify-around bottom-1">
      <Link 
      href="#"
      >
      <button
        onClick={() => handleClick()}
        className={`cursor-pointer w-28 md:w-40 rounded-[5px]  hover:bg-[#d03434] p-1 border-2 border-slate-300 bg-white py-2 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:text-white  ${
          currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
        }`}
      >
        Back
      </button>
      </Link>

      <Link href="#">
      <button
        onClick={() => handleClick('next')}
        className="cursor-pointer py-2 w-28 md:w-40 font-semibold uppercase text-white transition duration-200 ease-in-out rounded-[5px] bg-[#d03434]  hover:bg-white hover:border-2 hover:text-[#d03434] p-1"
      >
        {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
      </button>
      </Link>
    </div>
  );
}
