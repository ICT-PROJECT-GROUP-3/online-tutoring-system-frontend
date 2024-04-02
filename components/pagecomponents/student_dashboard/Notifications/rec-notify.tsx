import Image from 'next/image';
import { FaLaugh } from 'react-icons/fa';
import RegularButton from '../../../common/buttons/primary-button';
import SecondaryButton from '../../../common/buttons/secondary-button';

const RecommendationNotification = () => {
  return (
    <>
      <div className="flex justify-between w-full h-40 p-4 pr-8 border-0 border-t-2 border-[#DAD5CE] text-[#1c1c1c]">
        <div className="flex ">
          <Image
            width={280}
            height={280}
            src="/assets/images/Profile pic.png"
            className="object-cover w-8 h-8 rounded-full sm:h-12 sm:w-12 lg:h-16 lg:w-16"
            alt="Profile picture"
          />
          <div className="flex flex-col mx-4 my-1">
            <span className="flex">
              <h3 className="font-bold">Alex Mwafungo</h3>
              <p>&nbsp;has shown&nbsp;</p>
              <h3 className="font-bold">Interest</h3>
              <p>&nbsp;in your Requirements</p>
            </span>
            <span className="flex mb-4">
              <p>03:47 pm,&nbsp;</p>
              <h3 className="font-bold">23 March 2023</h3>
            </span>
            <span className="grid grid-cols-2 gap-2 w-80">
              <RegularButton name={'View'} />
              <SecondaryButton name={'Noted'} />
            </span>
          </div>
        </div>
        <div className="p-1 w-12 h-12 bg-yellow-500 rounded-[3px]">
          <FaLaugh className="w-10 h-10 text-[#eee9e2]" />
        </div>
      </div>
    </>
  );
};

export default RecommendationNotification;
