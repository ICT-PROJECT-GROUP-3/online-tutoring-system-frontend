import Link from 'next/link';
// import path from 'path';
import { useAuthStepperContext } from '../../../context/auth/StepperContext';
const path = require('path');

const postData = async (data) => {
  const sanityApiKey =
    'skHK4SXyIt4zKcU6X6OIOaG2Zsb2ZYMvQk3oCMakw6KutBjRDje8EtUZVcDpIBSiGbF3cH26h46T9oH6GWg0VH6eDCHDg6uUX669PviEvtqfwTdrE4W7PuB00Mc6aWVq8S3up1LqUPkTeZOmVrtBX6yduClsbvwAceBJQTtRKzpnVZ5FGMuK';
  const sanityProjectId = '3iouolde';
  const sanityDataset = 'production';

  try {
    const response = await fetch(
      `https://${sanityProjectId}.api.sanity.io/v1/data/mutate/${sanityDataset}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sanityApiKey}`,
        },
        body: JSON.stringify({
          mutations: [
            {
              create: {
                _type: 'tutor', // Replace with your existing schema type "tutor"
                // Map the data fields to the corresponding fields in your "tutor" schema
                ...data, // Spread the tutorData object to include all fields
              },
            },
          ],
        }),
      }
    );

    if (response.ok) {
      console.log('Data posted successfully!');
    } else {
      console.error('Error posting data:', response.statusText);
    }
  } catch (error) {
    console.error('Error posting data:', error);
  }
};

function isStepValid(stepData: Record<string, string>): boolean {
  return Object.values(stepData).every((value) => value.trim() !== '');
}
export default function StepperControl({ handleClick, currentStep, steps }) {
  let { tutorData } = useAuthStepperContext();

  const controlHandleClick = async (btnName: string) => {
    // Handle button functionality

    if (btnName === 'Next') {
      if (
        tutorData.fullname &&
        tutorData.gender &&
        tutorData.bio &&
        tutorData.email &&
        tutorData.date_of_birth &&
        tutorData.location &&
        tutorData.phone_number
      ) {
        handleClick('Next');
      } else if (
        tutorData.education_qualification.length == 0 &&
        tutorData.certification_of_credentials.length == 0 &&
        tutorData.identity.length == 0 &&
        tutorData.area_of_expertise.length == 0 &&
        tutorData.teaching_experience.length == 0 &&
        tutorData.reference.length == 0
      ) {
        alert('fields empty...Please fill them out');
        return;
      } else if (
        tutorData.weekly_availability == 0 &&
        tutorData.time_slots.length == 0 &&
        tutorData.maximum_number_of_sessions == 0 &&
        tutorData.total_teaching_experience == 0 &&
        tutorData.session_duration == 0
      ) {
        alert('fields empty...Please fill them out');
      } else {
        handleClick('Next');
      }
    } else if (btnName === 'Confirm') {
      console.log(tutorData);

      // check if tutor data is not empty
      if (tutorData) {
        await postData(tutorData); // Call the postData function with the tutorData
      } else {
        alert('Tutor details empty!!...Please fill out the fields');
        return;
      }
      handleClick('Next');
    }
  };

  return (
    <div className="container mt-4 mb-4 flex justify-around bottom-1">
      <Link href="#">
        <button
          onClick={() => handleClick()}
          className={`cursor-pointer w-28 md:w-40 rounded-[5px]  hover:bg-[#d03434] p-1 border-2 border-slate-300 bg-white py-2 font-semibold uppercase text-slate-400 transition duration-200 ease-in-out hover:text-white  ${
            currentStep === 1 ? ' cursor-not-allowed opacity-50 ' : ''
          }`}
        >
          Back
        </button>
      </Link>

      <Link href="#">
        <button
          onClick={() =>
            controlHandleClick(
              currentStep === steps.length - 1 ? 'Confirm' : 'Next'
            )
          }
          className="cursor-pointer py-2 w-28 md:w-40 font-semibold uppercase text-white transition duration-200 ease-in-out rounded-[5px] bg-[#d03434]  hover:bg-white hover:border-2 hover:text-[#d03434] p-1"
        >
          {currentStep === steps.length - 1 ? 'Confirm' : 'Next'}
        </button>
      </Link>
    </div>
  );
}
