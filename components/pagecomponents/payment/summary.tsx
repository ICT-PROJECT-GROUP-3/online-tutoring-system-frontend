import Image from 'next/image';
import { FaMoneyBill } from 'react-icons/fa';
import { IoLanguage, IoLocationSharp } from 'react-icons/io5';
import { TbClockFilled } from 'react-icons/tb';
import CardFlatEdgeless from '../../common/cards/card-flat-edgeless';
import client from '../../../lib/services/sanity/sanity';

const TutorCheckoutSummary = () => {
  return (
    <>
      <div className="w-80">
        <CardFlatEdgeless>
          <div className="max-w-md my-20">
            <h1 className="text-lg text-center text-[#1c1c1c] font-semibold mt-8 mb-2">
              Tutor Summary
            </h1>
            <div className="flex flex-col items-center mx-auto h-4/5">
              <Image
                width={280}
                height={280}
                src="/assets/images/Profile pic.png"
                className="object-cover w-72 h-72 rounded-2"
                alt="Profile picture"
              />
              <div className="w-64 my-4">
                <p className="text-2xl text-center text-black">
                  Yamikani Namphande
                </p>
                <p className="text-md text-center text-[#1c1c1c] mb-4">
                  Biology, Mathematics and agriculture
                </p>
                <svg
                  width={280}
                  height={1}
                  viewBox="0 0 280 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-64"
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
                    <p className="text-sm text-left text-[#1c1c1c]">Lilongwe</p>
                  </div>
                  <div className="flex flex-row my-1">
                    <div className="mr-2">
                      <TbClockFilled />
                    </div>
                    {/* Total teaching experience - number  */}
                    <p className="text-sm text-right text-[#1c1c1c]">5.0 yrs</p>
                  </div>
                  <div className="flex flex-row my-1">
                    <div className="mr-2">
                      <IoLanguage />
                    </div>
                    {/* Place the language the tutor knows  - string  */}
                    <p className="text-sm text-left text-[#1c1c1c]">
                      Chichewa, Tumbuka
                    </p>
                  </div>
                  <div className="flex flex-row my-1">
                    <div className="mr-2">
                      <FaMoneyBill />
                    </div>
                    {/* Place the minimum and maximum amount the tutor asks for - number  */}
                    <p className="text-sm text-left text-[#1c1c1c]">
                      K10000/hr
                    </p>
                  </div>
                </div>
                <svg
                  width={280}
                  height={1}
                  viewBox="0 0 280 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-64"
                  preserveAspectRatio="none"
                >
                  <line y1="0.5" x2={280} y2="0.5" stroke="#DAD5CE" />
                </svg>
                <h3 className="mt-4 text-center">Get contact information:</h3>
                <h3 className="text-[#d00000] text-lg text-center">MWK500</h3>
              </div>
            </div>
          </div>
        </CardFlatEdgeless>
      </div>
    </>
  );
};

export default TutorCheckoutSummary;
