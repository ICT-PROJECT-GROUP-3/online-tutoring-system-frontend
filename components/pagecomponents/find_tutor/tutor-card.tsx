import Image from 'next/image';
import Link from 'next/link';
import { FaMoneyBill } from 'react-icons/fa';
import { IoLanguage, IoLocationSharp } from 'react-icons/io5';
import { TbClockFilled } from 'react-icons/tb';
import CardDropShadow from '../../common/cards/card-dropshadow';

const TutorCard = (props) => {
  return (
    <>
      <div className="max-w-6xl ">
        <CardDropShadow>
          <div className="flex flex-row">
            {/* Place tutor's profile pic - image*/}
            <Image
              width={280}
              height={280}
              src={props.data.pic}
              className="object-cover w-56 h-56 rounded-2"
              alt="Profile picture"
            />

            <div className="w-3/5 px-4 py-1">
              {/* Place link to the tutor's profile */}
              <Link href={props.data.name}>
                <h1 className="text-4xl text-left mb-2 text-[#1c1c1c] hover:underline">
                  {/* Place tutor's name - string */}
                  {props.data.name}
                </h1>
              </Link>
              {/* Place a shorten version of the tutor's bio  - string */}
              <p className=" text-md text-left mb-4 text-[#1c1c1c]">
                {props.data.bio}
              </p>

              {/* Place the subjects the tutor teaches - list,string */}
              {/* The red denotes the link to search by that subject */}
              <ul className="flex flex-wrap my-2 text-md font-medium text-[#d03434] items-center">
                <li key={0} className="text-[#1c1c1c]">
                  |&nbsp;
                </li>
                {props.data.subjects.map((subject) => (
                  <li key={subject.label} className="m-1">
                    <Link
                      href={subject.url}
                      className="flex flex-row hover:underline"
                    >
                      {subject.label}
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
                {/* Place the longest distance tutor can travel - number*/}
                <p className="text-sm text-left text-[#1c1c1c]">
                  {props.data.location}
                </p>
              </div>
              <div className="flex flex-row my-1">
                <div className="mr-2">
                  <FaMoneyBill />
                </div>
                {/* Place the minimum and maximum amount the tutor asks for - number  */}
                <p className="text-sm text-left text-[#1c1c1c]">
                  K{props.data.amount}/hr
                </p>
              </div>
              <div className="flex flex-row my-1">
                <div className="mr-2">
                  <TbClockFilled />
                </div>
                {/* Total teaching experience - number  */}
                <p className="text-sm text-left text-[#1c1c1c]">
                  {props.data.experience}yrs
                </p>
              </div>
              <div className="flex flex-row my-1">
                <div className="mr-2">
                  <IoLanguage />
                </div>
                {/* Place the language the tutor knows  - string  */}
                <ul className="flex flex-wrap text-left text-sm text-[#1c1c1c]">
                  {props.data.language.map((lang) => (
                    <li key={lang.title} className="m-1">
                      {lang.title}
                    </li>
                  ))}
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
