const TutorsBio = () => {
  return (
    <>
      <div className="flex flex-col max-w-5xl py-4 mx-auto justify-evenly">
        <div className="">
          <h2 className="text-[32px] font-semibold text-left text-[#1c1c1c]">
            About Tutor
          </h2>
        </div>
        <div className="my-4">
          <div className="flex flex-col justify-evenly">
            <h3 className="text-2xl font-bold text-left text-black">Bio</h3>

            {/* Place tutor's bio  - string */}
            <p className="text-base text-justify text-black">
              I am an enthusiastic and compassionate teacher. I am dedicated
              resourceful and go driven professional educator with a solid
              commitment. I accommodate students to develop inspiring hands-on
              lessons that will captures childs imagination and breed success. I
              am experienced with educational tools and technology and I am
              proficient in specific teaching methods. My goal is to make sure
              that a student understand the concepts and implement them in real
              life. I teach by giving students relevant examples and I give them
              projects and assignments to do at the end of the lesson to make
              sure that they have understood the chapter. I frequently give
              examination tests and quizzes to students at the end of the
              chapter to discover their strengths and weaknesses. I believe in
              collaborative learning and group discussions to give the room to
              students to share and exchange their ideas. This is so to increase
              classroom participation. I also offer a discount rates to slow
              learners since they take time to understand the concepts. I
              sometimes offers free lessons if there is a need to so.
            </p>
          </div>
        </div>
        <div className="grid w-auto grid-cols-5 gap-2 mt-4 mb-8">
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Language:</span>

            {/* Place the language the tutor knows  - string  */}
            <span className=""> Chichewa, Tumbuka</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Location:</span>

            {/* Place the tutor's general location - string */}
            <span className=""> Blantyre, Malawi</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Can travel:</span>

            {/* Check if tutor can travel to student - boolean  */}
            <span className=""> No</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Teaches at students home:</span>

            {/* Check if tutor can teach the student at his house - boolean  */}
            <span className=""> No</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Homework Help:</span>

            {/* Check if tutor help the student with homework - boolean  */}
            <span className=""> Yes</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Total Teaching exp:</span>

            {/* Total teaching experience - number  */}
            <span className=""> 5.0 yrs</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Registered:</span>

            {/* Place when they registered with the website - date  */}
            <span className=""> Mar 10</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Last login:</span>

            {/* Place when they last logged in - date  */}
            <span className=""> Apr 13</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Teaches online:</span>

            {/* Check if the tutor can also teach online- boolean  */}
            <span className=""> Yes</span>
          </p>
          <p className="text-sm text-left text-[#1c1c1c]">
            <span className="font-bold">Price range:</span>

            {/* Place the minimum and maximum amount the tutor asks for - number  */}
            <span className=""> MWK8000 - MWK10000</span>
          </p>
        </div>

        <div className="mb-8">
          <p className="text-2xl font-bold text-left text-black">
            Subjects taught
          </p>

          {/* Place the subjects the tutor know's and their level - list  */}
          <ul className="mx-6 text-xl text-left text-black list-disc">
            <li>
              <span className="text-xl font-bold text-left text-black">
                Biology
              </span>
              <span className="text-xl text-left text-black">
                {' '}
                Beginner-Expert
              </span>
            </li>

            <li>
              <span className="text-xl font-bold text-left text-black">
                Agriculture
              </span>
              <span className="text-xl italic text-left text-black">
                (High School)
              </span>
              <span className="text-xl text-left text-black">
                {' '}
                Beginner-Expert
              </span>
            </li>

            <li>
              <span className="text-xl font-bold text-left text-black">
                Mathematics
              </span>
              <span className="text-xl italic text-left text-black">
                (1st year and 2nd year)
              </span>
              <span className="text-xl text-left text-black">
                {' '}
                Intermediate
              </span>
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-left text-black">Education</h3>

          {/* Place the level of the tutor's education, the level and year of study- list  */}
          <ul className="mx-6 text-xl text-justify text-black list-disc">
            <li className="text-xl text-justify text-black ">
              Honours biomedical engineering (Sep, 2017–Oct, 2022) from Malawi
              University of Science and Technology in Blantyre Malawi
            </li>
          </ul>
        </div>
        <div className="mb-8">
          <p className="text-2xl font-bold text-justify text-black">
            Experience
          </p>

          {/* Place the level of the tutor's experiences, the level and duration stayed- list  */}
          <ul className="mx-6 text-xl text-justify text-black list-disc">
            <li className="text-xl text-justify text-black">
              Honours biomedical engineering (Sep, 2017–Oct, 2022) from Malawi
              University of Science and Technology in Blantyre Malawi
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TutorsBio;
