import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import CardDropShadow from '../../common/cards/card-dropshadow';

const TutorCard = ({ title }) => {
  const { locale, locales, push } = useRouter();
  const [open, setOpen] = useState(false);
  const Menus = ['See Profile', 'Message', 'Join session', 'Review'];
  const [option, setOption] = useState('');

  const menuRef = useRef();
  const arrowRef = useRef();

  const selectOption = (item) => {
    // setOpen(false);
    // push('/tutor_profile');
    // console.log(item);
    // console.log(option);
    setOption(String(item));
    console.log(option);

    if (String(item) === 'See Profile') {
      push('/tutor_profile');
    } else {
      if (String(item) === 'Join session') {
        push('/video_session');
      } else {
        if (String(item) === 'Message') {
          push('/');
        } else {
          if (String(item) === 'Review') {
            push('/user/student/review');
          }
        }
      }
    }
  };
  const itemRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('click', (e) => {
  //     console.log(e.target === menuRef.current);
  //     if (e.target === menuRef.current && e.target === arrowRef.current) {
  //       setOpen(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    window.addEventListener('click', (e) => {
      console.log(e.target === menuRef.current);
      if (
        e.target === menuRef.current &&
        e.target === arrowRef.current &&
        e.target === !arrowRef.current
      ) {
        setOpen(false);
        // console.log(itemRef.current);
      }
    });
  }, []);

  return (
    <>
      <div className="w-56 h-12">
        <CardDropShadow>
          <div
            className="flex flex-row items-center justify-between m-1 cursor-pointer justify-items-center"
            onClick={() => setOpen(!open)}
            ref={arrowRef}
          >
            <div className="flex flex-row items-center justify-center">
              <Image
                width={280}
                height={280}
                src="/assets/images/Profile pic 2.png"
                className="object-cover w-4 h-4 rounded-full sm:h-6 sm:w-6 lg:h-8 lg:w-8"
                alt="Profile picture"
              />
              <h3 className="mt-1 ml-2 text-xs md:text-sm">{title}</h3>
            </div>
            <div className="relative h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 rounded-[2px] bg-[#f4f1ed] hover:bg-[#EDEAE6] mx-4 mt-1 flex justify-center items-center">
              <div>
                <MdKeyboardArrowDown className="w-6 h-6" />
              </div>
              {open && (
                <div
                  ref={menuRef}
                  className="bg-[#f4f1ed] p-2 w-32 absolute -left-8 top-10"
                  style={{ boxShadow: '5px 5px 50px 5px #ebe8e4' }}
                >
                  <ul>
                    {Menus.map((menu) => (
                      <li
                        onClick={() => selectOption(menu)}
                        className="p-2 text-xs cursor-pointer rounded-[2px] hover:bg-[#FFD9D9]"
                        key={menu}
                        ref={itemRef}
                      >
                        {menu}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </CardDropShadow>
      </div>
    </>
  );
};

export default TutorCard;
