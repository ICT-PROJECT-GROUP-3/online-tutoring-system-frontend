import Image from 'next/image';

interface TutorBriefProps {
  fullname: string;
  bio?: {
    _key: string;
    children: { text: string }[];
  }[];
}

const TutorsBrief: React.FC<TutorBriefProps> = ({ fullname, bio }) => {
  return (
    <>
      <div className="flex flex-col justify-center max-w-5xl my-8 mr-auto md:my-0 md:flex-row">
        <div className="md:mr-4 md:w-72">
          {/* Place tutor's profile pic - image*/}
          <Image
            width={280}
            height={280}
            src="/assets/images/Profile pic.png"
            className="object-cover w-full h-auto md:w-72 md:h-72 rounded-2"
            alt="Profile picture"
          />
        </div>

        <div className="flex flex-col w-auto max-w-xl my-4 md:my-4">
          <div>
            {/* Place tutor's name - string*/}
            <h1 className="relative text-4xl mb-4 text-left text-[#1c1c1c]">
              {fullname}
            </h1>
          </div>
          {/* Place tutor's bio  - string */}
          <div className="text-base text-justify text-black">
            {Array.isArray(bio) &&
              bio.map((block) => (
                <p key={block._key}>
                {block.children && block.children.map((span) => span.text).join('')}

                </p>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorsBrief;
