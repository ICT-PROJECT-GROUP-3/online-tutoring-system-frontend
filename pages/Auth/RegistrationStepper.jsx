import React, { useState } from 'react';
import PageWrapper from '../../components/shared/PageWrapper';
import Stepper from '/components/pagecomponents/Auth/Stepper';
import StepperControl from '/components/pagecomponents/Auth/StepperControl';
import PersonalDetails from '/components/pagecomponents/Auth/steps/PersonalDetails';
import Qualification from '/components/pagecomponents/Auth/steps/Qualification';
import Scheduling from '/components/pagecomponents/Auth/steps/Scheduling';
import Verification from '/components/pagecomponents/Auth/steps/Verification';
import { StepperContextProvider } from '/context/auth/StepperContext';

const RegistrationStepper = () => {
  const [currentStep, setcurrentStep] = useState(1);
  const steps = [
    'Personal Details',
    'Qualifications and Experience',
    ' Availability and Schedule',
    'Verification and Review',
  ];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <PersonalDetails />;
      case 2:
        return <Qualification />;
      case 3:
        return <Scheduling />;
      case 4:
        return <Verification />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === 'next' ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setcurrentStep(newStep);
  };

  return (
    <PageWrapper>
      <div className="mx-full rounded-2xl bg-white pb-2 shadow-xl  md:w-full min-h-screen">
        {/* Stepper */}
        <div className="horizontal container mt-5 px:4 md:px-24">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-10 p-10 md:w-2/3 w-full mx-auto">
            <StepperContextProvider>
              {displaySteps(currentStep)}
            </StepperContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </PageWrapper>
  );
};

export default RegistrationStepper;
