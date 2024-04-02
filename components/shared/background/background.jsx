import Image from 'next/image';
import asset1 from '../../../public/image/shared/bg-asset-1.png';
import asset2 from '../../../public/image/shared/bg-asset-2.png';

const Background = ({ children }) => {
  return (
    <div className="">
      <div className="z-[-50] fixed bg-[#f4f3f2] h-screen w-screen">
        {/* Imported design accents for the background */}
        <Image
          className="absolute top-0 left-64 h-80 w-80"
          src={asset1}
          width={1000}
          height={1000}
          alt="...."
        />
        <Image
          className="absolute bottom-0 right-0 h-80 w-80"
          src={asset2}
          width={1000}
          height={1000}
          alt="...."
        />
      </div>
      {/* plcement of all components on top of the background */}
      {children}
    </div>
  );
};

export default Background;
