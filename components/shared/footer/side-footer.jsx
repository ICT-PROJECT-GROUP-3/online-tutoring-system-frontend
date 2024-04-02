import Image from 'next/image';
import Link from 'next/link';

/**
 * Footer component for the side footer.
 */
const SideFooter = () => {
  /**
   * Array of links for the footer.
   *
   * @type {Array<{ label: string, url: string }>}
   */
  const links = [
    { label: 'Home', url: 'https://flowbite.com/' },
    { label: 'Sign In', url: 'https://tailwindcss.com/' },
    { label: 'Support', url: 'https://flowbite.com/' },
    { label: 'About Us', url: 'https://tailwindcss.com/' },
    { label: 'Become a Tutor', url: 'https://flowbite.com/' },
    { label: 'Find a Tutor', url: 'https://tailwindcss.com/' },
    { label: 'Privacy Policy', url: 'https://flowbite.com/' },
    { label: 'Terms and conditions', url: 'https://tailwindcss.com/' },
  ];

  return (
    <>
      {/* Horizontal line separator */}
      <div className="w-4/5">
        <svg
          width={273}
          height={2}
          viewBox="0 0 273 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full my-4"
          preserveAspectRatio="none"
        >
          <line
            x1="-0.000976562"
            y1="1.25"
            x2={273}
            y2="1.25"
            stroke="#DAD5CE"
          />
        </svg>
        {/* Links section */}
        <div className="">
          <ul className="flex flex-wrap my-2 text-xs font-medium text-gray-500 dark:text-gray-300">
            {links.map((link) => (
              <li key={link.label} className="m-1">
                {/* Link to external URLs */}
                <Link href={link.url} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Footer information */}
        <div className="flex lg:flex-1">
          <div>
            <span className="flex flex-row text-xs font-bold text-gray-500">
              {/* Copyright and logo */}
              Copyright © 2023{' '}
              <Image
                className="w-auto h-4 mr-1"
                src="/assets/images/Logo.png"
                alt=""
                width={170}
                height={100}
              />
              {/* Link to homepage */}
              <Link href="/" className="hover:underline">
                Mphunzitsi™{' '}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideFooter;
