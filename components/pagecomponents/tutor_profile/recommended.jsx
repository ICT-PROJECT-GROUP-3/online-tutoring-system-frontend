import Image from 'next/image';
import CardDropShadow from '../../../components/common/cards/card-dropshadow';

const Recommended = () => {
  return (
    <>
      <div className="mx-auto">
        <CardDropShadow>
          {/* Place tutor's profile pic - image*/}
          <Image
            width={140}
            height={140}
            src="/assets/images/Profile pic.png"
            className="object-cover w-52 h-52 rounded-2"
            alt="Profile picture"
          />
          <div className="w-48 m-2">
            {/* Place tutor's name - string */}
            <p className="text-lg text-center text-black">Yamikani Namphande</p>

            {/* Place the subjects the tutor teaches - list,string */}
            <p className="text-sm text-center text-[#1c1c1c] mb-2">
              Biology, Mathematics and agriculture
            </p>

            <svg
              width={192}
              height={1}
              viewBox="0 0 192 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
              preserveAspectRatio="none"
            >
              <line y1="0.5" x2={192} y2="0.5" stroke="#DAD5CE" />
            </svg>
            <div className="grid w-auto grid-cols-2 m-2 gap-x-1">
              <div className="">
                {/* Place the longest distance tutor can travel - number*/}
                <p className="text-sm text-left text-[#1c1c1c]">20km</p>
              </div>
              <div className="">
                {/* Total teaching experience - number  */}
                <p className="text-sm text-right text-[#1c1c1c]">5.0 yrs</p>
              </div>
              <div className="">
                {/* Place the language the tutor knows  - string  */}
                <p className="text-sm text-left text-[#1c1c1c]">
                  Chichewa, Tumbuka
                </p>
              </div>
              <div className="">
                <p className="text-sm text-right text-[#1c1c1c]">5yrs</p>
              </div>
            </div>
          </div>
        </CardDropShadow>
      </div>
    </>
  );
};

export default Recommended;
