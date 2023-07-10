import { useState } from 'react';
import { BiMaleFemale } from 'react-icons/bi';
import { HiFilter } from 'react-icons/hi';

const Filter = () => {
  const [maleChecked, setMaleChecked] = useState(false);
  const maleCheckHandler = () => {
    setMaleChecked(!maleChecked);
  };

  const [femaleChecked, setFemaleChecked] = useState(false);
  const femaleCheckHandler = () => {
    setFemaleChecked(!femaleChecked);
  };

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
            </div>
          </div>
          <div>
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
