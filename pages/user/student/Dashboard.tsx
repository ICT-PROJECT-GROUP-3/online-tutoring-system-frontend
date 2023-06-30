import Link from 'next/link';
import { useContext } from 'react';
import { BiMaleFemale } from 'react-icons/bi';
import { FaBook, FaMoneyBill, FaWalking } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { HiPencilSquare } from 'react-icons/hi2';
import { IoLanguage, IoTrashBin } from 'react-icons/io5';
import { MdLocationPin, MdSignalCellular3Bar } from 'react-icons/md';
import RegularButton from '../../../components/common/buttons/primary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import CardFlat from '../../../components/common/cards/card-flat';
import InterestedTutorCard from '../../../components/pagecomponents/student_dashboard/interested-tutor-card';
import TutorCard from '../../../components/pagecomponents/student_dashboard/my-tutor-card';
import { AuthContext } from '../../../context/auth/SessionContext';
import Layout from './layout';

const Dashboard = () => {
  // const [student, setStudent] = useState([]);
  const { student } = useContext(AuthContext);
  const tutors = student[0].tutorName;
  // const tut = tutors.split(', ');
  console.log('The tutors of this student are' + student);
  return (
    <>
      <Layout>
        <div className="my-8">
          <div className="my-8">
            <h1 className="text-xl sm:text-2xl lg:text-4xl text-center text-[#1c1c1c] my-4">
              User Dashboard
            </h1>
          </div>
          <CardFlat>
            <div className="m-8">
              <h2 className="text-lg sm:text-xl md:text-2xl text-left text-[#1c1c1c] my-4">
                My Tutors
              </h2>
              <div className="flex flex-wrap w-auto gap-4 mt-4 mb-8">
                {tutors?.map((t) => (
                  <TutorCard key={t} title={t} />
                ))}
                {/* <TutorCard title={tutors} /> */}
              </div>
            </div>
          </CardFlat>
        </div>
        <div className="my-8">
          <CardFlat>
            <div className="m-8">
              <h2 className="text-lg sm:text-xl md:text-2xl text-left text-[#1c1c1c] my-4">
                Scheduled Lessons
              </h2>
              <p className="font-extralight text-sm md:text-md text-[#1c1c1c]/2 ">
                No upcoming lessons. Work with your tutor to schedule a lesson
              </p>
            </div>
          </CardFlat>
        </div>
        <div className="my-8">
          <CardFlat>
            <div className="grid grid-cols-1 gap-8 m-8">
              <h2 className="text-lg sm:text-xl md:text-2xl text-left text-[#1c1c1c] my-4">
                Requirements
              </h2>
              <div className="md:flex md:items-center">
                <div className="md:w-full">
                  <Link href="/user/student/requirements">
                    <RegularButton name={'Post your study needs'} />
                  </Link>
                </div>
              </div>
              <CardDropShadow>
                <div className="m-4 md:m-8">
                  <span className="flex justify-between mb-2">
                    <h3 className="font-medium text-md md:text-lg">
                      Online Algebra needed in Blantyre
                    </h3>
                    <span className="flex">
                      <IoTrashBin className="fill-[#d03434] w-4 h-4 mt-[3px] mr-2" />
                      <p className="text-[#d03434] text-md">Delete</p>
                    </span>
                  </span>
                  <p className="text-xs md:text-sm">
                    Online Algebra needed in BlantyreI am looking for someone to
                    teach me in first year college level algebra. Available
                    during the weekends and after 6 during the week days. My
                    budget is around $20/ MWK20000
                  </p>

                  <div className="grid w-auto grid-cols-1 gap-2 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3">
                    <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
                      <IoLanguage className="fill-[#1c1c1c] w-4 h-4 mr-2" />
                      <span className="font-bold">Language:&nbsp;</span>

                      {/* Place the language the tutor knows  - string  */}
                      <span className=""> Chichewa, Tumbuka</span>
                    </div>
                    <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
                      <MdLocationPin className="fill-[#1c1c1c] w-4 h-4 mr-2" />
                      <span className="font-bold">Location:&nbsp;</span>

                      {/* Place the tutor's general location - string */}
                      <span className=""> Blantyre, Malawi</span>
                    </div>
                    <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
                      <FaBook className="fill-[#1c1c1c] w-4 h-4 mr-2" />
                      <span className="font-bold">Subjects:&nbsp;</span>

                      {/* Place the tutor's general location - string */}
                      <span className="">
                        Biology, Agriculture, Mathematics
                      </span>
                    </div>
                    <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
                      <BiMaleFemale className="fill-[#1c1c1c] w-4 h-4 mr-2" />
                      <span className="font-bold">Gender:&nbsp;</span>

                      {/* Place the tutor's general location - string */}
                      <span className=""> Any</span>
                    </div>
                    <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
                      <FaWalking className="fill-[#1c1c1c] w-4 h-4 mr-2" />
                      <span className="font-bold">Can travel:&nbsp;</span>

                      {/* Check if tutor can travel to student - boolean  */}
                      <span className=""> No</span>
                    </div>
                    <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
                      <HiHome className="fill-[#1c1c1c] w-4 h-4 mr-2" />
                      <span className="font-bold">
                        Teaches at students home:&nbsp;
                      </span>

                      {/* Check if tutor can teach the student at his house - boolean  */}
                      <span className=""> No</span>
                    </div>
                    <div className="text-xs md:text-sm text-left text-[#1c1c1c] flex">
                      <HiPencilSquare className="fill-[#1c1c1c] w-4 h-4 mr-2" />
                      <span className="font-bold">Homework Help:&nbsp;</span>

                      {/* Check if tutor help the student with homework - boolean  */}
                      <span className=""> Yes</span>
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
                      <span className=""> MWK8000 - MWK10000</span>
                    </div>
                  </div>
                  <svg
                    width={1083}
                    height={1}
                    className="w-full my-8"
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
                  <div className="">
                    <h3 className="text-lg text-left text-[#1c1c1c] my-4">
                      Interested Tutors
                    </h3>
                    <div className="grid w-auto grid-cols-1 gap-4 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3">
                      <InterestedTutorCard title={'Alex Mwafungo'} />
                    </div>
                  </div>
                </div>
              </CardDropShadow>
            </div>
          </CardFlat>
        </div>
      </Layout>
    </>
  );
};

export default Dashboard;
