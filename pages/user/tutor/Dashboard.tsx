import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import TutorSideNav from '../../../components/pagecomponents/user/tutor/TutorSideNav';
import TutorDashboard from '../../../components/pagecomponents/user/tutor/pages/TutorDashboard';
import TutorPayments from '../../../components/pagecomponents/user/tutor/pages/TutorPayments';
import TutorProfileDashboard from '../../../components/pagecomponents/user/tutor/pages/TutorProfileDashboard';
import TutorSessions from '../../../components/pagecomponents/user/tutor/pages/TutorSessions';
import TutorSupport from '../../../components/pagecomponents/user/tutor/pages/TutorSupport';
import { AuthContext } from '../../../context/auth/SessionContext';

const Dashboard = () => {
  const router = useRouter();
  const { user, logout, tutor } = useContext(AuthContext);
  // const { tutor } = useContext(AuthContext);
  const id = tutor?._id;
  // console.log('THE TUTOR ID FROM SESSION IS: ' + id);
  // console.log('THE TUTOR ID FROM SESSION IS:' + data);

  const handleLogout = async () => {
    logout;
    router.push('/Auth');
  };

  const [activeComponent, setActiveComponent] = useState<string>('');

  const handleSidebarClick = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const students = [];
  // const students = JSON.stringify(response);
  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <TutorDashboard />;
      case 'Profile':
        return <TutorProfileDashboard />;
      case 'Session':
        return <TutorSessions />;
      case 'Support':
        return <TutorSupport />;
      case 'Payment':
        return <TutorPayments />;
      // case 'component6':
      //   return <Component6 />;
      default:
        return <TutorDashboard />;
    }
  };

  return (
    <div>
      <TutorSideNav onSidebarClick={handleSidebarClick} />
      <div className="w-screen screen">{renderComponent()}</div>
      {/* <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-screen py-5 pt-5 mx-4 sm:pt-0 sm:mx-2 mt-20">
        <div className='w-3/5 bg-white p-20 rounded-xl'>
        <div className=' flex text-gray-600 font-bold text-2xl my-10 w-full justify-center'>Dashboard</div>
          <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Here is your information <span className='text-orange-600 text-lg'>{user?.user?.name}</span>
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Full name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.user?.name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Role in the system
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.user?.role}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email address
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {user?.user?.email}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  $120,000
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  About
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Attachments
                </dt>
                <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul
                    role="list"
                    className="divide-y divide-gray-100 rounded-md border border-gray-200"
                  >
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <MdAttachFile
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            resume_back_end_developer.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            2.4mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                    <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                      <div className="flex w-0 flex-1 items-center">
                        <MdAttachFile
                          className="h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                          <span className="truncate font-medium">
                            coverletter_back_end_developer.pdf
                          </span>
                          <span className="flex-shrink-0 text-gray-400">
                            4.5mb
                          </span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Download
                        </a>
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className='flex justify-center gap-20 my-6'>
        <button className="p-2 text-white bg-blue-500 rounded btn btn-secondary " onClick={handleLogout}>
          log out
        </button>

        <Link href="/video_session">
          <button className="p-2 text-white bg-orange-500 rounded btn btn-secondary">
                        host a video session
          </button>
        </Link>
        </div>
      </div>
    </PageWrapper> */}
    </div>
  );
};

export default Dashboard;
