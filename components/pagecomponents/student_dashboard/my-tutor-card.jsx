import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AuthContext } from '../../../context/auth/SessionContext';
import CardDropShadow from '../../common/cards/card-dropshadow';

const TutorCard = ({ title }) => {
  const { locale, locales, push } = useRouter();
  const { user } = useContext(AuthContext);
  console.log('context user is:' + user);
  const [open, setOpen] = useState(false);
  const Menus = ['See Profile', 'Message', 'Join session', 'Review'];
  const [option, setOption] = useState('');
  const router = useRouter();

  const menuRef = useRef();
  const arrowRef = useRef();

  const toMesseges = () => {
    if (user.user.name.length === 1 || user.user.password.length === 1) return;
    const username = user?.user.name;
    const secret = user?.user.password;
    console.log('username' + username + 'password' + secret);
    axios
      .put(
        'https://api.chatengine.io/users/',
        { username, secret },
        { headers: { 'Private-Key': 'ddb24a05-5197-466e-ae42-61d84aee08c0' } }
      )

      .then(() => {
        router.push({
          pathname: '/chat',
          query: { nameCode: username, nameKey: secret },
        });
      });
  };

  const createSession = () => {
    const roomid = 'mnbvcxz';
    router.push({ pathname: '/video_session', query: { name: roomid } });
  };

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
        createSession();
      } else {
        if (String(item) === 'Message') {
          toMesseges();
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
                src="/assets/images/Profile.png"
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
