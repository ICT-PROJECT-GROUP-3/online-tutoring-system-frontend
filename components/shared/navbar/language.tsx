import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Language = () => {
  // State for managing the open/closed state of the language menu
  const [open, setOpen] = useState(false);
  // State for storing the selected language
  const [language, setLanguage] = useState('');

  // Refs for the language menu and arrow icons
  const menuRef = useRef();
  const arrowRef = useRef();

  // Get the locale and locales from the Next.js router
  const { locale, locales, push } = useRouter();
  console.log(locale);

  // Handler function for changing the language
  const handleClick = (l) => () => {
    push(`/`, undefined, { locale: l });
  };

  return (
    <>
      {/* Language button */}
      <div className="w-10 h-10 relative bg-[#f4f1ed] hover:bg-[#EDEAE6]">
        <div
          onClick={() => setOpen(!open)}
          ref={arrowRef}
          className="flex flex-col items-center justify-center"
        >
          {/* Language icon */}
          <IoLanguage className="w-6 h-6 mb-1" />
          {/* Arrow icon */}
          <MdKeyboardArrowDown className="w-2 h-2" />
        </div>
        {/* Language menu */}
        {open && (
          <div
            ref={menuRef}
            className="bg-[#f4f1ed] p-2 w-32 absolute -left-10 top-14"
            style={{ boxShadow: '5px 5px 50px 5px #ebe8e4' }}
          >
            <ul>
              {/* Render each available language */}
              {locales.map((l) => (
                <li
                  onClick={handleClick(l)}
                  className="p-2 text-xs cursor-pointer rounded-[2px] hover:bg-[#FFD9D9]"
                  key={l}
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Language;
