import React, { createContext, useContext, useState } from "react";

interface StepperContextData {
  tutorData: TutorData;
  setUserData: (data: TutorData) => void;
  addField: (fieldName: string) => void;
  removeField: (fieldName: string, index: number) => void;
}

interface TutorData{
    weekly_availability:number;
    session_duration:number;
    total_teaching_experience:number;
    date_of_birth:string;
    platform:string;
    email:string;
    last_login:string;
    registration_date:string;
    fullname:string;
    bio:string[];
    education_qualification:string[];
    price:number;
    teaching_experience:string[];
    reference:string[];
    area_of_expertise:string[];
    maximum_number_of_sessions:number;
    Teaches_at_home:boolean;
    languages:string[];
    time_slots:string[];
    phone_number:string;
    gender:string;
    can_travel:boolean;
    location:string;
    certification_of_credentials:string[];
  }


const initialUserData: TutorData = {
  weekly_availability:0,
  session_duration:0,
  total_teaching_experience:0,
  date_of_birth:"",
  platform:"",
  email:"",
  last_login:"",
  registration_date:"",
  fullname:"",
  bio:[],
  education_qualification:[""],
  price:0,
  teaching_experience:[""],
  reference:[""],
  area_of_expertise:[""],
  maximum_number_of_sessions:0,
  Teaches_at_home:false,
  languages:[""],
  time_slots:[],
  phone_number:"",
  gender:"",
  can_travel:false,
  location:"",
  certification_of_credentials:[""],
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
