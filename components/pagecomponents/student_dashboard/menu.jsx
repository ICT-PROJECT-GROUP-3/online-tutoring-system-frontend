import Link from 'next/link';
import { useContext } from 'react';
import { BiMaleFemale } from 'react-icons/bi';
import SecondaryButton from '../../../components/common/buttons/secondary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import { AuthContext } from '../../../context/auth/SessionContext';

const Menu = () => {
  const { logout } = useContext(AuthContext);

  const userLogout = () => {
    try {
      logout();
    } catch (error) {
      console.log('error logging out' + error);
    }
    console.log(JSON.stringify(user));
  };
  return (
    <>
      <CardDropShadow>
        <div className="m-8">
          <h1 className="text-xl">Welcome, Yebs</h1>
          <svg
            width={1083}
            height={1}
            className="w-full mt-6 mb-4"
            viewBox="0 0 1083 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line
              x1="-4.37114e-8"
              y1="0.5"
              x2={1083}
              y2="0.499905"
              stroke="#DAD5CE"
            />
          </svg>
          <div className="flex flex-row items-center my-2">
            <BiMaleFemale className="fill-[#1c1c1c] w-4 h-4 ml-2 mr-6" />
            <h2 className="text-lg text-left text-[#1c1c1c]">Notifications</h2>
          </div>
          <svg
            width={1083}
            height={1}
            className="w-full my-4"
            viewBox="0 0 1083 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line
              x1="-4.37114e-8"
              y1="0.5"
              x2={1083}
              y2="0.499905"
              stroke="#DAD5CE"
            />
          </svg>
          <div className="flex flex-row items-center my-2">
            <BiMaleFemale className="fill-[#1c1c1c] w-4 h-4 ml-2 mr-6" />
            <Link href="/user/student/account_settings">
              <h2 className="text-lg text-left text-[#1c1c1c]">
                Account Settings
              </h2>
            </Link>
          </div>
          <svg
            width={1083}
            height={1}
            className="w-full mt-4 mb-6"
            viewBox="0 0 1083 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <line
              x1="-4.37114e-8"
              y1="0.5"
              x2={1083}
              y2="0.499905"
              stroke="#DAD5CE"
            />
          </svg>
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <button onClick={userLogout}>
                <SecondaryButton name={'LOG OUT'} />
              </button>
            </div>
          </div>
        </div>
      </CardDropShadow>
    </>
  );
};

export default Menu;
