import Image from 'next/image';
import Link from 'next/link';
import RegularButton from '../../common/buttons/primary-button';
import CardDropShadow from '../../common/cards/card-dropshadow';

const MainFooter = ({ children }) => {
  const sections = [
    {
      title: 'Browse',
      links: [
        { label: 'Home', url: 'https://flowbite.com/' },
        { label: 'Sign In', url: 'https://tailwindcss.com/' },
        { label: 'Support', url: 'https://tailwindcss.com/' },
        { label: 'About Us', url: 'https://tailwindcss.com/' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Find Tutor', url: 'https://flowbite.com/' },
        { label: 'Become Tutor', url: 'https://tailwindcss.com/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', url: '#' },
        { label: 'Terms & Conditions', url: '#' },
      ],
    },
  ];

  return (
    <div className="flex flex-col w-screen h-screen">
      {children}
      <footer className="w-screen h-[488px] m-0 mt-auto inset-x-0 bottom-0 sm:h-[368px] bg-[#f4f3f2] flex flex-col justify-end">
        <div className="flex flex-col -space-y-[488px] sm:-space-y-[368px] items-end justify-end justify-items-end">
          <Image
            className="w-screen sm:w-1/3 h-[440px] sm:h-80"
            src="/assets/images/Rectangle 29.png"
            alt=""
            width={170}
            height={100}
          />
          <div>
            <div className="h-4"></div>
            <div className="w-screen h-[440px] sm:h-80 opacity-80 bg-gradient-to-b from-[#f4f3f2] to-[#eee9e2]">
              <div className="flex flex-col items-center justify-center mb-8 -space-y-12 justify-items-center">
                <div
                  className="w-2/3 h-8 rounded-bl-[100px] rounded-br-[50px] bg-[#f4f3f2]"
                  style={{ boxShadow: '0px 20px 50px 0 #e5e5e5' }}
                ></div>
                <div className="w-screen h-8 bg-[#f4f3f2]"></div>
              </div>
              <div className="flex flex-col justify-between mx-8 my-12 sm:mx-40 sm:flex-row">
                <div className="flex flex-col w-auto mb-4 sm:mb-0 sm:items-center sm:content-center sm:justify-center sm:mr-16 sm:w-1/5">
                  <div className="flex flex-row sm:items-center sm:content-center sm:justify-center sm:flex-col">
                    <Image
                      className="w-8 h-9 sm:w-24 sm:h-[108px]"
                      src="/assets/images/Logo.png"
                      alt=""
                      width={170}
                      height={100}
                    />
                    <h1 className="text-xl sm:text-3xl font-medium sm:text-center text-[#f4ab4e]">
                      Mphunzitsi
                    </h1>
                  </div>
                  <p className="text-xs font-medium sm:text-center text-[#5c5b5b]">
                    An Online Tutoring Platform that aims to provide a service
                    connect students with teachers, matching them together
                    accordingly and providing a channel for interaction.
                  </p>
                </div>
                <svg
                  width={2}
                  height={256}
                  viewBox="0 0 2 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden h-56 opacity-50 sm:block"
                  preserveAspectRatio="none"
                >
                  <line
                    opacity="0.5"
                    x1={1}
                    y1="-4.37114e-8"
                    x2="1.00001"
                    y2={256}
                    stroke="#0D0C07"
                    stroke-opacity="0.25"
                    stroke-width={2}
                  />
                </svg>
                <div className="grid grid-cols-3 gap-4 mb-4 sm:mb-0 sm:mx-16 sm:gap-16">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <h2 className="mb-2 text-sm font-semibold text-gray-900 capitalize sm:mb-6 dark:text-white">
                        {section.title}
                      </h2>
                      <ul className="text-xs font-light text-gray-600 dark:text-gray-300">
                        {section.links.map((link) => (
                          <li key={link.label} className="mb-1 sm:mb-4">
                            <Link href={link.url} className="hover:underline">
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div>
                  <h2 className="mb-2 text-sm font-semibold text-gray-900 capitalize sm:mb-4 dark:text-white">
                    Contacts
                  </h2>
                  <CardDropShadow>
                    <div className="flex flex-col w-64 max-w-xl min-w-0 mx-2 my-4 sm:w-96">
                      <p className="text-sm font-bold text-left text-[#5c5c5b]">
                        Subscribe to our Newsletter{' '}
                      </p>
                      <div className="flex max-w-xl gap-x-4">
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="w-48 border-[1px] border-solid border-[#EAE8E4] sm:w-96 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                          placeholder="Enter your email"
                        />
                        <RegularButton name="Subscribe" />
                      </div>
                    </div>
                  </CardDropShadow>
                </div>
              </div>
            </div>
            <div className="w-screen h-8 opacity-80 bg-[#f4f3f2] px-8 sm:px-32 flex flex-col justify-center">
              <span className="flex flex-row text-xs font-bold text-gray-500">
                Copyright © 2023{' '}
                <Image
                  className="w-auto h-4 mr-1"
                  src="/assets/images/Logo.png"
                  alt=""
                  width={170}
                  height={100}
                />
                <Link href="/" className="hover:underline">
                  Mphunzitsi™{' '}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainFooter;
