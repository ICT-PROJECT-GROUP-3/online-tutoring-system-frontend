export interface Tutor {
  _id: string;
  name: string;
  rating: string;
  bio?: {
    _key: string;
    children: { text: string }[];
  }[];
  languages: string[];
  location: string;
  price: number;
  subjects: string;
  education_qualifications: string[];
  session_duration: number;
  timeSlots: string;
  homework_help: string;
  maximum_number_of_sessions: number;
  weeklyAvailability: number;
  can_travel: boolean;
  phone_number: string;
  email: string;
  area_of_expertise?: {
    title: string;
  }[];
  slug: {
    current: string;
  };
  last_login: Date;
  total_teaching_experience: number;
  registration_date: Date;
}
