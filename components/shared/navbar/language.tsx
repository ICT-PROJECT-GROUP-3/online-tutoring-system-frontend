import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { IoLanguage } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Language = () => {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState('');
  //   const Menus = ['English', 'Chichewa'];

  const menuRef = useRef();
  const arrowRef = useRef();

  const { locale, locales, push } = useRouter();
  console.log(locale);

  const handleClick = (l) => () => {
    push(`/`, undefined, { locale: l });
  };

  const check = (l) => {
    if (String(l) === 'en') {
      setLanguage('English');
      return language;
    } else {
      if (String(l) === 'fr') {
        setLanguage('French');
        return language;
      } else {
        setLanguage('Chichewa');
        return language;
      }
    }
  };
  return (
    <>
      <div className="w-10 h-10 relative bg-[#f4f1ed] hover:bg-[#EDEAE6]">
        <div
          onClick={() => setOpen(!open)}
          ref={arrowRef}
          className="flex flex-col items-center justify-center"
        >
          <IoLanguage className="w-6 h-6 mb-1" />
          <MdKeyboardArrowDown className="w-2 h-2" />
        </div>
        {open && (
          <div
            ref={menuRef}
            className="bg-[#f4f1ed] p-2 w-32 absolute -left-10 top-14"
            style={{ boxShadow: '5px 5px 50px 5px #ebe8e4' }}
          >
            <ul>
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
