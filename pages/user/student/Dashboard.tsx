import RegularButton from '../../../components/common/buttons/primary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import CardFlat from '../../../components/common/cards/card-flat';
import Menu from '../../../components/pagecomponents/student_dashboard/menu';
import TutorCard from '../../../components/pagecomponents/student_dashboard/tutor-card';

import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../../context/auth/SessionContext';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const calluser = () => {
    console.log(JSON.stringify(user));
  };

  return (
    <>
      <div className="w-screen">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-center text-[#1c1c1c] my-4">
            User Dashboard
          </h1>
        </div>
        <div className="flex flex-col w-11/12 mx-auto lg:w-4/5 lg:flex-row justify-items-center">
          <div className="lg:mx-8 lg:w-1/4">
            <div className="w-full lg:w-80 h-80">
              <Menu />
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-3/4">
            <div className="my-8">
              <CardFlat>
                <div className="m-8">
                  <h2 className="text-xl text-left text-[#1c1c1c] my-4">
                    My Tutors
                  </h2>
                  <div className="flex flex-wrap w-auto gap-4 mt-4 mb-8">
                    <TutorCard title={'Alex Mwafungo'} />
                    <TutorCard title={'Alex Mwafungo'} />
                    <TutorCard title={'Alex Mwafungo'} />
                    <TutorCard title={'Alex Mwafungo'} />
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
                    No upcoming lessons. Work with your tutor to schedule a
                    lesson
                  </p>
                </div>
              </CardFlat>
            </div>
            <div className="my-8">
              <CardFlat>
                <div className="grid grid-cols-1 gap-8 m-8">
                  <h2 className="text-xl text-left text-[#1c1c1c] my-4">
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
                      <h3 className="font-medium text-md md:text-lg">
                        Online Algebra needed in Blantyre
                      </h3>
                      <p className="text-xs md:text-sm">
                        Online Algebra needed in BlantyreI am looking for
                        someone to teach me in first year college level algebra.
                        Available during the weekends and after 6 during the
                        week days. My budget is around $20/ MWK20000
                      </p>

                      <div className="grid w-auto grid-cols-1 gap-2 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Language:</span>

                          {/* Place the language the tutor knows  - string  */}
                          <span className=""> Chichewa, Tumbuka</span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Location:</span>

                          {/* Place the tutor's general location - string */}
                          <span className=""> Blantyre, Malawi</span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Subjects:</span>

                          {/* Place the tutor's general location - string */}
                          <span className="">
                            {' '}
                            Biology, Agriculture, Mathematics
                          </span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Gender:</span>

                          {/* Place the tutor's general location - string */}
                          <span className=""> Any</span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Can travel:</span>

                          {/* Check if tutor can travel to student - boolean  */}
                          <span className=""> No</span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">
                            Teaches at students home:
                          </span>

                          {/* Check if tutor can teach the student at his house - boolean  */}
                          <span className=""> No</span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Homework Help:</span>

                          {/* Check if tutor help the student with homework - boolean  */}
                          <span className=""> Yes</span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Teaches online:</span>

                          {/* Check if the tutor can also teach online- boolean  */}
                          <span className=""> Yes</span>
                        </p>
                        <p className="text-xs md:text-sm text-left text-[#1c1c1c]">
                          <span className="font-bold">Price range:</span>

                          {/* Place the minimum and maximum amount the tutor asks for - number  */}
                          <span className=""> MWK8000 - MWK10000</span>
                        </p>
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
                          Related Tutors
                        </h3>
                        <div className="grid w-auto grid-cols-1 gap-4 mt-4 mb-8 sm:grid-cols-2 md:grid-cols-3">
                          <TutorCard title={'Alex Mwafungo'} />
                        </div>
                      </div>
                    </div>
                  </CardDropShadow>
                </div>
              </CardFlat>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
