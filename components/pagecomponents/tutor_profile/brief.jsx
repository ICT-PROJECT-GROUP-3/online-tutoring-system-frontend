import Image from 'next/image';

const TutorsBrief = () => {
  return (
    <>
      <div className="flex flex-row max-w-5xl mx-auto">
        <div className="w-4/12 mr-auto">
          {/* Place tutor's profile pic - image*/}
          <Image
            width={280}
            height={280}
            src="/assets/images/Profile pic.png"
            className="object-cover w-72 h-72 rounded-2"
            alt="Profile picture"
          />
        </div>

        <div className="flex flex-col justify-between w-8/12">
          <div>
            {/* Place tutor's name - string*/}
            <h1 className="relative text-4xl text-left text-[#1c1c1c]">
              Yamikani Namphande{' '}
            </h1>

            {/* Place profession/title - string*/}
            <h3 className="relative text-xl text-left text-[#403a3a]">
              Biomedical Engineer
            </h3>
          </div>
          {/* Section for quick review/beginning of bio*/}
          <div>
            <div className="flex justify-between w-auto">
              <p className="text-lg text-left text-black">Featured Review:</p>

              <p className="text-lg text-left text-[#d03434] ">
                See all reviews
              </p>
            </div>

            {/* Place review heading - string*/}
            <p className="text-2xl font-bold text-left text-black">
              Yamikani is a Super Rockstar Tutor!
            </p>

            {/* Place name of reviewer and number lessons learnt with tutor - string,number */}
            <p className="text-base italic text-left text-black">
              -- Joseph, 9 lessons with Yamikani
            </p>

            {/* Place actual review */}
            <p className="text-base text-justify text-black">
              Yamikani was fantastic at helping me understand how to approach a
              problem and was able to clearly explain new concepts. Extremely
              knowledgeable on a lot when it comes to maths. He takes the time
              to go over anything you need help with. Made sure I had complete
              understanding of all the topic we reviewed. Definitely would work
              with again.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorsBrief;
