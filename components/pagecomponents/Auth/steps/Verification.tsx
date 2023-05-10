import Link from 'next/link';
import StepsAnimateFramer from "../StepsAnimateFramer"

export default function Final() {
  return (
    <StepsAnimateFramer>
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper">
          <svg
            className="checkmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="text-lg font-semibold text-gray-500">
          Your Account has been created.
        </div>
        <Link className="mt-10" href="/">
          <button className="h-10 px-5 text-[#d03434] transition-colors duration-150 border border-gray-300 rounded-lg focus:shadow-outline hover:bg-[#d03434] hover:text-green-100">
            Close
          </button>
        </Link>
      </div>
    </div>
    </StepsAnimateFramer>
  );
}
