// import client from "../../lib/services/sanity/sanity";
import { createClient } from 'next-sanity';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  useCdn: true,
});

export async function fetchData() {
  const query = `*[_type == "tutor"] {
        fullname,
        bio,
        languages,
        subjects,
        location,
        rating, 
        price,
        area_of_expertise,
        teaching_experience,
        total_teaching_experience,
        education_qualifications,
        teaches_online,
        registration_date,
        date_of_birth,
        gender,
        work_experience,
        certification_of_credentials,
        platform,
        weekly_availability,
        time_slots,
        maximum_number_of_sessions,
        reference,
        session_duration,
        homework_help,
        can_travel,
        address, 
        phone_number,
        email,
 }`;
  const tutor = await client.fetch(query);
  console.log(tutor);
  return tutor;
}
