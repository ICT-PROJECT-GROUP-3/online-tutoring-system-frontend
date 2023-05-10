import React, { useState } from 'react';
import { useAuthStepperContext } from '../../../../context/auth/StepperContext';
import StepsAnimateFramer from "../StepsAnimateFramer"

const timeZones = ['GMT', 'EST', 'CST', 'PST']; // Example time zones, replace with your own list

const fieldConfig = [
  {
    label: 'Weekly Availability',
    name: 'weeklyAvailability',
    placeholder: 'Weekly Availability',
  },
  {
    label: 'Preferred Time Slots',
    name: 'preferredTimeSlots',
    placeholder: 'Preferred Time Slots',
  },
  {
    label: 'Time Zone',
    name: 'timeZone',
    placeholder: 'Time Zone',
    selectOptions: timeZones,
  },
  {
    label: 'Session Duration',
    name: 'sessionDuration',
    placeholder: 'Session Duration',
  },
  {
    label: 'Maximum Number of Sessions',
    name: 'maxSessions',
    placeholder: 'Maximum Number of Sessions',
  },
];

export default function Scheduling(): JSX.Element {
  const { tutorData, setUserData } = useAuthStepperContext();
  const [timeSlots, setTimeSlots] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setUserData({ ...tutorData, [fieldName]: value });
  };

  const handleAddTimeSlot = () => {
    // Add a new time slot to the timeSlots state
    setTimeSlots([...timeSlots, '']);
  };

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
      {fieldConfig.map(({ label, name, placeholder, selectOptions }) => (
        <div key={name} className="mx-2 w-full flex-1">
          {/* Field label */}
          <div className="mt-3 h-6 font-bold leading-8 capitalize text-md text-gray-500">
            {label}
          </div>
          {/* Input or Select field */}
          {name === 'preferredTimeSlots' ? (
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
              {selectOptions ? (
                <select
                  onChange={(e) => handleChange(e, name)}
                  value={tutorData[name] || ''}
                  name={name}
                  className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                >
                  <option value="">Select {label}</option>
                  {selectOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  onChange={(e) => handleChange(e, name)}
                  value={tutorData[name] || ''}
                  name={name}
                  placeholder={placeholder}
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
