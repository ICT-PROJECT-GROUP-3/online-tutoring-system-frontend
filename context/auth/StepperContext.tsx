import React, { createContext, useContext, useState } from "react";

interface StepperContextData {
  tutorData: TutorData;
  setUserData: (data: TutorData) => void;
  addField: (fieldName: string) => void;
  removeField: (fieldName: string, index: number) => void;
}

interface TutorData {
  fullName: string;
  email: string;
  phoneNumber: string;
  gender: string;
  address: string;
  dateOfBirth: string;
  educationalQualifications: string[];
  teachingExperience: string[];
  areasOfExpertise: string[];
  certificationsOrCredentials: string[];
  references: string[];
  teachingPhilosophyOrApproach: string[];
  weeklyAvailability: string[];
  preferredTimeSlots: string[];
  timeZone: string;
  sessionDuration: string;
  breaksOrUnavailability: string[];
  maxNumberOfSessions: number;
}


const initialUserData: TutorData = {
  educationalQualifications: [""],
  teachingExperience: [""],
  areasOfExpertise: [""],
  certificationsOrCredentials: [""],
  references: [""],
  teachingPhilosophyOrApproach: [""],
  fullName: "",
  email: "",
  phoneNumber: "",
  gender: "",
  address: "",
  dateOfBirth: "",
  weeklyAvailability: [],
  preferredTimeSlots: [],
  timeZone: "",
  sessionDuration: "",
  breaksOrUnavailability: [],
  maxNumberOfSessions: 0
};

const StepperContext = createContext<StepperContextData | null>(null);

export const StepperContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tutorData, setUserData] = useState<TutorData>(initialUserData);

  const addField = (fieldName: string) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [fieldName]: [...prevUserData[fieldName], ""],
    }));
  };

  const removeField = (fieldName: string, index: number) => {
    setUserData((prevUserData) => {
      const updatedFieldData = [...prevUserData[fieldName]];
      updatedFieldData.splice(index, 1);
      return {
        ...prevUserData,
        [fieldName]: updatedFieldData,
      };
    });
  };

  const contextValue: StepperContextData = {
    tutorData,
    setUserData,
    addField,
    removeField,
  };

  return (
    <StepperContext.Provider value={contextValue}>{children}</StepperContext.Provider>
  );
};

export const useAuthStepperContext = (): StepperContextData => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepperContext must be used within the StepperContextProvider");
  }
  return context;
};
