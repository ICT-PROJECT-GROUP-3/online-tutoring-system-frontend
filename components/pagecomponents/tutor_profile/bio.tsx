import { BiMaleFemale } from 'react-icons/bi';
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaMoneyBill,
  FaWalking,
} from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { HiPencilSquare } from 'react-icons/hi2';
import { IoLanguage } from 'react-icons/io5';
import { MdLocationPin, MdSignalCellular3Bar } from 'react-icons/md';

interface TutorBioProps {
  languages: string[];
  location: string;
  price: number;
  subjects: string;
  education_qualifications: string[];
  homework_help: string;
  can_travel: boolean;
  area_of_expertise?: {
    title: string;
  }[];
  last_login: Date;
  total_teaching_experience: number;
  registration_date: Date;
}

const TutorsBio: React.FC<TutorBioProps> = ({
  languages,
  location,
  price,
  subjects,
  education_qualifications,
  homework_help,
  area_of_expertise,
  can_travel,
  total_teaching_experience,
}) => {
  return (
    <>
      <div className="flex flex-col w-full py-4 mr-auto justify-evenly">
        <div className="flex">
          <FaGraduationCap className="fill-[#1c1c1c] w-10 h-10 mr-2" />
          <h2 className="text-[32px] font-semibold text-left text-[#1c1c1c]">
            About Tutor
          </h2>
        </div>
        <div className="my-4">
          <div className="flex flex-col justify-evenly">
            <h3 className="text-2xl font-bold text-left text-black">Bio</h3>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 mb-8 md:grid-cols-3">
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <IoLanguage className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Language:&nbsp;</span>

            {/* Place the language the tutor knows  - string  */}
            <span className="">{languages}</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <MdLocationPin className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Location:&nbsp;</span>

            {/* Place the tutor's general location - string */}
            <span className="">{location}</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <FaWalking className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Can travel:&nbsp;</span>

            {/* Check if tutor can travel to student - boolean  */}
            <span className="">{can_travel}</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <HiHome className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Teaches at students home:&nbsp;</span>

            {/* Check if tutor can teach the student at his house - boolean  */}
            <span className=""> No</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <HiPencilSquare className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Homework Help:&nbsp;</span>

            {/* Check if tutor help the student with homework - boolean  */}
            <span className="">{homework_help}</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <FaChalkboardTeacher className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Total Teaching exp:&nbsp;</span>

            {/* Total teaching experience - number  */}
            <span className="">{total_teaching_experience} yrs</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <BiMaleFemale className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Gender:&nbsp;</span>

            {/* Place when they last logged in - date  */}
            <span className="">Gender</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <MdSignalCellular3Bar className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Teaches online:&nbsp;</span>

            {/* Check if the tutor can also teach online- boolean  */}
            <span className=""> Yes</span>
          </div>
          <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
            <FaMoneyBill className="fill-[#1c1c1c] w-4 h-4 mr-2" />
            <span className="font-bold">Price range:&nbsp;</span>

            {/* Place the minimum and maximum amount the tutor asks for - number  */}
            <span className="">MWK{price}/hr</span>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-2xl font-bold text-left text-black">
            Subjects taught
          </p>

          {/* Place the subjects the tutor know's and their level - list  */}
          <ul className="mx-6 text-xl text-left text-[#1c1c1c] list-disc">
            {Array.isArray(subjects) &&
              subjects.map((subject) => <li key={subject._key}>{subject}</li>)}
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-left text-black">Education</h3>

          {/* Place the level of the tutor's education, the level and year of study- list  */}
          <p className="mx-6 text-xl text-justify text-[#1c1c1c] list-disc">
            {education_qualifications}
          </p>
        </div>
        <div className="mb-8">
          <p className="text-2xl font-bold text-justify text-black">
            Experience
          </p>

          {/* Place the level of the tutor's experiences, the level and duration stayed- list  */}
          <ul className="mx-6 text-xl text-justify text-black list-disc">
            {Array.isArray(area_of_expertise) &&
              area_of_expertise.map((area) => (
                <li key={area.title}>{area.title}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TutorsBio;
