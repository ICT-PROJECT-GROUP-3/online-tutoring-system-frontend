import Link from 'next/link';
import { useContext } from 'react';
import RegularButton from '../../../components/common/buttons/primary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';
import CardFlat from '../../../components/common/cards/card-flat';
import InterestedTutorCard from '../../../components/pagecomponents/student_dashboard/interested-tutor-card';
import TutorCard from '../../../components/pagecomponents/student_dashboard/my-tutor-card';
import { AuthContext } from '../../../context/auth/SessionContext';
import Layout from './layout';

const Dashboard = () => {
  const { student } = useContext(AuthContext);
  const tutors = student[0]?.tutorName || [''];

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
                  {/* ... */}
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
