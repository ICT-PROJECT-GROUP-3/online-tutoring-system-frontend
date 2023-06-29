import { useEffect, useRef, useState } from 'react';
import { BiMaleFemale } from 'react-icons/bi';
import { FaChalkboardTeacher, FaMoneyBillAlt } from 'react-icons/fa';
import { HiFilter } from 'react-icons/hi';
import { IoLanguageSharp } from 'react-icons/io5';

interface FilterProps {
  handleFilter: (filterOptions: FilterOptions) => void;
  
}

interface FilterOptions {
  gender: string[];
  homework_help: string[];
  language: string;

 
}

const Filter: React.FC<FilterProps> = ({ handleFilter }) => {

const [selectedGender, setSelectedGender] = useState<string[]>([]);
const [selectedHomework, setSelectedHomework] = useState<string[]>([]);
const [femaleChecked, setFemaleChecked] = useState(false);
const [selectedLanguage, setSelectedLanguage] = useState<string>('');


  const [maleChecked, setMaleChecked] = useState(false);

  const maleCheckHandler = () => {
    setMaleChecked(!maleChecked);
    setSelectedGender(["Male"]);
    applyFilter();
  };
  
  const femaleCheckHandler = () => {
    setFemaleChecked(!femaleChecked);
    setSelectedGender(["Female"]);
    applyFilter();
  };

  const [otherChecked, setOtherChecked] = useState(false);
  const otherCheckHandler = () => {
    setOtherChecked(!otherChecked);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    setSelectedLanguage(selectedLanguage);
    applyFilter();
  };

  const applyFilter = () => {
    const filterOptions: FilterOptions = {
      gender: selectedGender,
      homework_help: selectedHomework,
      language: selectedLanguage
    };
    console.log('gender selected')
    console.log(selectedGender)
    handleFilter(filterOptions);
  }

  const [inPersonChecked, setInPersonChecked] = useState(false);
  const inPersonCheckHandler = () => {
    setInPersonChecked(!inPersonChecked);
  };

  const [onlineChecked, setOnlineChecked] = useState(false);
  const onlineCheckHandler = () => {
    setOnlineChecked(!onlineChecked);
  };

  const [homeworkHelpChecked, setHomeworkHelpChecked] = useState(false);
  const homeworkHelpCheckHandler = () => {
    setHomeworkHelpChecked(!homeworkHelpChecked);
  setSelectedHomework(["true"]);
  applyFilter();
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

  useEffect(() => {
    progressRef.current.style.left = (minValue / 100000) * 100 + '%';
    progressRef.current.style.right = 100 - (maxValue / 100000) * 100 + '%';
  }, [minValue, maxValue]);
  return (
    <>
      <div className="flex flex-col justify-start w-4/5">
        <div className="flex flex-row items-center mb-4">
          <HiFilter className="fill-[#f4ab4e] w-8 h-8 mr-4" />
          <h2 className="text-3xl text-left text-[#1c1c1c]">Filter</h2>
        </div>
        <form>
          <div>
            <div className="flex flex-row items-center my-2">
              <BiMaleFemale className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
              <h2 className="text-lg text-left text-[#1c1c1c]">Gender</h2>
            </div>
            <div>
              <div className="flex items-center my-2 ml-12">
                <input
                  id="male-checkbox"
                  name="male checkbox"
                  type="checkbox"
                  value="Male"
                  onChange={maleCheckHandler}
                  checked={maleChecked}
                  className="w-4 h-4 accent-[#F4AB4E] text-[#F4AB4E] bg-[#F4E4D2] border-[#F4E4D2] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                  id="female-checkbox"
                  name="female checkbox"
                  type="checkbox"
                  onChange={femaleCheckHandler}
                  checked={femaleChecked}
                  className="w-4 h-4 accent-[#F4AB4E] text-[#F4AB4E] bg-[#F4E4D2] border-[#F4E4D2] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                  id="other-checkbox"
                  name="other checkbox"
                  type="checkbox"
                  onChange={otherCheckHandler}
                  checked={otherChecked}
                  className="w-4 h-4 accent-[#F4AB4E] text-[#F4AB4E] bg-[#F4E4D2] border-[#F4E4D2] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
              <FaMoneyBillAlt className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
              <h2 className="text-lg text-left text-[#1c1c1c]">Price</h2>
            </div>
            <div className="flex items-center justify-between my-6 ">
              <div className="rounded-md">
                <span className="p-2 font-semibold"> Min</span>
                <input
                  onChange={(e) => setMinValue(parseInt(e.target.value))}
                  type="number"
                  value={minValue}
                  className="w-24 border border-[#EAE8E4] rounded-md focus:border-none focus:ring-orange-500 dark:focus:ring-orange-600 focus:ring-2"
                />
              </div>
              <div className="ml-2 text-lg font-semibold"> - </div>
              <div className="">
                <span className="p-2 font-semibold"> Max</span>
                <input
                  onChange={(e) => setMaxValue(parseInt(e.target.value))}
                  type="number"
                  value={maxValue}
                  className="w-24 border border-[#EAE8E4] rounded-md focus:border-none focus:ring-orange-500 dark:focus:ring-orange-600 focus:ring-2"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative h-1 bg-gray-300 rounded-md slider">
                <div
                  className="absolute h-1 bg-[#F4AB4E] rounded progress "
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
                  className="absolute w-full h-1 bg-transparent accent-[#F4AB4E] appearance-none pointer-events-none range-min -top-1"
                />

                <input
                  onChange={handleMax}
                  type="range"
                  min={100}
                  step={100}
                  max={100000}
                  value={maxValue}
                  className="absolute w-full h-1 bg-transparent accent-[#F4AB4E] appearance-none pointer-events-none range-max -top-1"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center my-2">
              <FaChalkboardTeacher className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
              <h2 className="text-lg text-left text-[#1c1c1c]">Lesson type</h2>
            </div>
            <div>
              <div className="flex items-center my-2 ml-12">
                <input
                  id="in-person"
                  name="In-person"
                  type="checkbox"
                  onChange={inPersonCheckHandler}
                  checked={inPersonChecked}
                  className="w-4 h-4 accent-[#F4AB4E] text-[#F4AB4E] bg-[#F4E4D2] border-[#F4E4D2] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="in-person"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  In-person
                </label>
              </div>
              <div className="flex items-center my-2 ml-12">
                <input
                  id="online"
                  name="Online"
                  type="checkbox"
                  onChange={onlineCheckHandler}
                  checked={onlineChecked}
                  className="w-4 h-4 accent-[#F4AB4E] text-[#F4AB4E] bg-[#F4E4D2] border-[#F4E4D2] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="online"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Online
                </label>
              </div>
              <div className="flex items-center my-2 ml-12">
                <input
                  id="homework-help"
                  name="Homework Help"
                  type="checkbox"
                  onChange={homeworkHelpCheckHandler}
                  checked={homeworkHelpChecked}
                  className="w-4 h-4 accent-[#F4AB4E] text-[#F4AB4E] bg-[#F4E4D2] border-[#F4E4D2] rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="homework-help"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Homework Help
                </label>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center my-2">
              <IoLanguageSharp className="fill-[#f4ab4e] w-4 h-4 ml-2 mr-6" />
              <h2 className="text-lg text-left text-[#1c1c1c]">Lesson type</h2>
            </div>
            <div className="mt-1">
              <select
                name="language"
                id="language"
                className="w-full border rounded-[5px] border-[#EAE8E4]"
              >
                <option value="">Please select a language</option>
                <option value="english">English</option>
                <option value="chitumbuku">Chitumbuku</option>
                <option value="chichewa">Chichewa</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Filter;