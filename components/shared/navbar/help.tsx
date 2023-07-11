// This component represents a Help button that can be toggled on and off.

import { useState } from 'react';
import { IoHelpCircle } from 'react-icons/io5';

const Help = () => {
  // useState hook to manage the state of the button
  const [on, setOn] = useState(false);

  // Function to toggle the state of the button
  const switchOn = () => {
    setOn(!on);
  };

  return (
    <>
      {/* Help button container */}
      <div className="w-10 h-10 relative bg-[#f4f1ed] cursor-pointer">
        {/* Clickable area of the button */}
        <div
          onClick={() => switchOn()}
          className="flex flex-col items-center justify-center"
        >
          {/* Help icon */}
          <IoHelpCircle
            className={on ? 'w-6 h-6 text-[#d03434]' : 'w-6 h-6 text-[#1c1c1c]'}
          />
        </div>
      </div>
    </>
  );
};

export default Help;
