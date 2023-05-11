import { BiMaleFemale } from 'react-icons/bi';
import { HiFilter } from 'react-icons/hi';
import Search from '../../components/pagecomponents/find_tutor/search';
import TutorCard from '../../components/pagecomponents/find_tutor/tutor-card';
import Background from '../../components/shared/background/background';
import SideFooter from '../../components/shared/footer/side-footer';

const FindTutor = () => {
  const tutors = [
    {
      pic: '/assets/images/Profile pic 2.png',
      name: 'Alex Mwafungo',
      link: '/',
      bio: 'As someone who loves education, possesses excellent organizational skills and can connect easily with students, this is the perfect opportunity for me to continue my professional development.',
      subjects: [
        { label: 'History', url: 'https://flowbite.com/' },
        { label: 'Geography', url: 'https://tailwindcss.com/' },
      ],
      location: 'Balaka',
      amount: 7000,
      experience: 15,
      language: [{ title: 'Chichewa' }, { title: 'Chitumbuka' }],
    },
    {
      pic: '/assets/images/Profile pic.png',
      name: 'Yamikani Namphande',
      link: '/',
      bio: 'I do individuadivzed assistance to help students learn new concepts and complete assignments. I do study lessons and review textbooks for better understanding as a way of preparing for a lesson.',
      subjects: [
        { label: 'Biology', url: 'https://flowbite.com/' },
        { label: 'Mathematics', url: 'https://tailwindcss.com/' },
        { label: 'Agriculture', url: 'https://tailwindcss.com/' },
      ],
      location: 'Lilongwe',
      amount: 10000,
      experience: 5,
      language: [{ title: 'Chichewa' }, { title: 'Engdivsh' }],
    },
    {
      pic: '/assets/images/Profile pic 3.png',
      name: 'Edivas Katema',
      link: '/',
      bio: 'I am based on instructor centered teaching and student centered teaching styles. Well designed presentations with pure Engdivsh and practical.',
      subjects: [
        { label: 'Accounting', url: 'https://flowbite.com/' },
        { label: 'Economics', url: 'https://tailwindcss.com/' },
        { label: 'Mathematics', url: 'https://tailwindcss.com/' },
      ],
      location: 'Mzuzu',
      amount: 9000,
      experience: 7,
      language: [{ title: 'Engdivsh' }],
    },
  ];
  return (
    <Background>
      <div className="flex flex-col">
        <div className="flex flex-row w-screen h-screen">
          <div className="w-1/5">
            <div className="w-96 h-screen fixed bg-[#f4f3f2] border-t-0 border-r-[1.5px] border-b-0 border-l-0 border-[#e5e3df]/80">
              <div className="flex flex-col items-center justify-center w-auto mx-auto my-8">
                <div className="flex flex-col justify-start w-4/5">
                  <div className="flex flex-row items-center mb-4">
                    <HiFilter className="fill-[#f4ab4e] w-8 h-8 mr-4" />
                    <h2 className="text-3xl text-left text-[#1c1c1c]">
                      Filter
                    </h2>
                  </div>
                  <div>
                    <div className="flex flex-row items-center my-2">
                      <BiMaleFemale className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
                      <h2 className="text-lg text-left text-[#1c1c1c]">
                        Gender
                      </h2>
                    </div>
                    <div>
                      <div className="flex items-center my-2 ml-12">
                        <input
                          checked
                          id="male-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 accent-[#F4E4D2] text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="male-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center my-2 ml-12">
                        <input
                          checked
                          id="female-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 accent-[#F4E4D2] text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="female-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Female
                        </label>
                      </div>
                      <div className="flex items-center my-2 ml-12">
                        <input
                          checked
                          id="other-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 accent-[#F4E4D2] text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="other-checkbox"
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-row items-center my-2">
                      <BiMaleFemale className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
                      <h2 className="text-lg text-left text-[#1c1c1c]">
                        Price
                      </h2>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value="40"
                      className="fill-[#F4E4D2]"
                    />
                  </div>
                </div>
                <SideFooter />
              </div>
            </div>
          </div>
          <div className="flex flex-col content-center w-4/5">
            <Search />
            <div className="grid content-start w-auto grid-cols-1 gap-8 p-2 justify-items-center">
              {/* Map tutors over here */}
              {tutors.map((tutor, key) => (
                <TutorCard key={key} data={tutor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default FindTutor;
