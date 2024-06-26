/**
 * Footer component for the menu.
 * Renders a menu with various options and a logout button.
 */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { IoNotifications } from 'react-icons/io5';
import { MdAccountCircle, MdDashboard, MdOutlinePayment } from 'react-icons/md';
import SecondaryButton from '../../../components/common/buttons/secondary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import { AuthContext } from '../../../context/auth/SessionContext';

/**
 * Menu component.
 * Renders the menu options and handles user logout.
 */
/**
 * Footer component for the menu.
 * @module Menu
 * @returns {JSX.Element} Menu component
 */
const Menu = () => {
  // Get the logout function from the AuthContext
  const { logout } = useContext(AuthContext);
  // Get the user object from the AuthContext
  const { user } = useContext(AuthContext);
  const router = useRouter();

  /**
   * Handles the user logout process.
   * It redirects to the home page and logs out the user after a delay.
   */
  const userLogout = () => {
    try {
      router.push('/');
      setTimeout(logout(), 3000);
    } catch (error) {
      console.log('error logging out' + error);
    }
    console.log(JSON.stringify(user));

    if (user) {
      console.log(user.user.name);
    } else {
      console.log('no user');
    }
  };

  return (
    <>
      {/* Footer Card */}
      <CardDropShadow>
        <div className="m-8">
          <h1 className="text-xl">Welcome, {user.user.name}</h1>
          {/* Horizontal Divider */}
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
          {/* Dashboard Menu Item */}
          <div className="flex flex-row items-center my-2">
            <MdDashboard className="fill-[#1c1c1c] w-4 h-4 ml-2 mr-6" />
            <Link href="/user/student/Dashboard">
              <h2 className="text-lg text-left text-[#1c1c1c]">Dashboard</h2>
            </Link>
          </div>
          {/* Horizontal Divider */}
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
          {/* Notifications Menu Item */}
          <div className="flex flex-row items-center my-2">
            <IoNotifications className="fill-[#1c1c1c] w-4 h-4 ml-2 mr-6" />
            <Link href="/user/student/notifications">
              <h2 className="text-lg text-left text-[#1c1c1c]">
                Notifications
              </h2>
            </Link>
          </div>
          {/* Horizontal Divider */}
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
          {/* Account Settings Menu Item */}
          <div className="flex flex-row items-center my-2">
            <MdAccountCircle className="fill-[#1c1c1c] w-4 h-4 ml-2 mr-6" />
            <Link href="/user/student/account_settings">
              <h2 className="text-lg text-left text-[#1c1c1c]">
                Account Settings
              </h2>
            </Link>
          </div>
          {/* Horizontal Divider */}
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
          {/* Payment Settings Menu Item */}
          <div className="flex flex-row items-center my-2">
            <MdOutlinePayment className="fill-[#1c1c1c] w-4 h-4 ml-2 mr-6" />
            <Link href="/user/student/payment_settings">
              <h2 className="text-lg text-left text-[#1c1c1c]">
                Payment Settings
              </h2>
            </Link>
          </div>
          {/* Horizontal Divider */}
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
          {/* Logout Button */}
          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <div onClick={userLogout}>
                <SecondaryButton name={'LOG OUT'} />
              </div>
            </div>
          </div>
        </div>
      </CardDropShadow>
    </>
  );
};

export default Menu;
