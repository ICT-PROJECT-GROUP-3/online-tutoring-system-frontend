import Link from 'next/link';
import { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import RegularButton from '../../../components/common/buttons/primary-button';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';

const Requirements = () => {
  const [homeworkHelpChecked, setHomeworkHelpChecked] = useState(false);
  const homeworkHelpCheckHandler = () => {
    setHomeworkHelpChecked(!homeworkHelpChecked);
  };

  const [onlineTeachingChecked, setOnlineTeachingChecked] = useState(false);
  const onlineTeachingCheckHandler = () => {
    setOnlineTeachingChecked(!onlineTeachingChecked);
  };

  const [homeSchooledChecked, setHomeSchooledChecked] = useState(false);
  const homeSchooledCheckHandler = () => {
    setHomeSchooledChecked(!homeSchooledChecked);
  };

  const progressRef = useRef(null);
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(15000);

  const handleMin = (e) => {
    if (maxValue - minValue >= 10000 && maxValue <= 100000) {
      if (parseInt(e.target.value) > maxValue) {
        return;
      } else {
        setMinValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) < minValue) {
        setMinValue(parseInt(e.target.value));
      }
    }
  };

  const handleMax = (e) => {
    if (maxValue - minValue >= 10000 && maxValue <= 100000) {
      if (parseInt(e.target.value) < minValue) {
        return;
      } else {
        setMaxValue(parseInt(e.target.value));
      }
    } else {
      if (parseInt(e.target.value) > maxValue) {
        setMaxValue(parseInt(e.target.value));
      }
    }
  };

  const [subjects, setSubjects] = useState([]);
  const addSubject = (event) => {
    if (event.target.value !== '') {
      setSubjects([...subjects, event.target.value]);
      event.target.value = '';
    }
  };
  const removeSubject = (indexToRemove) => {
    setSubjects([...subjects.filter((_, index) => index !== indexToRemove)]);
  };

  const [languages, setLanguages] = useState([]);
  const addLanguage = (event) => {
    if (event.target.value !== '') {
      setLanguages([...languages, event.target.value]);
      event.target.value = '';
    }
  };
  const removeLanguage = (indexToRemove) => {
    setLanguages([...languages.filter((_, index) => index !== indexToRemove)]);
  };

  return (
    <>
      <div className="flex flex-col w-screen justify-items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl text-center text-[#1c1c1c] my-8">
          Tutor Requirements
        </h1>
        <div className="w-11/12 mx-auto md:w-4/5 lg:w-3/5">
          <CardDropShadow>
            <form className="m-2 md:m-8">
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <label
                    className="block mb-1 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <label
                    className="block text-sm md:text-base text-left text-[#aba7a1]"
                    htmlFor="description"
                  >
                    Give a detailed description of your needs. Please don't
                    share any contact details (phone, email, website etc) here
                  </label>
                </div>
                <div className="md:w-full">
                  <textarea
                    className="bg-white text-sm md:text-base appearance-none border-2 focus:border-transparent border-[#EAE8E4] rounded w-full py-2 px-2 text-[#1c1c1c] leading-tight focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id="description"
                    rows={8}
                    placeholder="Example: I am looking for someone with experience in teaching IGCSE Maths online to young kids. My daughter is available from 4.30 pm EST to 8.30 pm EST on weekdays and flexible on Weekends. You should have a digital pen and good internet connection. My budget is a maximum of MWK10000 per hour."
                  ></textarea>
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <label
                    className="block mb-1 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
                    htmlFor="subjects"
                  >
                    Subjects
                  </label>
                  <label
                    className="block text-sm text-left text-[#aba7a1]"
                    htmlFor="subjects"
                  >
                    List the subjects that you'd wish to learn
                  </label>
                </div>
                <div className="md:w-full">
                  <div className="bg-white text-sm md:text-base border-2 border-[#EAE8E4] group rounded w-full px-2 py-2 md:2x-4 text-[#1c1c1c] ">
                    <ul className="flex flex-wrap">
                      {subjects.map((subject, index) => (
                        <li
                          key={index}
                          className="min-w-fit w-auto flex bg-[#F4F3F2] mx-2 items-center justify-center"
                        >
                          <p className="mt-1 ml-2">{subject}</p>
                          <MdClose
                            className="m-2 h-6 w-6 text-[#d00] cursor-pointer"
                            onClick={() => removeSubject(index)}
                          />
                        </li>
                      ))}
                      <input
                        className="inline p-0 mx-2 my-2 leading-tight align-baseline bg-white border-0 appearance-none focus:ring-0 focus:border-transparent focus:outline-none"
                        type="text"
                        placeholder="Press enter after typing"
                        onKeyUp={(e) =>
                          e.key === 'Enter' ? addSubject(e) : null
                        }
                      />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <label
                    className="block mb-1 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
                    htmlFor="language"
                  >
                    Language
                  </label>
                  <label
                    className="block text-sm text-left text-[#aba7a1]"
                    htmlFor="language"
                  >
                    What language are you comfortable / wish to learn in
                  </label>
                </div>
                <div className="md:w-full">
                  <div className="bg-white text-sm md:text-base border-2 border-[#EAE8E4] group rounded w-full px-2 py-2 md:2x-4 text-[#1c1c1c] ">
                    <ul className="flex flex-wrap">
                      {languages.map((language, index) => (
                        <li
                          key={index}
                          className="min-w-fit w-auto flex bg-[#F4F3F2] mx-2 items-center justify-center"
                        >
                          <p className="mt-1 ml-2">{language}</p>
                          <MdClose
                            className="m-2 h-6 w-6 text-[#d00] cursor-pointer"
                            onClick={() => removeLanguage(index)}
                          />
                        </li>
                      ))}
                      <input
                        className="inline p-0 mx-2 my-2 leading-tight align-baseline border-0 appearance-none focus:ring-0 focus:outline-none focus:bg-white focus:border-transparent"
                        type="text"
                        placeholder="Press enter after typing"
                        onKeyUp={(e) =>
                          e.key === 'Enter' ? addLanguage(e) : null
                        }
                      />
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <label
                    className="block mb-1 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <label
                    className="block text-sm text-left text-[#aba7a1]"
                    htmlFor="location"
                  >
                    Provide a general location
                  </label>
                </div>
                <div className="md:w-full">
                  <input
                    className="bg-white text-sm md:text-base appearance-none border-2 border-[#EAE8E4] rounded w-full py-2 px-2 text-[#1c1c1c] leading-tight focus:border-transparent focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    id="location"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <label
                    className="block mb-1 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <label
                    className="block text-sm text-left text-[#aba7a1]"
                    htmlFor="gender"
                  >
                    What gender of the tutor are you comfortable working with
                  </label>
                </div>
                <div className="mt-1 md:w-full">
                  <select
                    name="language"
                    id="language"
                    className="bg-white text-sm md:text-base appearance-none border-2 focus:border-transparent border-[#EAE8E4] rounded w-full py-2 px-2 text-[#1c1c1c] leading-tight focus:outline-none focus:border-transparent focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  >
                    <option value="">Please select the gender</option>
                    <option value="any">Any</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="flex-col mb-6">
                <div className="mb-4 md:w-full">
                  <label
                    className="block mb-1 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
                    htmlFor="price-range"
                  >
                    Price Range
                  </label>
                  <label
                    className="block text-sm text-left text-[#aba7a1]"
                    htmlFor="price-range"
                  >
                    Provide the minimum and maximum amount you're capable of
                    paying for
                  </label>
                </div>
                <div className="flex items-center my-6 text-sm md:text-base">
                  <div className="rounded-md">
                    <span className="p-2 font-semibold"> Min</span>
                    <input
                      onChange={(e) => setMinValue(parseInt(e.target.value))}
                      type="number"
                      value={minValue}
                      className="w-28 bg-white appearance-none border-2 border-[#EAE8E4] rounded py-2 px-2 text-[#1c1c1c] leading-tight focus:border-transparent focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="ml-2 text-lg font-semibold"> - </div>
                  <div className="">
                    <span className="p-2 font-semibold"> Max</span>
                    <input
                      onChange={(e) => setMaxValue(parseInt(e.target.value))}
                      type="number"
                      value={maxValue}
                      className="w-28 bg-white appearance-none border-2 border-[#EAE8E4] rounded py-2 px-2 text-[#1c1c1c] leading-tight  focus:border-transparent focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <div className="relative h-1 bg-gray-300 rounded-md slider">
                    <div
                      className="absolute h-1 bg-[#F4AB4E] accent-[#F4AB4E] rounded progress "
                      ref={progressRef}
                    ></div>
                  </div>

                  <div className="relative range-input ">
                    <input
                      onChange={handleMin}
                      type="range"
                      min={100}
                      step={100}
                      max={100000}
                      value={minValue}
                      className="absolute w-full h-1 bg-transparent focus:border-transparent accent-[#F4AB4E] appearance-none pointer-events-none range-min -top-1"
                    />

                    <input
                      onChange={handleMax}
                      type="range"
                      min={100}
                      step={100}
                      max={100000}
                      value={maxValue}
                      className="absolute w-full h-1 bg-transparent focus:border-transparent accent-[#F4AB4E] appearance-none pointer-events-none range-max -top-1"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col mb-6 md:flex md:items-center">
                <div className="mb-4 md:w-full">
                  <label
                    className="block mb-1 font-bold text-[#1C1C1C] text-base sm:text-md md:text-left md:mb-0"
                    htmlFor="meeting-options"
                  >
                    Meeting Options
                  </label>
                  <label
                    className="block text-sm text-left text-[#aba7a1]"
                    htmlFor="meeting-options"
                  >
                    How do you prefer the lesson structure to be set like
                  </label>
                </div>
                <div className="md:w-full">
                  <div>
                    <div className="flex items-center my-2">
                      <input
                        id="homework-help-checkbox"
                        name="homework help checkbox"
                        type="checkbox"
                        onChange={homeworkHelpCheckHandler}
                        checked={homeworkHelpChecked}
                        className="w-8 h-8 accent-[#F4E4D2] text-[#F4AB4E] border-[#EAE8E4] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="homework-help-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 md:text-base dark:text-gray-300"
                      >
                        I need help in homework
                      </label>
                    </div>
                    <div className="flex items-center my-2">
                      <input
                        id="online-checkbox"
                        name="online checkbox"
                        type="checkbox"
                        onChange={onlineTeachingCheckHandler}
                        checked={onlineTeachingChecked}
                        className="w-8 h-8 accent-[#F4E4D2] text-[#F4AB4E] border-[#EAE8E4] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="online-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 md:text-base dark:text-gray-300"
                      >
                        I want to learn online
                      </label>
                    </div>
                    <div className="flex items-center my-2">
                      <input
                        id="home-schooled-checkbox"
                        name="home schooled checkbox"
                        type="checkbox"
                        onChange={homeSchooledCheckHandler}
                        checked={homeSchooledChecked}
                        className="w-8 h-8 accent-[#F4E4D2] text-[#F4AB4E]  border-[#EAE8E4] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        htmlFor="home-schooled-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 md:text-base dark:text-gray-300"
                      >
                        I want to be taught at home
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/user/student/Dashboard">
                <RegularButton name={'Post Requirement'} />
              </Link>
            </form>
          </CardDropShadow>
        </div>
      </div>
    </>
  );
};

export default Requirements;
