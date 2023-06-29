import React from 'react';
import { useAuthStepperContext } from '../../../../context/auth/StepperContext';
import StepsAnimateFramer from '../StepsAnimateFramer';

const fieldConfig = [
  {
    label: 'Full Name',
    name: 'fullname',
    placeholder: 'Full Name',
    type: 'text',
  },

  {
    label: 'Phone Number',
    name: 'phone_number',
    placeholder: 'Enter your phone number',
    type: 'tel',
  },

  { label: 'Location', name: 'location', placeholder: 'Enter your location' },

  {
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    label: 'Gender',
    name: 'gender',
    placeholder: 'Gender',
    options: ['Male', 'Female'],
  },

  {
    label: 'Date of Birth',
    name: 'date_of_birth',
    placeholder: 'Date of Birth',
    type: 'date',
  },
  {
    label: 'Bio',
    name: 'bio',
    placeholder: 'A short bio about yourself',
    type: 'text',
  },
  // {
  //   label: 'Profile Picture',
  //   name: 'profile_picture',
  //   placeholder: 'Profile Picture',
  //   type: 'file',
  // }
];



const countryCodes = [
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+265', country: 'MWI' },
  // Add more country codes as needed
];

export default function PersonalProfile(): JSX.Element {
  const { tutorData, setUserData } = useAuthStepperContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setUserData({ ...tutorData, [fieldName]: value });
  };

  return (
    <StepsAnimateFramer>
      <div className="relative flex flex-col">
        <div
          className="w-full text-center font-medium text-4xl capitalize
      md:text-5xl mb-7 mt-0 md:mt-7 text-gray-800"
        >
          Personal Details
        </div>
        {fieldConfig.map(({ label, name, placeholder, options, type }) => (
          <div key={name} className="mx-2 w-full flex-1">
            {/* Field label */}
            <div className="mt-3 h-6 text-xs font-bold uppercase leading-8 text-gray-500">
              {label}
            </div>
            {/* Input or Select field */}
            {name === 'phoneNumber' ? (
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                <select
                  onChange={(e) => handleChange(e, 'countryCode')}
                  value={tutorData['countryCode'] || ''}
                  name="countryCode"
                  required
                  className="w-1/4 appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                >
                  <option value="">Select Country Code</option>
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>
                      {`${country} (${code})`}
                    </option>
                  ))}
                </select>
                <input
                  onChange={(e) => handleChange(e, 'phoneNumber')}
                  value={tutorData['phoneNumber'] || ''}
                  name="phoneNumber"
                  required
                  placeholder="Phone Number"
                  className="w-3/4 ml-2 appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                />
              </div>
            ) : (
              <div className="my-2 flex rounded border border-gray-200 bg-white p-1">
                {name === 'gender' && options ? (
                  <select
                    onChange={(e) => handleChange(e, name)}
                    value={tutorData[name] || ''}
                    name={name}
                    required
                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                  >
                    <option value="">{placeholder}</option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <>
                    {type === 'date' ? (
                      <input
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        type="date"
                        onChange={(e) => handleChange(e, name)}
                        value={tutorData[name] || ''}
                        name={name}
                        required
                        placeholder={placeholder}
                        // className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                      />
                    ) : (
                      <input
                        onChange={(e) => handleChange(e, name)}
                        value={tutorData[name] || ''}
                        name={name}
                        type={type || 'text'}
                        placeholder={placeholder}
                        required
                        className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                      />
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </StepsAnimateFramer>
  );
}
