import { useState } from 'react';
import { IoHelpCircle } from 'react-icons/io5';

const Help = () => {
  const [on, setOn] = useState(false);

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
          <IoHelpCircle
            className={on ? 'w-6 h-6 text-[#d03434]' : 'w-6 h-6 text-[#1c1c1c]'}
          />
        </div>
      </div>
    </>
  );
};

export default Help;
