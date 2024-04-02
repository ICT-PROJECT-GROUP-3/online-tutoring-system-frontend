/**
 * @module components
 */

import Image from 'next/image';
import Link from 'next/link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CardDropShadow from '../../common/cards/card-dropshadow';

/**
 * Renders a card component displaying information about an interested tutor.
 *
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the tutor.
 * @returns {JSX.Element} The rendered InterestedTutorCard component.
 */
const InterestedTutorCard = ({ title }) => {
  return (
    <>
      <div className="w-56 h-12">
        <Link href={'/tutor_profile/'}>
          <CardDropShadow>
            <div className="flex flex-row items-center justify-between m-1 justify-items-center">
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
                  <MdKeyboardArrowRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </CardDropShadow>
        </Link>
      </div>
    </>
  );
};

export default InterestedTutorCard;
