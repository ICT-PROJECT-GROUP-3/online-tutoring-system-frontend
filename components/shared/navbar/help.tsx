// This component represents a Help button that can be toggled on and off.

import { useState } from 'react';
import { IoHelpCircle } from 'react-icons/io5';

/**
 * Help component for the footer.
 * @returns {JSX.Element} The rendered Help component.
 */
const Help = () => {
  const [on, setOn] = useState(false);

  /**
   * Toggle the on state.
   */
  const switchOn = () => {
    setOn(!on);
  };

  return (
    <>
      <div className="w-10 h-10 relative bg-[#f4f1ed] cursor-pointer">
        <div
          onClick={() => switchOn()}
          className="flex flex-col items-center justify-center"
        >
          {/* Help icon with dynamic styles based on the on state */}
          <IoHelpCircle
            className={on ? 'w-6 h-6 text-[#d03434]' : 'w-6 h-6 text-[#1c1c1c]'}
          />
        </div>
      </div>
    </>
  );
};

export default Help;
