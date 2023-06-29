import { GetStaticProps } from 'next';
import { createClient } from 'next-sanity';
import Link from 'next/link';
import RegularButton from '../../../../components/common/buttons/primary-button';
import ContactDetails from '../../../../components/pagecomponents/checkout/contact-details';
import TutorCheckoutSummary from '../../../../components/pagecomponents/payment/summary';
import Background from '../../../../components/shared/background/background';
import Navbar from '../../../../components/shared/navbar/Navbar';
import { Tutor } from '../../../../types/typing';

const client = createClient({
  projectId: '3iouolde',
  dataset: 'production',
  useCdn: true,
});

interface Props {
  tutor: Tutor;
}

const Checkout = ({ tutor }: Props) => {
  return (
    <Background>
      <Navbar />
      <div className="flex flex-row justify-center mx-auto mt-16 mb-8 max-w-screen-2xl">
        <div className="relative flex flex-col justify-center w-full overflow-hidden">
          <div className="flex flex-col items-center h-full my-24">
            <div className="mb-8 ">
              <h1 className="text-xl text-[#1c1c1c] font-medium mb-2">
                Contact Checkout
              </h1>
            </div>
            <section className="grid w-full mb-8 place-items-center">
              <div className="flex flex-col gap-4 mx-auto">
                <ContactDetails />
              </div>
            </section>
            <div className="flex max-w-5xl mt-8 mb-16">
              <Link href="/find_tutor">
                <RegularButton name="Find another tutor" />
              </Link>
              <Link href="/user/student/Dashboardr">
                <RegularButton name="HEad to your dashboard" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-8 w-80">
          <TutorCheckoutSummary
            key={tutor._id}
            fullname={tutor.fullname}
            total_teaching_experience={tutor.total_teaching_experience}
            price={tutor.price}
            languages={tutor.languages}
            subjects={tutor.subjects}
            location={tutor.location}
            last_login={tutor.last_login}
          />
        </div>
      </div>
    </Background>
  );
};

export default Checkout;

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
