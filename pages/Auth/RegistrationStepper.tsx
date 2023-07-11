import { useRouter } from 'next/router';
import { useState } from 'react';
import Stepper from '../../components/pagecomponents/Auth/Stepper';
import StepperControl from '../../components/pagecomponents/Auth/StepperControl';
import PersonalDetails from '../../components/pagecomponents/Auth/steps/PersonalDetails';
import Qualification from '../../components/pagecomponents/Auth/steps/Qualification';
import Scheduling from '../../components/pagecomponents/Auth/steps/Scheduling';
import Verification from '../../components/pagecomponents/Auth/steps/Verification';
import PageWrapper from '../../components/shared/PageWrapper';
import Navbar from '../../components/shared/navbar/Navbar';
import {
  StepperContextProvider,
  useAuthStepperContext,
} from '../../context/auth/StepperContext';

/**
 * Component for the registration stepper.
 *
 * @returns {JSX.Element} The rendered component.
 */
const RegistrationStepper = (): JSX.Element => {
  const { tutorData, setUserData } = useAuthStepperContext();
  const [currentStep, setcurrentStep] = useState(1);
  const steps = [
    'Personal Details',
    'Qualifications and Experience',
    'Availability and Schedule',
    'Verification and Review',
  ];
  const router = useRouter();
  const { data } = router.query;
  console.log(data);

  /**
   * Displays the appropriate step component based on the current step.
   *
   * @param {number} step - The current step number.
   * @returns {JSX.Element} The rendered step component.
   */
  const displaySteps = (step: number): JSX.Element => {
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
        return <></>;
    }
  };

  /**
   * Handles the click event on the stepper control buttons.
   *
   * @param {string} direction - The direction of the click ('Next' or 'Previous').
   */
  const handleClick = (direction: string): void => {
    let newStep = currentStep;

    direction === 'Next' ? newStep++ : newStep--;
    // Check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setcurrentStep(newStep);
  };

  return (
    <PageWrapper>
      <StepperContextProvider>
        <Navbar />
        <div className="relative rounded-2xl bg-white pb-2 shadow-xl min-h-fit md:w-4/6 mt-20">
          {/* Stepper */}
          <div className="container mt-5 px:4 md:px-24">
            <Stepper steps={steps} currentStep={currentStep} />

            <div className="my-10 p-10 md:w-7/8 w-full mx-auto">
              {displaySteps(currentStep)}
            </div>
          </div>

          {/* Navigation buttons */}
          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </div>
      </StepperContextProvider>
    </PageWrapper>
  );
};

export default RegistrationStepper;
