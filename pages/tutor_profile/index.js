import TutorsBio from '/components/pagecomponents/tutor_profile/bio';
import TutorsBrief from '/components/pagecomponents/tutor_profile/brief';
import Recommended from '/components/pagecomponents/tutor_profile/recommended';
import ProfileSummary from '/components/pagecomponents/tutor_profile/summary';
import Background from '/components/shared/background/background';

const TutorProfile = () => {
  return (
    <>
      <Background>
        <div className="flex flex-row justify-center mx-auto my-8 max-w-screen-2xl">
          <div className="flex flex-col gap-4">
            <TutorsBrief />
            <TutorsBio />
            <div className="flex flex-row justify-start w-auto">
              <Recommended />
              <Recommended />
              <Recommended />
              <Recommended />
            </div>
          </div>
          <div className="mx-8 w-80">
            <ProfileSummary />
          </div>
        </div>
      </Background>
    </>
  );
};

export default TutorProfile;
