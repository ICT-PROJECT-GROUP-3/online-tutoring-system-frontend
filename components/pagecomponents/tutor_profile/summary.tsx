import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiStar } from 'react-icons/hi';
import { IoLanguage, IoLocationSharp } from 'react-icons/io5';
import { TbClockFilled } from 'react-icons/tb';
import RegularButton from '../../common/buttons/primary-button';
import CardDropShadow from '../../common/cards/card-dropshadow';
import VideoPlayer from '../../common/video-player';

interface TutorSummaryProps {
  fullname: string;
  languages: string[];
  location: string;
  price: number;
  subjects: string;
  last_login: Date;
  total_teaching_experience: number;
}

const ProfileSummary: React.FC<TutorSummaryProps> = ({
  fullname,
  languages,
  location,
  price,
  subjects,
  last_login,
  total_teaching_experience,
}) => {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);

  return (
    <>
      <div className="w-full md:fixed md:w-80">
        <CardDropShadow>
          {/* Place tutor's mock lesson video - video*/}
          <VideoPlayer />

          <div className="m-4">
            <div className="hidden md:flex md:flex-col">
              {/* Place tutor's name - string */}
              <p className="text-2xl text-center text-black">{fullname}</p>

              {/* Place the subjects the tutor teaches - list,string */}
              <p className="text-md text-center text-[#1c1c1c] mb-2">
                {subjects}
              </p>

              <svg
                width={280}
                height={1}
                viewBox="0 0 280 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
                preserveAspectRatio="none"
              >
                <line y1="0.5" x2={280} y2="0.5" stroke="#DAD5CE" />
              </svg>
              <div className="grid grid-cols-2 my-4 gap-x-1">
                <div className="flex flex-row my-1">
                  <div className="mr-2">
                    <IoLocationSharp />
                  </div>
                  {/* Place the longest distance tutor can travel - number*/}
                  <p className="text-sm text-left text-[#1c1c1c]">{location}</p>
                </div>
                <div className="flex flex-row my-1">
                  <div className="mr-2">
                    <TbClockFilled />
                  </div>
                  {/* Total teaching experience - number  */}
                  <p className="text-sm text-right text-[#1c1c1c]">
                    {total_teaching_experience}yrs
                  </p>
                </div>
                <div className="flex flex-row my-1">
                  <div className="mr-2">
                    <IoLanguage />
                  </div>
                  {/* Place the language the tutor knows  - string  */}
                  <p className="text-sm text-left text-[#1c1c1c]">
                    {languages}
                  </p>
                </div>
                <div className="flex flex-row my-1">
                  <div className="mr-2">
                    <HiStar />
                  </div>
                  {/* Place the minimum and maximum amount the tutor asks for - number  */}
                  <p className="text-sm text-left text-[#1c1c1c]"></p>
                </div>
              </div>
            </div>
            <div className="w-auto my-4 text-center">
              <p className="text-xl text-black">Hourly Rate:</p>
              <div className="my-1">
                {/* Place the minimum and maximum amount the tutor asks for - number  */}
                <p className="text-sm text-[#1c1c1c]">MWK{price}/hr</p>
              </div>

              {/* This button should take the user to payment options of the tutor */}
              <Link href={`/tutor_profile/${slug}/payment`}>
                <RegularButton name="Pay and get Contact details" />
              </Link>
            </div>
          </div>
        </CardDropShadow>
      </div>
    </>
  );
};

export default ProfileSummary;
