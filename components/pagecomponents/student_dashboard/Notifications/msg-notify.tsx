import Image from 'next/image';
import { MdMessage } from 'react-icons/md';
import RegularButton from '../../../common/buttons/primary-button';
import SecondaryButton from '../../../common/buttons/secondary-button';

const MessageNotification = () => {
  return (
    <>
      <div className="flex justify-between w-full h-40 p-4 pr-8 border-0 border-t-2 border-[#DAD5CE] text-[#1c1c1c]">
        <div className="flex ">
          <Image
            width={280}
            height={280}
            src="/assets/images/Profile pic 2.png"
            className="object-cover w-8 h-8 rounded-full sm:h-12 sm:w-12 lg:h-16 lg:w-16"
            alt="Profile picture"
          />
          <div className="flex flex-col mx-4 my-1">
            <span className="flex">
              <h3 className="font-bold">Yamikani Namphande</h3>
              <p>&nbsp;has sent you a&nbsp;</p>
              <h3 className="font-bold">Message</h3>
            </span>
            <span className="flex mb-4">
              <p>11:12 am,&nbsp;</p>
              <h3 className="font-bold">12 June 2023</h3>
            </span>
            <span className="grid grid-cols-2 gap-2 w-80">
              <RegularButton name={'Reply'} />
              <SecondaryButton name={'Noted'} />
            </span>
          </div>
        </div>
        <div className="p-1 w-12 h-12 bg-blue-500 rounded-[3px]">
          <MdMessage className="w-10 h-10 text-[#eee9e2]" />
        </div>
      </div>
    </>
  );
};

export default MessageNotification;
