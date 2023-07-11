import React, { useState } from 'react';
import { useAuthStepperContext } from '../../../../context/auth/StepperContext';
import StepsAnimateFramer from '../StepsAnimateFramer';

/**
 * Example time zones, replace with your own list.
 */
const timeZones = ['GMT', 'EST', 'CST', 'PST'];

/**
 * Configuration for the form fields.
 */
const fieldConfig = [
  {
    label: 'Weekly Availability',
    name: 'weekly_availability',
    placeholder: 'how many days a week',
    type: 'number',
  },
  {
    label: 'Preferred Time Slots',
    name: 'time_slots',
    placeholder: 'Preferred Time Slots',
    type: 'text',
  },
  {
    label: 'Total Teaching Experience',
    name: 'total_teaching_experience',
    placeholder: 'Enter your total number of teaching experience in years',
    type: 'number',
  },
  // {
  //   // label: 'Time Zone',
  //   name: 'time-zone',
  //   placeholder: 'Time Zone',
  //   selectOptions: timeZones,
  // },
  {
    label: 'Session Duration',
    name: 'session_duration',
    placeholder: 'how long will your sessions take',
    type: 'number',
  },
  {
    label: 'Maximum Number of Sessions',
    name: 'maximum_number_of_sessions',
    placeholder: 'Maximum Number of Sessions a day',
    type: 'number',
  },
];

/**
 * Component for the scheduling form.
 */
export default function Scheduling(): JSX.Element {
  const { tutorData, setUserData } = useAuthStepperContext();
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  /**
   * Event handler for input and select field changes.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - The event object.
   * @param {string} fieldName - The name of the field being changed.
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setUserData({ ...tutorData, [fieldName]: value });
  };

  /**
   * Event handler for adding a new time slot to the timeSlots state.
   */
  const handleAddTimeSlot = () => {
    setTimeSlots([...timeSlots, '']);
  };

  /**
   * Event handler for updating a time slot in the timeSlots state.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event object.
   * @param {number} index - The index of the time slot being changed.
   */
  const handleTimeSlotChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newTimeSlots = [...timeSlots];
    newTimeSlots[index] = e.target.value;
    setTimeSlots(newTimeSlots);
  };

  return (
    <StepsAnimateFramer>
      <div className="flex flex-col">
        <div
          className="w-full text-center font-medium text-4xl capita
      md:text-5xl mb-7 mt-0 md:mt-7 text-gray-800"
        >
          Scheduling
        </div>
        {fieldConfig.map(({ label, name, placeholder, type }) => (
          <div key={name} className="mx-2 w-full flex-1">
            {/* Field label */}
            <div className="mt-3 h-6 font-bold leading-8 capitalize text-md text-gray-500">
              {label}
            </div>
            {/* Input or Select field */}
            {name === 'time_slots' ? (
              <div className="my-2 flex flex-col gap-2">
                {timeSlots.map((timeSlot, index) => (
                  <div key={index} className="flex items-center my-1 w-full">
                    <input
                      type="time"
                      value={timeSlot}
                      onChange={(e) => handleTimeSlotChange(e, index)}
                      className="appearance-none p-1 px-2 text-gray-800 outline-none items-center w-full bg-gray-200 rounded py-2"
                    />
                  </div>
                ))}
                <button
                  onClick={handleAddTimeSlot}
                  className="text-gray-500 underline hover:text-gray-700 bg-orange-50 h-20 text-sm"
                >
                  + Add Time Slot
                </button>
              </div>
            ) : (
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                {name == 'timeee' ? (
                  <select
                    onChange={(e) => handleChange(e, name)}
                    value={tutorData[name] || ''}
                    name={name}
                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                  >
                    <option value="">Select {label}</option>
                    {/* {selectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))} */}
                  </select>
                ) : (
                  <input
                    onChange={(e) => handleChange(e, name)}
                    value={tutorData[name] || ''}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    required
                    className="w-full appearance-none text-sm p-1 px-2 text-gray-800 outline-none"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </StepsAnimateFramer>
  );
}
