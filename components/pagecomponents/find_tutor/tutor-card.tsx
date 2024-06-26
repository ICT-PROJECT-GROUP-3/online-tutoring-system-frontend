import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';
import { IoLanguage, IoLocationSharp } from 'react-icons/io5';
import { TbClockFilled } from 'react-icons/tb';
import CardDropShadow from '../../common/cards/card-dropshadow';

/**
 * Props for TutorCard component.
 */
interface TutorCardProps {
  name: string;
  rating: string;
  slug: {
    _type: string;
    current: string;
  };
  bio?: {
    _key: string;
    children: { text: string }[];
  }[];
  languages: string[];
  location: string;
  price: number;
  subjects: string;
  area_of_expertise?: string[];
  total_teaching_experience: number;
}

/**
 * TutorCard component.
 *
 * @param {TutorCardProps} props - The props for the TutorCard component.
 * @returns {JSX.Element} The rendered TutorCard component.
 */
const TutorCard: React.FC<TutorCardProps> = ({
  name,
  bio,
  slug,
  rating,
  languages,
  location,
  price,
  area_of_expertise,
  total_teaching_experience,
}) => {
  return (
    <>
      <div className="">
        <CardDropShadow>
          <div className="flex flex-row w-[1024px] h-56">
            {/* Place tutor's profile pic */}
            <Image
              width={280}
              height={280}
              src="/assets/images/Profile.png"
              className="object-cover w-56 h-56 rounded-2"
              alt="Profile picture"
            />

            <div className="w-3/5 px-4 py-1">
              {/* Place link to the tutor's profile */}
              <Link href={`/tutor_profile/${slug?.current}`}>
                <h1 className="text-xl overflow-hidden h-8 font-semibold text-left mb-2 text-[#1c1c1c] hover:underline">
                  {/* Place tutor's name */}
                  {name}
                </h1>
              </Link>
              {/* Place a shortened version of the tutor's bio */}
              <p className="text-md text-left mb-2 text-[#1c1c1c] overflow-hidden text-ellipsis h-[124px]">
                {Array.isArray(bio) &&
                  bio.map((block) => (
                    <p key={block._key}>
                      {block.children &&
                        block.children.map((span) => span.text).join('')}
                    </p>
                  ))}
              </p>

              {/* Place the subjects the tutor teaches */}
              {/* The red denotes the link to search by that subject */}
              <ul className="flex flex-wrap my-2 text-md font-medium text-[#d03434] items-center">
                <li key={0} className="text-[#1c1c1c]">
                  |&nbsp;
                </li>
                {area_of_expertise &&
                  area_of_expertise.map((area) => (
                    <li key={area} className="m-1">
                      <Link href="/" className="flex flex-row hover:underline">
                        {area}
                        <p className="text-[#1c1c1c]">&nbsp;|&nbsp;</p>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <svg
                width={1}
                height={200}
                viewBox="0 0 1 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className="h-36"
              >
                <line x1="0.5" x2="0.5" y2={200} stroke="#DAD5CE" />
              </svg>
            </div>
            <div className="flex flex-col justify-center w-auto mx-4 my-auto h-4/5">
              <div className="flex flex-row my-1">
                <div className="mr-2">
                  <IoLocationSharp />
                </div>
                {/* Place the longest distance tutor can travel */}
                <p className="text-sm text-left text-[#1c1c1c]">{location}</p>
              </div>
              <div className="flex flex-row my-1">
                <div className="mr-2">
                  <FaMoneyBill />
                </div>
                {/* Place the minimum and maximum amount the tutor asks for */}
                <p className="text-sm text-left text-[#1c1c1c]">K{price}/hr</p>
              </div>
              <div className="flex flex-row my-1">
                <div className="mr-2">
                  <TbClockFilled />
                </div>
                {/* Total teaching experience */}
                <p className="text-sm text-left text-[#1c1c1c]">
                  {total_teaching_experience}yrs
                </p>
              </div>
              <div className="flex flex-row my-1">
                <div className="mr-2">
                  <IoLanguage />
                </div>
                {/* Place the language the tutor knows */}
                <ul className="flex flex-wrap text-left text-sm text-[#1c1c1c]">
                  {languages ? languages.join(', ') : 'No languages specified'}
                </ul>
              </div>
            </div>
          </div>
        </CardDropShadow>
      </div>
    </>
  );
};

export default TutorCard;
