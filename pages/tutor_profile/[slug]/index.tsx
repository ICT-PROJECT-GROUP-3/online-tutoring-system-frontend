import { GetStaticProps } from 'next';
import { createClient } from 'next-sanity';
import TutorsBio from '../../../components/pagecomponents/tutor_profile/bio';
import TutorsBrief from '../../../components/pagecomponents/tutor_profile/brief';
import Review from '../../../components/pagecomponents/tutor_profile/review';
import ProfileSummary from '../../../components/pagecomponents/tutor_profile/summary';
import Background from '../../../components/shared/background/background';
import Navbar from '../../../components/shared/navbar/Navbar';
import { Tutor } from '../../../types/typing';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  useCdn: true,
});

interface Props {
  tutor: Tutor;
}

const TutorProfile = ({ tutor }: Props) => {
  // console.log(tutor.fullname);

  return (
    <>
      <Background>
        <Navbar />
        <div className="justify-center w-11/12 mx-auto mt-20 mb-8 md:max-w-7xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row">
              <TutorsBrief key={tutor._id} name={tutor.name} bio={tutor.bio} />
              <div className="md:mx-8 md:w-80">
                <ProfileSummary
                  key={tutor._id}
                  name={tutor.name}
                  total_teaching_experience={tutor.total_teaching_experience}
                  price={tutor.price}
                  languages={tutor.languages}
                  subjects={tutor.subjects}
                  location={tutor.location}
                  last_login={tutor.last_login}
                />
              </div>
            </div>
            <div className="flex flex-col max-w-4xl">
              <TutorsBio
                key={tutor._id}
                total_teaching_experience={tutor.total_teaching_experience}
                price={tutor.price}
                languages={tutor.languages}
                subjects={tutor.subjects}
                location={tutor.location}
                education_qualifications={tutor.education_qualifications}
                homework_help={tutor.homework_help}
                can_travel={tutor.can_travel}
                area_of_expertise={tutor.area_of_expertise}
                last_login={tutor.last_login}
                registration_date={tutor.registration_date}
              />
              <Review />
            </div>
          </div>
        </div>
      </Background>
    </>
  );
};

export default TutorProfile;

export const getStaticPaths = async () => {
  const query = `*[_type == "tutor"] {
    _id,
      slug{
        current
      }
}`;

  const tutors = await client.fetch(query);
  // console.log(tutors);

  const paths = tutors.map((tutor: Tutor) => ({
    params: {
      slug: tutor.slug.current,
    },
  }));
  // console.log(paths);
  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "tutor" && slug.current == $slug][0] {
    _id,
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

  const tutor = await client.fetch(query, {
    slug: params?.slug,
  });

  // console.log(tutor);

  if (!tutor) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      tutor,
    },
  };
};
