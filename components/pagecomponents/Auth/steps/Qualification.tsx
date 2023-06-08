import React from 'react';
import { useAuthStepperContext } from '../../../../context/auth/StepperContext';
import StepsAnimateFramer from '../StepsAnimateFramer';

const fieldConfig = [
  {
    label: 'Educational Qualifications',
    name: 'education_qualification',
    placeholder: 'Educational Qualifications',
    type: 'text',
  },
  {
    label: 'Teaching Experience',
    name: 'teaching_experience',
    placeholder: 'where have you taught before',
    type: 'text',
  },
  {
    label: 'Personal Identifiers',
    name: 'identity',
    placeholder: 'National ID, passport, Drivers licence file',
    type: 'file',
  },
  {
    label: 'Areas of Expertise',
    name: 'area_of_expertise',
    placeholder: 'what are your areas of Expertise',
    type: 'text',
  },
  {
    label: 'Certifications or Credentials',
    name: 'certification_of_credentials',
    placeholder: 'Certifications or Credential files ',
    type: 'file',
  },
  {
    label: 'References',
    name: 'reference',
    placeholder: 'Who are your references',
    type: 'text',
  },
];

export default function Qualifications(): JSX.Element {
  const { tutorData, setUserData, addField, removeField } =
    useAuthStepperContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string,
    index: number
  ) => {
    const { value } = e.target;
    const updatedData = [...tutorData[fieldName]];
    updatedData[index] = value;
    setUserData({ ...tutorData, [fieldName]: updatedData });
  };

  const handleAddField = (fieldName: string) => {
    addField(fieldName);
  };

  const handleRemoveField = (fieldName: string, index: number) => {
    removeField(fieldName, index);
  };

  return (
    <StepsAnimateFramer>
      <div className="flex flex-col">
        <div
          className="w-full text-center font-medium text-4xl capitalize
      md:text-5xl mb-7 mt-0 md:mt-7 text-gray-800"
        >
          Qualification
        </div>
        {fieldConfig.map(({ label, name, placeholder, type }) => (
          <div key={name} className="mx-2 w-full flex-1">
            {/* Field label */}
            <div className="mt-3 h-6 capitalize font-bold leading-8 text-gray-500 text-md">
              {label}
            </div>
            {/* Input fields */}
            <div className="my-2">
              {tutorData[name].map((value: string, index: number) => (
                <div
                  key={index}
                  className="flex rounded border border-gray-200 bg-white p-1"
                >
                  <input
                    onChange={(e) => handleChange(e, name, index)}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    type={type}
                    required
                    className="w-full appearance-none p-1 px-2 text-gray-800 outline-none text-sm"
                  />
                  {index === tutorData[name].length - 1 && (
                    <button
                      onClick={() => handleAddField(name)}
                      className="h-full px-2 py-1 w-6 bg-gray-600 text-white ms:text-2xl rounded-md"
                    >
                      +
                    </button>
                  )}
                  {tutorData[name].length > 1 && (
                    <button
                      onClick={() => handleRemoveField(name, index)}
                      className="h-full px-2 py-1 w-6 bg-red-600 text-white ms:text-2xl rounded-md"
                    >
                      -
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </StepsAnimateFramer>
  );
}
